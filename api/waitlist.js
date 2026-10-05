/**
 * Public waitlist signup for the marketing site.
 * Always responds { ok: true } for a well-formed email (no enumeration).
 *
 * Persistence (first success wins):
 *  1. WAITLIST_GITHUB_TOKEN + WAITLIST_GITHUB_REPO → append JSONL in private repo
 *  2. BLOB_READ_WRITE_TOKEN → Vercel Blob JSON file per signup
 *  3. NTFY topic (default baked in) → notify + buffer for GitHub Action sync
 *
 * FormSubmit was removed: Cloudflare blocks server-side calls from Vercel (403).
 */

const DEFAULT_GITHUB_REPO = 'marcorestif/eleftheria-waitlist';
/** Secret-ish topic; also used by .github sync workflow on the waitlist repo. */
const DEFAULT_NTFY_TOPIC = 'eleftheria-waitlist-8221df0ae6301b74';

function badMethod(res) {
  res.setHeader('Allow', 'POST');
  return res.status(405).json({ ok: false });
}

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

async function saveToGitHub(entry) {
  const token = process.env.WAITLIST_GITHUB_TOKEN;
  const repo = process.env.WAITLIST_GITHUB_REPO || DEFAULT_GITHUB_REPO;
  if (!token) return false;

  const path = 'signups.jsonl';
  const api = `https://api.github.com/repos/${repo}/contents/${path}`;
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
  if (already) return true;

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
  return true;
}

async function saveToBlob(entry) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return false;

  const { put } = await import('@vercel/blob');
  const safe = entry.email.replace(/[^a-z0-9@._+-]/gi, '_');
  await put(`waitlist/${Date.now()}-${safe}.json`, JSON.stringify(entry, null, 2), {
    access: 'public',
    addRandomSuffix: true,
    contentType: 'application/json',
    token,
  });
  return true;
}

async function notifyNtfy(entry) {
  const topic = process.env.WAITLIST_NTFY_TOPIC || DEFAULT_NTFY_TOPIC;
  if (!topic) return false;

  const res = await fetch(`https://ntfy.sh/${encodeURIComponent(topic)}`, {
    method: 'POST',
    headers: {
      Title: 'Eleftheria waitlist',
      Tags: 'email,mailbox_with_mail',
      Priority: 'default',
      'Content-Type': 'text/plain; charset=utf-8',
    },
    // Machine-parseable line for the sync Action; human-readable too.
    body: JSON.stringify(entry),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`ntfy failed: ${res.status} ${text}`);
  }
  return true;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return badMethod(res);

  const body = parseBody(req);
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

  const errors = [];
  try {
    if (await saveToGitHub(entry)) {
      // Still ping ntfy so you get a live notification when direct GitHub write is used.
      try {
        await notifyNtfy(entry);
      } catch (e) {
        console.warn('ntfy notify skipped', e);
      }
      return res.status(200).json({ ok: true });
    }
  } catch (err) {
    console.error('waitlist github failed', err);
    errors.push('github');
  }

  try {
    if (await saveToBlob(entry)) {
      try {
        await notifyNtfy(entry);
      } catch (e) {
        console.warn('ntfy notify skipped', e);
      }
      return res.status(200).json({ ok: true });
    }
  } catch (err) {
    console.error('waitlist blob failed', err);
    errors.push('blob');
  }

  try {
    await notifyNtfy(entry);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('waitlist persist failed', err);
    errors.push('ntfy');
    // Acknowledge to visitor — do not leak internals.
    return res.status(200).json({ ok: true });
  }
}
