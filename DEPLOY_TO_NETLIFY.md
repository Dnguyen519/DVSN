# 🚀 Deploy DVSN Studios to Netlify

Follow these steps to deploy your portfolio to Netlify:

## Method 1: Deploy with Git (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial DVSN portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Settings will auto-configure from `netlify.toml`
   - Click "Deploy site"

## Method 2: Direct Upload (Quick Test)

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire project folder onto the page
   - Netlify will build and deploy automatically

## Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   # Login to Netlify
   netlify login
   
   # Deploy to Netlify
   netlify deploy
   
   # Deploy to production
   netlify deploy --prod
   ```

## 🔧 Post-Deployment Setup

### 1. Custom Domain (Optional)
- In Netlify dashboard → Domain settings
- Add custom domain: `dvsn.studio`
- Follow DNS configuration instructions

### 2. Environment Variables
- In Netlify dashboard → Site settings → Environment variables
- Add any API keys or secrets needed

### 3. Form Handling
- Netlify automatically handles forms
- Add `netlify` attribute to any form:
  ```html
  <form netlify>
  ```

## 📋 What's Included

✅ Responsive design  
✅ SEO optimized  
✅ Fast loading  
✅ Dark cinematic theme  
✅ Three brand sections  
✅ Contact form ready  

## 🔗 Your Site URL

After deployment, your site will be available at:
- **Netlify URL**: `https://[your-site-name].netlify.app`
- **Custom Domain**: `https://dvsn.studio` (after setup)

## 🎬 Next Steps

1. Add your actual videos and images
2. Connect Cloudflare Stream for video hosting
3. Set up contact form handling
4. Add Google Analytics
5. Implement the full cinematic components

---

Need help? Check the [Netlify docs](https://docs.netlify.com) or your build logs in the Netlify dashboard.