# Eleftheria Website

Public marketing site for Eleftheria.

## Deploy on Vercel

1. Import this repository in the Vercel dashboard.
2. Framework Preset: **Other** (static + `/api`).
3. Build Command: leave empty (or `npm install` if prompted).
4. Output Directory: leave empty / `.` (root).
5. Deploy.

## Waitlist (`/api/waitlist`)

Signups are written **only** to the private GitHub file:

https://github.com/marcorestif/eleftheria-waitlist/blob/main/signups.jsonl

### Required Vercel env vars

| Name | Value |
|------|--------|
| `WAITLIST_GITHUB_TOKEN` | Fine-grained PAT with **Contents: Read and write** on `marcorestif/eleftheria-waitlist` only |
| `WAITLIST_GITHUB_REPO` | `marcorestif/eleftheria-waitlist` |

Hobby plan cost at waitlist volume: effectively **$0**.
