# Hevara Travel - Premium Luxury Website

This is a Next.js application for the Hevara Travel premium website.

## What's Included

- ✅ Premium dark luxury design (slate + amber/gold accents)
- ✅ Live clock widget (real-time)
- ✅ Live weather widget
- ✅ Interactive map with travel routes
- ✅ YouTube video gallery placeholders
- ✅ All destination images from hevaratravel.co.uk
- ✅ Hevara logo integrated
- ✅ Advanced filtering and search
- ✅ Custom journey builder
- ✅ Professional booking system
- ✅ Mobile responsive
- ✅ ABTA/ATOL compliance messaging

## Files Included

```
package.json          - Dependencies and scripts
next.config.js        - Next.js configuration
tailwind.config.js    - Tailwind CSS configuration
postcss.config.js     - PostCSS configuration
vercel.json           - Vercel deployment configuration
.gitignore            - Git ignore rules
pages/index.js        - Main website component
styles/globals.css    - Global styles
README.md             - This file
```

## Deployment Instructions

### Step 1: Upload to GitHub

1. Go to your GitHub repository (hevaratravel-T)
2. Upload ALL these files:
   - package.json
   - next.config.js
   - tailwind.config.js
   - postcss.config.js
   - vercel.json
   - .gitignore
   - README.md
   - pages/index.js (the website component)
   - styles/globals.css

3. Commit the changes

### Step 2: Vercel Auto-Deploys

Once you push these files to GitHub:
1. Vercel will automatically detect the Next.js app
2. It will start building (1-2 minutes)
3. Your site will deploy automatically
4. You'll get a URL like: hevara-travel-website.vercel.app

### Step 3: Connect Your Custom Domain

1. Go to your Vercel project settings
2. Click "Domains"
3. Add: hevaratravel.com
4. Vercel will show you DNS records to add to IONOS
5. Add those DNS records in IONOS
6. Wait 10-15 minutes for DNS to propagate
7. Your site is live! 🎉

## Local Development

If you want to run this locally:

```bash
npm install
npm run dev
```

Then visit: http://localhost:3000

## Troubleshooting

**Issue: Site shows 404 error**
- Make sure all files are uploaded to GitHub
- Make sure .gitignore is uploaded (tells Git to exclude node_modules)
- Wait 2-3 minutes for Vercel to rebuild
- Refresh your browser

**Issue: CSS not loading**
- Make sure styles/globals.css is in the correct path
- Make sure tailwind.config.js is in the root directory
- Vercel will rebuild automatically

**Issue: Images not loading**
- Images load from hevaratravel.co.uk - make sure those URLs still work
- Check your internet connection

## Support

If anything goes wrong:
1. Check the Vercel deployment logs (Vercel Dashboard > Your Project > Deployments)
2. Make sure all files are uploaded to GitHub in the correct structure
3. Try redeploying (click Redeploy in Vercel dashboard)

## Next Steps

Once deployed:
- ✅ Connect weather API (OpenWeatherMap) for real weather data
- ✅ Connect Google Maps API for interactive maps
- ✅ Set up email notifications for bookings
- ✅ Add real YouTube video IDs to the gallery
- ✅ Connect to your booking system (Calendly, etc.)
- ✅ Set up analytics (Google Analytics, Vercel Analytics)

---

**Website Built:** July 2026
**Framework:** Next.js + React + Tailwind CSS
**Hosting:** Vercel
**Domain:** hevaratravel.com

Enjoy your premium travel website! 🚀
