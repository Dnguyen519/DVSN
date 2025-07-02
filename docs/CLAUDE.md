# CLAUDE.md - AI Development Assistant Instructions

## 🤖 Overview

This document provides instructions for AI assistants (Claude) working on the DVSN portfolio project. It ensures consistent development practices, maintains the cinematic vision, and leverages the infinite loop design system effectively.

## 🎯 Project Context

You are helping build a cinematic, dark-themed portfolio website for DVSN Studios, a videography company with multiple brand verticals:
- **DVSN**: Main umbrella brand
- **DVSN.Films**: Wedding cinematography
- **DVSN.Media**: Corporate/real estate video
- **X.DVSN**: Personal director brand

## 🎬 Core Design Principles

### Always Remember:
1. **Cinematic First**: Every element should feel like it belongs in a movie
2. **Performance Matters**: 4K videos must load smoothly
3. **Dark Theme**: Pure blacks (#000000) with subtle highlights
4. **Multi-Brand**: Each sub-brand has unique personality within the system
5. **SEO Critical**: Local Toronto/GTA optimization is essential

## 📋 Development Guidelines

### Code Style
```typescript
// ✅ GOOD: Descriptive, cinematic naming
const fadeToBlackTransition = () => { ... }
const CinematicHeroSection = () => { ... }

// ❌ BAD: Generic naming
const transition1 = () => { ... }
const HeroSection = () => { ... }
```

### Component Structure
```tsx
// Always use TypeScript with proper interfaces
interface VideoPlayerProps {
  videoId: string;
  aspectRatio?: '21:9' | '16:9';
  quality?: '4k' | '1080p' | '720p';
}

// Prefer composition over inheritance
export const CinematicPlayer: FC<VideoPlayerProps> = ({ 
  videoId, 
  aspectRatio = '21:9' 
}) => {
  // Implementation
};
```

### Animation Guidelines
- Use Framer Motion for complex animations
- Prefer CSS transitions for simple hover states
- Always include `prefers-reduced-motion` checks
- Cinematic timing: 300-2000ms durations

## 🔧 Common Tasks

### 1. Creating New Components

When creating components, always:
1. Check existing components first
2. Follow the cinematic design system
3. Include loading and error states
4. Make it responsive by default
5. Add proper TypeScript types

```tsx
// Example component structure
import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Props
}

export const ComponentName: FC<ComponentNameProps> = (props) => {
  // Implementation
};
```

### 2. Implementing Animations

```tsx
// Cinematic fade-in animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] // Cinematic easing
    }
  }
};
```

### 3. Video Implementation

Always use the CloudflareVideoPlayer component:
```tsx
import { CloudflareVideoPlayer } from '@/components/video';

// Usage
<CloudflareVideoPlayer
  videoId={video.cloudflareId}
  poster={video.thumbnail}
  aspectRatio="21:9"
  lazyLoad={true}
/>
```

## 🎨 Styling Approach

### Use CSS Modules + Tailwind
```tsx
// ComponentName.module.css
.hero {
  composes: cinematic-gradient from global;
  aspect-ratio: 2.35 / 1;
}

// Component usage
<div className={`${styles.hero} relative overflow-hidden`}>
  {/* Tailwind for utilities, CSS Modules for complex styles */}
</div>
```

### Dark Theme Variables
```css
/* Always use these CSS variables */
--black-pure: #000000;
--black-soft: #0A0A0A;
--black-elevated: #111111;
--gray-silver: #C0C0C0;
--accent-main: #FF0000;
--accent-films: #FFD700;
--accent-media: #4A90E2;
--accent-x: #00FF00;
```

## 🔄 Infinite Loop Integration

When working with the design generator:

1. **Generate Variants**
   ```bash
   npm run design:generate -- --brand="films" --style="cinematic"
   ```

2. **Test Variants**
   - Always test on mobile
   - Check video loading performance
   - Verify animations are smooth

3. **Provide Feedback**
   ```bash
   npm run design:feedback -- --variant-id="abc123"
   ```

## 📁 File Organization

```
src/
├── components/
│   ├── [ComponentName]/
│   │   ├── index.tsx
│   │   ├── [ComponentName].tsx
│   │   ├── [ComponentName].module.css
│   │   └── [ComponentName].test.tsx
├── styles/
│   ├── globals.css         # Global styles and CSS variables
│   ├── cinema.css          # Cinematic utilities
│   └── typography.css      # Font definitions
├── lib/
│   ├── cloudflare/         # Video hosting utilities
│   ├── animations/         # Shared animation configs
│   └── seo/               # SEO utilities
```

## 🚀 Performance Checklist

Before committing code, ensure:
- [ ] Images use Next.js Image component
- [ ] Videos implement lazy loading
- [ ] Animations use `will-change` sparingly
- [ ] Bundle size impact is minimal
- [ ] Lighthouse score remains 95+

## 🐛 Common Issues & Solutions

### Issue: Video not loading
```tsx
// Always check:
1. Video ID is correct
2. Cloudflare Stream is configured
3. Lazy loading threshold is appropriate
4. Network throttling in DevTools
```

### Issue: Animation janky
```tsx
// Solutions:
1. Use transform instead of position
2. Add will-change: transform (remove after)
3. Use GPU-accelerated properties
4. Reduce animation complexity on mobile
```

### Issue: SEO not working
```tsx
// Checklist:
1. Proper meta tags in Head
2. Structured data for videos
3. Sitemap includes all pages
4. Local business schema
```

## 📝 Git Commit Messages

Follow this format:
```
type(scope): description

- feat(video): add 4k video player component
- fix(animation): resolve fade transition on mobile
- style(theme): update cinematic color palette
- perf(images): implement lazy loading for gallery
- docs(readme): update setup instructions
```

## 🔍 Testing Requirements

### Unit Tests
```tsx
// Test cinematic features
describe('CinematicPlayer', () => {
  it('should maintain 21:9 aspect ratio', () => {
    // Test implementation
  });
  
  it('should lazy load when in viewport', () => {
    // Test implementation
  });
});
```

### E2E Tests
```tsx
// Critical user journeys
- Homepage load and video playback
- Navigation between brands
- Contact form submission
- Mobile responsive behavior
```

## 🎯 SEO Implementation

### Always include:
```tsx
// In page components
<Head>
  <title>DVSN Films - Cinematic Wedding Videography Toronto</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="..." />
  
  {/* Local SEO */}
  <script type="application/ld+json">
    {JSON.stringify(localBusinessSchema)}
  </script>
</Head>
```

## 💡 Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev:films        # Start films brand only

# Design System
npm run design:generate  # Generate new variant
npm run design:preview   # Preview all variants

# Testing
npm run test            # Unit tests
npm run test:e2e        # E2E tests
npm run lighthouse      # Performance audit

# Building
npm run build           # Production build
npm run analyze         # Bundle analysis
```

## 🚨 Important Reminders

1. **Never commit**:
   - API keys or secrets
   - Large video files
   - Generated design variants (they're gitignored)

2. **Always test**:
   - Mobile responsiveness
   - Video loading on slow connections
   - Cross-browser compatibility
   - Accessibility standards

3. **Performance first**:
   - Check bundle size impact
   - Optimize images/videos
   - Use code splitting
   - Implement lazy loading

## 🤝 Collaboration Notes

When working with the human developer:
- Ask for clarification on design decisions
- Suggest performance optimizations
- Point out accessibility issues
- Recommend SEO improvements
- Share relevant code examples

Remember: The goal is a cinematic experience that loads fast, ranks well, and converts visitors into clients.

---

*Keep this document updated as the project evolves. The cinematic vision should guide every decision.*