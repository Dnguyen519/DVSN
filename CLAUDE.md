# CLAUDE.md - AI Assistant Instructions for DVSN Studio Project

## Project Overview
This is the DVSN Studio website - a cinematic wedding videography portfolio site hosted on Netlify.

**Live URL**: https://jolly-biscochitos-dcd661.netlify.app/

## Important Context
- The site uses vanilla HTML/CSS/JavaScript (no framework)
- Hosted on Netlify with automatic deployments from GitHub
- Design aesthetic: Swiss-style grid, black/white/gold colors, cinematic feel
- Mobile-first responsive design

## Project Structure
```
/
├── index.html              # Home page
├── films.html              # Video portfolio
├── realestate.html         # Real estate videography
├── studio.html             # About page
├── x.html                  # Personal photography
├── contact.html            # Contact page
├── wedding-videographer-toronto.html  # SEO location page
├── services/
│   ├── wedding-day-video.html
│   ├── engagement-video.html
│   └── wedding-trailers.html
└── docs/
    ├── PROJECT_DOCUMENTATION.md
    ├── DVSN_Films_Structure_and_SEO.md
    └── navigation-dropdown-sample.html
```

## Current Tasks & Status

### Navigation Update Required
The navigation needs to be updated across ALL pages to include the services dropdown menu. Currently, the dropdown is only demonstrated in `/docs/navigation-dropdown-sample.html`.

Pages that need navigation updates:
- index.html
- films.html
- realestate.html
- studio.html
- x.html
- contact.html
- All service pages
- wedding-videographer-toronto.html

### Design Consistency
When updating navigation or creating new pages:
1. Use the same color variables (--black, --white, --gold, etc.)
2. Maintain the Inter font family
3. Keep the Swiss-style 12-column grid
4. Ensure mobile responsiveness
5. Include scroll effects (navbar changes on scroll)

## Common Commands
```bash
# Check changes
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Update navigation with services dropdown"

# Push to trigger Netlify deployment
git push
```

## Video Embeds
All videos are hosted on Vimeo and embedded using their iframe embed code. When adding new videos:
1. Get the embed code from Vimeo
2. Wrap in a responsive container
3. Include title and description sections

## SEO Considerations
- Each page needs proper meta tags
- Location pages need schema markup
- Service pages should target specific keywords
- Maintain clean URL structure

## Testing
Always test:
1. Mobile responsiveness
2. Navigation functionality
3. Video loading
4. Cross-browser compatibility
5. Page load speed

## Deployment
- Push to main branch triggers automatic Netlify deployment
- Check Netlify dashboard for build status
- Live updates typically take 1-2 minutes

Remember: The goal is cinematic, professional, and performant.