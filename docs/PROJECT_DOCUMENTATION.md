# DVSN Studio Website Project Documentation

## Project Overview

DVSN Studio is a multi-page portfolio website showcasing wedding cinematography, real estate videography, and creative film work. The site features a modern, minimalist design with strong typography and a focus on visual storytelling.

## Live Website

**Production URL**: https://jolly-biscochitos-dcd661.netlify.app/

The website is hosted on Netlify with automatic deployments from the GitHub repository.

## Website Structure

### Live Page URLs

#### Main Pages
1. **Home Page**
   - File: `index.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/

2. **Films Page**
   - File: `films.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/films.html

3. **Real Estate Page**
   - File: `realestate.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/realestate.html

4. **Studio Page**
   - File: `studio.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/studio.html

5. **X.DVSN Page**
   - File: `x.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/x.html

6. **Contact Page**
   - File: `contact.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/contact.html

#### Service Pages
1. **Wedding Day Video**
   - File: `services/wedding-videographer.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/services/wedding-videographer.html

2. **Engagement Video**
   - File: `services/engagement-video.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/services/engagement-video.html

3. **Wedding Trailers**
   - File: `services/wedding-trailers.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/services/wedding-trailers.html

#### SEO Location Pages
1. **Wedding Videographer Toronto**
   - File: `wedding-videographer-toronto.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/wedding-videographer-toronto.html

#### Documentation
1. **Navigation Dropdown Sample**
   - File: `docs/navigation-dropdown-sample.html`
   - URL: https://jolly-biscochitos-dcd661.netlify.app/docs/navigation-dropdown-sample.html

## Design System

### Typography
- Primary Font: Inter (sans-serif)
- Secondary Fonts: Bebas Neue, Playfair Display
- Font weights: 300, 400, 500, 700, 900
- Responsive sizing using clamp() functions

### Color Palette
```css
--black: #000000
--white: #ffffff
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-300: #d4d4d4
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717
--accent: #ff0000
--gold: #FFD700
```

### Layout Principles
- Swiss/International style grid system
- 12-column grid structure
- Generous white space
- Responsive design with mobile-first approach
- Minimalist aesthetic with bold typography

## Technical Implementation

### Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Vimeo embedded video players
- Git version control

### Key Features

1. **Responsive Navigation**
   - Fixed header with scroll effects
   - Color transition on scroll
   - Mobile-friendly hamburger menu (planned)

2. **Video Integration**
   - Embedded Vimeo players
   - Expandable video sections
   - Organized by categories
   - Personal project descriptions

3. **Animations**
   - Film reel animation on Films page
   - Scroll-triggered animations
   - Smooth transitions
   - Frame counter animation

4. **Performance Optimizations**
   - Lazy loading for videos
   - Optimized CSS animations
   - Minimal JavaScript usage

## Content Management

### Video Portfolio

The films page features 12 videos organized into categories:

**Wedding Films (3)**
- Vlad & Carmela (2025)
- David & Courtney (2023)
- Dan & Marissa (2019)

**Engagement Sessions (5)**
- Devin & Yeelok (2024)
- Carmela & Vlad (2024)
- Mike & Jess (2021)
- John & Nancy (2019)
- Star & Pedro (2019)

**Wedding Trailers (1)**
- Carmela & Vlad (2025)

**Promotional Videos (3)**
- LMVK Clothing Line (2019)
- DeeCee @ Coda (2019)
- Quyet Tattoos (2019)

### Personal Descriptions

Each video includes a personal description that tells the story behind the shoot, creating a more intimate connection with viewers. These descriptions include:
- Personal relationships with clients
- Behind-the-scenes moments
- Shooting challenges and spontaneous decisions
- Reflections on growth as a filmmaker

## Development Workflow

### Version Control
- Git repository hosted on GitHub
- Commit messages follow conventional format
- Regular pushes to maintain backup

### File Structure
```
DVSN Studio Project/
├── index.html
├── films.html
├── realestate.html
├── studio.html
├── x.html
├── contact.html
├── docs/
│   └── CINEMA_DESIGN_SYSTEM.md
└── PROJECT_DOCUMENTATION.md
```

## Future Enhancements

### Planned Features
1. Mobile navigation menu implementation
2. Contact form functionality
3. Additional portfolio content
4. SEO optimization
5. Performance improvements
6. Analytics integration

### Potential Additions
1. Blog section for behind-the-scenes content
2. Client testimonials section
3. Equipment and process pages
4. Dynamic content management system
5. Multi-language support

## Maintenance Notes

### Regular Updates
- Add new video projects as completed
- Update project descriptions
- Refresh hero content seasonally
- Monitor and fix any broken video embeds

### Performance Monitoring
- Check page load times
- Optimize images and videos
- Test across different devices and browsers
- Ensure accessibility standards are met

## Project Timeline

- Initial design and structure: Completed
- Films page with video integration: Completed
- Personal project descriptions: Completed
- Real estate and studio pages: In progress
- Contact functionality: Pending
- Mobile optimization: Pending

## Credits

**Development**: DVSN Studio
**Design**: Minimalist, Swiss-inspired aesthetic
**Content**: Original wedding and promotional films by DVSN Studio
**Photography**: Davis Nguyen

---

Last Updated: 2025