# One-time waitlist setup (GitHub only)

Signups go to: https://github.com/marcorestif/eleftheria-waitlist/blob/main/signups.jsonl

## In Vercel (required)

1. Open: https://vercel.com/marco-restifo-pecorella/eleftheria-website/settings/environment-variables
2. Add:

| Key | Value |
|-----|--------|
| `WAITLIST_GITHUB_TOKEN` | Fine-grained PAT (see below) |
| `WAITLIST_GITHUB_REPO` | `marcorestif/eleftheria-waitlist` |

3. Environments: Production (+ Preview if you want)
4. **Redeploy** the project (Deployments → … → Redeploy)

## Create the fine-grained PAT

1. https://github.com/settings/personal-access-tokens/new
2. Name: `eleftheria-waitlist-vercel`
3. Expiration: 90 days (or custom)
4. Repository access: **Only select** `eleftheria-waitlist`
5. Permissions → Repository → **Contents: Read and write**
6. Generate and paste into Vercel as `WAITLIST_GITHUB_TOKEN`

## CLI alternative (if `vercel` is logged in)

```bash
npx vercel link
npx vercel env add WAITLIST_GITHUB_TOKEN production
npx vercel env add WAITLIST_GITHUB_REPO production
# then redeploy from the Vercel dashboard
```
