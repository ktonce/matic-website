/*
  Rate limiting: 5 richieste per IP ogni 10 minuti.

  Due modalità, stessa interfaccia:

  1. PRODUCTION — Upstash Redis / Vercel KV via REST, se sono presenti
     UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
     (oppure KV_REST_API_URL + KV_REST_API_TOKEN).
     Nessuna dipendenza npm: si usa fetch sull'endpoint REST, quindi il
     build non si rompe se le variabili non ci sono.

  2. DEV / FALLBACK — in-memory.
     ATTENZIONE: su serverless la memoria NON è condivisa fra le istanze e
     viene persa al cold start. Il limite in-memory è quindi per-istanza e
     NON garantisce un rate limiting globale in produzione: serve solo come
     freno all'abuso banale finché non si configura Redis.
*/

const WINDOW_MS = 10 * 60 * 1000;
const WINDOW_S = WINDOW_MS / 1000;
const MAX_HITS = 5;

// ── Redis (Upstash REST / Vercel KV) ────────────────────────────────────────
function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || '';
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || '';
  return url && token ? { url: url.replace(/\/$/, ''), token } : null;
}

export function rateLimitMode() {
  return redisConfig() ? 'redis' : 'memory';
}

async function redisCmd(cfg, parts) {
  const res = await fetch(cfg.url + '/' + parts.map(encodeURIComponent).join('/'), {
    headers: { Authorization: 'Bearer ' + cfg.token }
  });
  if (!res.ok) throw new Error('redis-http:' + res.status);
  const body = await res.json();
  return body && body.result;
}

async function redisLimit(cfg, ip) {
  const key = 'matic:lead:' + ip;
  const count = Number(await redisCmd(cfg, ['INCR', key]));
  if (count === 1) await redisCmd(cfg, ['EXPIRE', key, String(WINDOW_S)]);
  if (count > MAX_HITS) {
    let ttl = Number(await redisCmd(cfg, ['TTL', key]));
    if (!Number.isFinite(ttl) || ttl < 0) ttl = WINDOW_S;
    return { allowed: false, retryAfter: ttl, mode: 'redis' };
  }
  return { allowed: true, remaining: MAX_HITS - count, mode: 'redis' };
}

// ── Fallback in-memory ──────────────────────────────────────────────────────
const hits = new Map();

function memoryLimit(ip) {
  const now = Date.now();
  const rec = hits.get(ip);

  if (!rec || now - rec.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return { allowed: true, remaining: MAX_HITS - 1, mode: 'memory' };
  }

  rec.count += 1;
  if (rec.count > MAX_HITS) {
    return { allowed: false, retryAfter: Math.ceil((WINDOW_MS - (now - rec.start)) / 1000), mode: 'memory' };
  }
  return { allowed: true, remaining: MAX_HITS - rec.count, mode: 'memory' };
}

// Pulizia opportunistica per non far crescere la Map senza limite.
export function sweep() {
  const now = Date.now();
  for (const [ip, rec] of hits) if (now - rec.start > WINDOW_MS) hits.delete(ip);
}

/* Restituisce { allowed, remaining?, retryAfter?, mode }.
   Se Redis è configurato ma non risponde, si degrada su in-memory:
   un guasto dell'infrastruttura di rate limiting non deve bloccare i lead. */
export async function rateLimit(ip) {
  const cfg = redisConfig();
  if (cfg) {
    try {
      return await redisLimit(cfg, ip);
    } catch (err) {
      console.error('[MATIC][lead] rate-limit redis non disponibile, fallback in-memory:', err && err.message);
    }
  }
  sweep();
  return memoryLimit(ip);
}
