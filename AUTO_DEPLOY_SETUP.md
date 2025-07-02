# 🚀 Auto-Deploy Setup for DVSN Portfolio

## Netlify Auto-Deploy Configuration

### 1. Connect GitHub to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your GitHub
5. Select your `dvsn-portfolio` repository

### 2. Deploy Settings (Auto-configured)

Netlify will automatically detect these settings from `netlify.toml`:
- **Publish directory**: `.` (root)
- **Build command**: None (static site)
- **Auto-deploy**: Enabled for all branches

### 3. Auto-Deploy Features

✅ **Main Branch Auto-Deploy**
- Every push to `main` branch triggers deployment
- Live at: `https://your-site.netlify.app`

✅ **Branch Deploys**
- Create a branch → Push → Get preview URL
- Example: `feature-branch` → `https://feature-branch--your-site.netlify.app`

✅ **Deploy Previews**
- Pull requests get automatic preview URLs
- See changes before merging

### 4. Making Changes

```bash
# Make your changes
edit index.html
edit style.css

# Commit and push
git add .
git commit -m "Update design"
git push

# ✨ Netlify auto-deploys in ~30 seconds!
```

### 5. Deploy Notifications

In Netlify dashboard:
1. Go to Site settings → Build & deploy → Deploy notifications
2. Add email/Slack notifications for:
   - Deploy succeeded ✅
   - Deploy failed ❌
   - Deploy started 🚀

### 6. Custom Domain Auto-SSL

1. Site settings → Domain management → Add custom domain
2. Add `dvsn.studio`
3. Netlify automatically:
   - Provisions SSL certificate
   - Renews it automatically
   - Redirects HTTP to HTTPS

### 7. Rollback Feature

If something breaks:
1. Go to Deploys tab in Netlify
2. Find previous working deploy
3. Click "Publish deploy" to instantly rollback

## 🎯 Quick Commands

```bash
# Check deploy status
git push && echo "Check https://app.netlify.com/sites/YOUR-SITE/deploys"

# Create feature branch with auto-deploy
git checkout -b new-feature
git push -u origin new-feature
# Preview at: https://new-feature--your-site.netlify.app
```

## 📱 Mobile Testing

After each auto-deploy:
1. Open on phone: `https://your-site.netlify.app`
2. Or use Netlify's device preview in deploy logs

---

**That's it!** Every change you push to GitHub will automatically deploy to Netlify within seconds. No manual deployment needed! 🎉