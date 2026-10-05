# Eleftheria Website

Public marketing site for Eleftheria.

## Deploy on Vercel

1. Import this repository in the Vercel dashboard.
2. Framework Preset: **Other** (static + `/api`).
3. Build Command: leave empty (or `npm install` if prompted).
4. Output Directory: leave empty / `.` (root).
5. Deploy.

## Waitlist (`/api/waitlist`)

The form posts to a Vercel Serverless Function.

**Note:** FormSubmit cannot be used from Vercel — Cloudflare returns 403 to server-side calls.

### How signups are stored

1. **GitHub (optional, best)** — set in Vercel env:
   - `WAITLIST_GITHUB_TOKEN` — fine-grained PAT, Contents R/W on `marcorestif/eleftheria-waitlist`
   - `WAITLIST_GITHUB_REPO` — `marcorestif/eleftheria-waitlist`
2. **Vercel Blob** — if Blob is linked (`BLOB_READ_WRITE_TOKEN`)
3. **Default (live now):** posts to a private [ntfy.sh](https://ntfy.sh) topic; a GitHub Action on the waitlist repo syncs into `signups.jsonl` every 15 minutes

Live list (private): https://github.com/marcorestif/eleftheria-waitlist/blob/main/signups.jsonl

Optional live notifications: subscribe the ntfy app/web to topic `eleftheria-waitlist-8221df0ae6301b74`.

Hobby cost at waitlist volume: effectively **$0**.
