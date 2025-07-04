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
├── contact.html            # Contact page
├── studio.html             # Studio/About page
├── x.html                  # Personal photography
├── films/
│   ├── index.html          # Films main page
│   ├── services/
│   │   ├── wedding-videographer/
│   │   │   └── index.html
│   │   ├── engagement-video/
│   │   │   └── index.html
│   │   └── wedding-trailers/
│   │       └── index.html
│   └── locations/
│       └── toronto/
│           └── index.html  # Toronto location page
├── real-estate/
│   ├── index.html          # Real estate main page
│   └── services/           # Future real estate services
└── docs/
    ├── PROJECT_DOCUMENTATION.md
    ├── DVSN_Films_Structure_and_SEO.md
    └── navigation-dropdown-sample.html
```

## Current Tasks & Status

### ✅ Navigation Updates Completed
All pages now feature:
- Mobile responsive navigation with hamburger menus
- Services dropdown (wedding services only for Films pages)
- Consistent styling across all business verticals
- Separate navigation structures per business (Films, Real Estate, Studio)

### ✅ URL Structure Reorganization
The site has been reorganized with business-specific directories:
- **Films**: `/films/` with services under `/films/services/[service-name]/`
- **Real Estate**: `/real-estate/` with future services under `/real-estate/services/`
- **Studio**: `/studio/` (to be implemented)
- **X (Photography)**: `/x/` (to be implemented)

### Business-Specific Navigation
Each business vertical has its own navigation:
- **Films pages**: Show only Films, Services (dropdown), Locations, About, Contact
- **Real Estate pages**: Show only Real Estate, Services, Portfolio, About, Contact
- **Studio pages**: Show only Studio, Portfolio, About, Contact
- **X pages**: Show only X, Portfolio, About, Contact

### Mobile Navigation Implementation
- Breakpoint: 768px
- Hamburger menu slides from right
- Dropdown menus convert to accordion on mobile
- See `/docs/MOBILE_NAVIGATION_GUIDE.md` for implementation details

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

### Featured Wedding Film
The Films page now includes a featured wedding film section:
- Play button in hero section smoothly scrolls to featured video
- Featured video: Carmela & Vlad's wedding trailer (Vimeo ID: 1089926329)
- Section designed to fit title and video on one screen
- Responsive design adjusts for mobile devices

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