# Google OAuth Setup Guide

This is a **one-time setup** that allows ALL users to authenticate through your app.

## Step-by-Step Instructions

### 1. Go to Google Cloud Console
Visit: https://console.cloud.google.com/

### 2. Create a New Project
- Click "Select a project" dropdown at the top
- Click "NEW PROJECT"
- Project name: `Uneventful`
- Click "CREATE"
- Wait a moment, then select the new project

### 3. Enable Google Calendar API
- In the left sidebar: "APIs & Services" > "Library"
- Search for: `Google Calendar API`
- Click on it
- Click "ENABLE"

### 4. Configure OAuth Consent Screen
- Go to: "APIs & Services" > "OAuth consent screen"
- Select: **External** (this allows anyone with a Google account to use your app)
- Click "CREATE"

**App information:**
- App name: `Uneventful`
- User support email: (your email)
- App logo: (optional - can skip)
- Application home page: `https://uneventful.vercel.app`
- Application privacy policy: `https://uneventful.vercel.app` (or skip for now)
- Application terms of service: (can skip)
- Authorized domains: `vercel.app`
- Developer contact: (your email)
- Click "SAVE AND CONTINUE"

**Scopes:**
- Click "ADD OR REMOVE SCOPES"
- Search for and add BOTH of these scopes:
  1. `.../auth/calendar.events` - "View and edit events on all your calendars"
  2. `.../auth/calendar.calendarlist.readonly` - "View your calendars"
- Check the boxes for BOTH scopes
  - **Why two scopes?** `calendar.events` allows viewing/editing/deleting events, and `calendar.calendarlist.readonly` allows listing which calendars you have access to
  - **Important:** Use these minimal scopes instead of the broader `calendar` scope for better privacy
- Click "UPDATE"
- Click "SAVE AND CONTINUE"

**Test users:**
- Click "+ ADD USERS"
- Enter your email address (the one you'll use to test)
- Add any other emails you want to give access to
- Click "ADD"
- Click "SAVE AND CONTINUE"

**Note:** While in Testing mode, only these test users can sign in (max 100). To allow anyone to use your app, you'll need to publish it later (see "Publishing the App" section at the bottom).

- Click "BACK TO DASHBOARD"

### 5. Create OAuth 2.0 Credentials
- Go to: "APIs & Services" > "Credentials"
- Click: "CREATE CREDENTIALS" > "OAuth client ID"

**Configure:**
- Application type: **Web application**
- Name: `Uneventful Web Client`

**Authorized redirect URIs:**
- Click "+ ADD URI"
- Enter: `https://uneventful.vercel.app/api/auth/callback`
- Click "CREATE"

### 6. Save Your Credentials
A popup will appear with:
- **Client ID** (looks like: `123456789-abc123.apps.googleusercontent.com`)
- **Client Secret** (looks like: `GOCSPX-aBcDeFgHiJkLmNoPqRsTuVwX`)

**Copy both of these!**

### 7. Add Credentials to Vercel

Run these commands in your terminal:

```bash
# Add Client ID
vercel env add GOOGLE_CLIENT_ID production
# Paste your Client ID when prompted

# Add Client Secret
vercel env add GOOGLE_CLIENT_SECRET production
# Paste your Client Secret when prompted
```

### 8. Redeploy
```bash
vercel --prod
```

Wait ~2 minutes for deployment to complete.

### 9. Test It!
Visit: https://uneventful.vercel.app
- Click "Sign in with Google"
- Authorize the app
- You should see your calendar events!

## When You Get Your Domain (uneventful.com)

You'll need to:
1. Add the new redirect URI in Google Console:
   - Go to: "APIs & Services" > "Credentials"
   - Edit your OAuth client
   - Add: `https://uneventful.com/api/auth/callback`

2. Update Vercel environment variables:
   ```bash
   vercel env rm GOOGLE_REDIRECT_URI production
   vercel env add GOOGLE_REDIRECT_URI production
   # Enter: https://uneventful.com/api/auth/callback

   vercel env rm FRONTEND_URL production
   vercel env add FRONTEND_URL production
   # Enter: https://uneventful.com
   ```

3. Redeploy:
   ```bash
   vercel --prod
   ```

## Troubleshooting

**Error: redirect_uri_mismatch**
- The redirect URI in Google Console must EXACTLY match what's in Vercel
- Check for typos, http vs https, trailing slashes

**Error: access_denied**
- User cancelled the authorization
- Or your OAuth consent screen is not configured properly

**Error: invalid_client**
- Check that GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are set correctly in Vercel

## Security Notes

- **Never** commit Client ID or Client Secret to git
- These credentials are stored encrypted in Vercel
- Users authorize YOUR app to access THEIR calendar
- Each user's data is isolated (they only see their own events)

## Publishing the App (To Allow Anyone to Use It)

Initially, your OAuth consent screen is in "Testing" mode with these limitations:
- **Only test users** you explicitly added can sign in
- **Maximum 100 test users**

To allow ANYONE with a Google account to use your app:

1. Go to "OAuth consent screen" in Google Cloud Console
2. Click "PUBLISH APP"
3. Click "Confirm"
4. Google will review your app (can take a few days to weeks)
5. Once approved: unlimited public access

**For now:** Testing mode is fine to get started. You can publish later when you're ready for public use!

---

**Once this is done, you're live and anyone can use your app!** 🎉
