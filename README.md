# Eleftheria Website

Public marketing site for Eleftheria.

## Deploy on Vercel

1. Import this repository in the Vercel dashboard.
2. Framework Preset: **Other** (static + `/api`).
3. Build Command: leave empty (or `npm install` if prompted).
4. Output Directory: leave empty / `.` (root).
5. Deploy.

## Waitlist (`/api/waitlist`)

The Join waitlist form posts to a Vercel Serverless Function. Persistence order:

1. **GitHub (best list)** — set env vars:
   - `WAITLIST_GITHUB_TOKEN` — fine-grained PAT with Contents read/write on a **private** repo
   - `WAITLIST_GITHUB_REPO` — e.g. `marcorestif/eleftheria-waitlist`
   - Appends one JSON line per signup to `signups.jsonl`
2. **Vercel Blob** — enable Blob in the project; uses `BLOB_READ_WRITE_TOKEN` automatically
3. **Email fallback (default)** — notifies `WAITLIST_NOTIFY_EMAIL` via FormSubmit  
   (defaults to the project owner email). **Confirm the activation email from FormSubmit once.**

Optional env:
- `WAITLIST_NOTIFY_EMAIL` — override notification inbox

Hobby plan cost for this endpoint: effectively **$0** at waitlist volume.
