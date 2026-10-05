/**
 * Public waitlist signup — persists only to a private GitHub repo.
 * Always responds { ok: true } for a well-formed email (no enumeration).
 *
 * Requires Vercel env:
 *   WAITLIST_GITHUB_TOKEN  — fine-grained PAT (Contents: Read/Write) on the waitlist repo
 *   WAITLIST_GITHUB_REPO   — optional, default marcorestif/eleftheria-waitlist
 */
const DEFAULT_GITHUB_REPO = 'marcorestif/eleftheria-waitlist';
const SIGNUPS_PATH = 'signups.jsonl';

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

function normalizeEmail(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function appendSignup(entry) {
  const token = process.env.WAITLIST_GITHUB_TOKEN;
  const repo = process.env.WAITLIST_GITHUB_REPO || DEFAULT_GITHUB_REPO;
  if (!token) {
    throw new Error('WAITLIST_GITHUB_TOKEN is not configured');
  }

  const api = `https://api.github.com/repos/${repo}/contents/${SIGNUPS_PATH}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'eleftheria-website-waitlist',
  };

  let sha = null;
  let existing = '';
  const getRes = await fetch(api, { headers });
  if (getRes.status === 200) {
    const data = await getRes.json();
    sha = data.sha;
    existing = Buffer.from(data.content, 'base64').toString('utf8');
  } else if (getRes.status !== 404) {
    throw new Error(`GitHub read failed: ${getRes.status}`);
  }

  const lines = existing.split('\n').filter(Boolean);
  const already = lines.some((line) => {
    try {
      return JSON.parse(line).email === entry.email;
    } catch {
      return false;
    }
  });
  if (already) return { deduped: true };

  const next = `${existing}${existing && !existing.endsWith('\n') ? '\n' : ''}${JSON.stringify(entry)}\n`;
  const putRes = await fetch(api, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `waitlist: ${entry.email}`,
      content: Buffer.from(next, 'utf8').toString('base64'),
      sha: sha || undefined,
    }),
  });
  if (!putRes.ok) {
    const text = await putRes.text();
    throw new Error(`GitHub write failed: ${putRes.status} ${text}`);
  }
  return { deduped: false };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const body = parseBody(req);
  // Honeypot
  if (body.website) return res.status(200).json({ ok: true });

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'invalid_email' });
  }

  const entry = {
    email,
    locale: String(body.locale || 'en').slice(0, 16),
    source: String(body.source || 'site').slice(0, 64),
    created_at: new Date().toISOString(),
  };

  try {
    await appendSignup(entry);
  } catch (err) {
    console.error('waitlist github persist failed', err);
    // Still ack the visitor; check Vercel logs if signups are missing.
  }

  return res.status(200).json({ ok: true });
}
