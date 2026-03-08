# Deployment Guide - Vercel

## Quick Start (5 minutes)

### Step 1: Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio website"
```

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Select your portfolio repository
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `venugudipati.com`)
3. Follow Vercel's instructions to update your DNS settings
4. Vercel will automatically provision SSL certificate

## Your Website Will Be Live At:

- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

## Automatic Deployments

Every time you push to your `main` branch, Vercel will automatically:
- Build your site
- Run tests (if configured)
- Deploy to production
- Provide a unique preview URL

## Preview Deployments

For pull requests and other branches:
- Vercel creates preview deployments
- Each PR gets a unique URL for testing
- Perfect for reviewing changes before merging

## Environment Variables (If Needed)

If you add features requiring environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `NEXT_PUBLIC_GA_ID` (Google Analytics)
   - `CONTACT_FORM_API` (Contact form backend)
3. Redeploy for changes to take effect

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression (Brotli/Gzip)

## Monitoring

Access analytics in Vercel dashboard:
- Page views
- Performance metrics
- Error tracking
- Visitor insights

## Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test
- Image paths: Ensure all images are in `public/` directory

### Site Not Updating

- Check deployment status in Vercel dashboard
- Verify latest commit is deployed
- Clear browser cache (Ctrl+Shift+R)

### Custom Domain Issues

- Verify DNS settings are correct
- Allow 24-48 hours for DNS propagation
- Check SSL certificate status in Vercel

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Community Support: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

🎉 Your portfolio is now live and ready to showcase your expertise!
