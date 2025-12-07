# Maintainer Guide

This guide is for maintaining and deploying updates to the live Uneventful instance.

## Current Deployment

- **Live URL:** https://uneventful.vercel.app (will be https://uneventful.com)
- **Platform:** Vercel (free tier)
- **Repository:** https://github.com/Pharkie/Uneventful
- **Auto-deploy:** Enabled on main branch

## Making Updates

1. **Make changes locally:**
```bash
# Edit files as needed
git add .
git commit -m "Description of changes"
```

2. **Push to GitHub:**
```bash
git push
```

3. **Vercel auto-deploys** - Wait ~2 minutes and changes are live!

## Environment Variables

Currently set in Vercel dashboard:

| Variable | Purpose | Current Value |
|----------|---------|---------------|
| `GOOGLE_CLIENT_ID` | OAuth client ID | (set in Vercel) |
| `GOOGLE_CLIENT_SECRET` | OAuth client secret | (set in Vercel) |
| `GOOGLE_REDIRECT_URI` | OAuth callback URL | `https://uneventful.vercel.app/api/auth/callback` |
| `JWT_SECRET` | Token signing key | (random string) |
| `FRONTEND_URL` | Frontend URL | `https://uneventful.vercel.app` |
| `NODE_ENV` | Environment | `production` |

### To Update Environment Variables:

1. Go to [Vercel Dashboard](https://vercel.com/adam-knowles-projects/uneventful/settings/environment-variables)
2. Edit the variable
3. Redeploy: `vercel --prod`

## Setting Up Custom Domain (uneventful.com)

### When domain is purchased:

1. **In Vercel Dashboard:**
   - Go to Settings > Domains
   - Add `uneventful.com` and `www.uneventful.com`
   - Note the DNS records Vercel provides

2. **In Domain Registrar:**
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

3. **Update Environment Variables:**
   - Change `FRONTEND_URL` to `https://uneventful.com`
   - Change `GOOGLE_REDIRECT_URI` to `https://uneventful.com/api/auth/callback`

4. **Update Google OAuth:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Add `https://uneventful.com/api/auth/callback` to authorized redirect URIs

5. **Redeploy:**
```bash
vercel --prod
```

## Google Cloud Console Setup

### Initial Setup (Already Done):

1. Created project: "Uneventful"
2. Enabled Google Calendar API
3. Created OAuth 2.0 Client ID
4. Added authorized redirect URIs:
   - `https://uneventful.vercel.app/api/auth/callback`

### When Domain Changes:

- Add new domain to authorized redirect URIs
- Update `GOOGLE_REDIRECT_URI` in Vercel

## Monitoring

### Check Deployment Status:
```bash
vercel ls
```

### View Logs:
```bash
vercel logs
```

### View in Dashboard:
https://vercel.com/adam-knowles-projects/uneventful

## Troubleshooting

### Build Fails:
- Check logs: `vercel logs`
- Look for TypeScript or dependency errors
- Fix and push to GitHub

### OAuth Errors:
- Verify redirect URI in Google Console matches Vercel env var exactly
- Check all environment variables are set
- Redeploy after changes

### API Timeouts:
- Check if trying to delete >100 events (enforced limit)
- View function logs in Vercel dashboard

## Cost Breakdown

- **Vercel:** FREE (within limits)
  - 100 GB bandwidth/month
  - Unlimited serverless function executions
  - Far more than needed for this app

- **Google Calendar API:** FREE
  - 1 billion requests/day quota

- **Domain:** ~$12-15/year
  - Only ongoing cost

## Repository Workflow

- **main branch:** Auto-deploys to production
- **GitHub:** Used as git repository and backup
- **Vercel:** Watches main branch for changes

## Manual Deploy (If Needed)

```bash
vercel --prod
```

This bypasses auto-deploy and forces a new production deployment.

## Updating Dependencies

```bash
# Update frontend dependencies
cd frontend && npm update

# Update API dependencies
cd ../api && npm update

# Test, commit, and push
```

## Security Notes

- Never commit `.env` files
- Rotate `JWT_SECRET` every 6 months
- Monitor Vercel usage to stay within free tier
- Keep dependencies updated (`npm audit`)

## Support & Issues

Users can report issues at: https://github.com/Pharkie/Uneventful/issues

---

**Remember:** Every push to main = automatic production deployment!
