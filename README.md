# DVSN Portfolio - Cinematic Multi-Brand Experience

A high-performance, cinematic portfolio website system for DVSN Studios, featuring wedding videography, real estate media, and creative services across multiple brand verticals.

## 🎬 Project Overview

DVSN Portfolio is a dark-themed, movie-inspired web experience that showcases professional videography and media services. Built with performance and SEO at its core, this project uses an innovative infinite agentic loop system to generate and test multiple design variations before final implementation.

### Brand Architecture

- **DVSN** - Main umbrella brand and landing portal
- **DVSN.Films** - Wedding videography and cinematography
- **DVSN.Media** - Corporate video, real estate, digital marketing
- **X.DVSN** - Personal brand and director's portfolio

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/dvsn-portfolio.git

# Install dependencies
cd dvsn-portfolio
npm install

# Start the infinite design loop
npm run design:generate

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Key Features

### Cinematic Design System
- Ultra-wide aspect ratios (2.35:1) for movie-like sections
- Film grain overlays and noise textures
- Smooth fade-to-black transitions
- Typography inspired by movie credits
- Dark theme with strategic accent colors

### Performance Optimized
- 4K video hosting via Cloudflare Stream
- Lazy loading with intersection observers
- Progressive enhancement approach
- Target 95+ Lighthouse score
- Optimized for mobile-first experience

### Infinite Design Loop
- AI-powered design variation generator
- Real-time preview environment
- Feedback-driven learning system
- Automated A/B testing capabilities
- Version control for all design iterations

### Multi-Brand Management
- Monorepo architecture with shared components
- Brand-specific customizations
- Unified navigation system
- Cross-brand content sharing
- Centralized asset management

## 📁 Project Structure

```
dvsn-portfolio/
├── apps/
│   ├── main/              # DVSN main site
│   ├── films/             # Wedding videography
│   ├── media/             # Corporate services
│   └── personal/          # Director portfolio
├── packages/
│   ├── ui/                # Shared components
│   ├── design-system/     # Cinema theme
│   └── infinite-loop/     # Design generator
├── designs/
│   ├── variants/          # Generated designs
│   ├── approved/          # Selected designs
│   └── feedback/          # User feedback data
├── docs/
│   ├── INFINITE_LOOP_INSTRUCTIONS.md
│   ├── BRAND_ARCHITECTURE.md
│   ├── CINEMA_DESIGN_SYSTEM.md
│   ├── VIDEO_OPTIMIZATION.md
│   └── CLAUDE.md
└── config/
    ├── seo.config.js
    └── video.config.js
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Cinema Theme
- **Animation**: Framer Motion + GSAP
- **Video**: Cloudflare Stream
- **Database**: Supabase (for analytics/bookings)
- **Email**: Resend API
- **Hosting**: Netlify
- **Monitoring**: OpenTelemetry

## 🎨 Design Philosophy

Our design approach follows cinematic principles:

1. **Storytelling First** - Every section tells a visual story
2. **Dramatic Impact** - Bold contrasts and thoughtful reveals
3. **Technical Excellence** - Smooth performance at 4K quality
4. **Emotional Connection** - Design that resonates with couples and businesses

## 📈 SEO Strategy

- Local SEO optimization for GTA region
- Service-specific landing pages
- Schema markup for video content
- Performance-first approach
- Mobile-optimized experience

### Target Keywords
- "Wedding videographer Toronto"
- "Real estate videography GTA"
- "Corporate video production Ontario"
- "Cinematic wedding films Toronto"

## 🔧 Development Workflow

1. **Design Generation**
   ```bash
   npm run design:generate
   ```
   Use the infinite loop to create and test designs

2. **Component Development**
   ```bash
   npm run dev:ui
   ```
   Build in the shared component library

3. **Brand-Specific Work**
   ```bash
   npm run dev:films  # or media, personal
   ```

4. **Testing**
   ```bash
   npm run test
   npm run test:e2e
   npm run lighthouse
   ```

## 📝 Documentation

- [Infinite Loop Instructions](./docs/INFINITE_LOOP_INSTRUCTIONS.md) - Design generation guide
- [Brand Architecture](./docs/BRAND_ARCHITECTURE.md) - Multi-brand strategy
- [Cinema Design System](./docs/CINEMA_DESIGN_SYSTEM.md) - Theme specifications
- [Video Optimization](./docs/VIDEO_OPTIMIZATION.md) - 4K hosting setup
- [AI Instructions](./docs/CLAUDE.md) - Development assistant guide

## 🚦 Performance Targets

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- 4K Video Start Time: < 2s

## 🤝 Contributing

This project uses AI-assisted development through Claude. See [CLAUDE.md](./docs/CLAUDE.md) for AI collaboration guidelines.

## 📄 License

Copyright © 2024 DVSN Studios. All rights reserved.

---

Built with 🎬 by DVSN Studios | Serving GTA and Southern Ontario