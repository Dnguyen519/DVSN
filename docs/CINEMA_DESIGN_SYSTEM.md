# Cinema Design System - DVSN Dark Theme Specifications

## 🎬 Design Philosophy

Our design system is inspired by the cinematic experience - from the darkness of a movie theater to the dramatic lighting of film noir. Every element should feel like it belongs on the silver screen.

## 🎨 Color Palette

### Primary Colors

```scss
// Blacks - The Foundation
$black-pure: #000000;      // Pure black - main backgrounds
$black-soft: #0A0A0A;      // Soft black - section separators  
$black-elevated: #111111;  // Elevated surfaces
$black-carbon: #1A1A1A;    // Cards and containers

// Grays - The Supporting Cast
  $gray-dark: #2A2A2A;       // Borders and dividers
$gray-medium: #4A4A4A;     // Disabled states
$gray-light: #6A6A6A;      // Subtle text
$gray-silver: #C0C0C0;     // Body text
$gray-platinum: #E0E0E0;   // Headlines

// Whites - The Highlights  
$white-pure: #FFFFFF;      // Pure white - high emphasis
$white-soft: #FAFAFA;      // Soft white - less harsh
```

### Brand Accent Colors

```scss
// Brand-Specific Accents
$accent-main: #FF0000;     // DVSN - Director's red
$accent-films: #FFD700;    // Films - Golden hour
$accent-media: #4A90E2;    // Media - Trust blue
$accent-x: #00FF00;        // X - Matrix green

// Utility Colors
$error: #DC2626;           // Error states
$success: #10B981;         // Success states
$warning: #F59E0B;         // Warning states
```

### Film Effects

```scss
// Overlays and Effects
$film-grain: rgba(255, 255, 255, 0.03);
$vignette-start: rgba(0, 0, 0, 0);
$vignette-end: rgba(0, 0, 0, 0.3);
$lens-flare: rgba(255, 255, 255, 0.1);
```

## 🔤 Typography System

### Font Families

```css
/* Headings - Cinematic Impact */
--font-heading: 'Bebas Neue', 'Oswald', 'Impact', sans-serif;

/* Body - Clean Reading */
--font-body: 'Inter', 'Helvetica Neue', -apple-system, sans-serif;

/* Accent - Movie Credits */
--font-accent: 'Courier Prime', 'Courier New', monospace;

/* Display - Dramatic Titles */
--font-display: 'Playfair Display', 'Georgia', serif;
```

### Type Scale

```scss
// Display Sizes - Movie Poster Style
$display-2xl: clamp(4rem, 10vw, 8rem);      // 64-128px
$display-xl: clamp(3rem, 8vw, 6rem);        // 48-96px
$display-lg: clamp(2.5rem, 6vw, 4rem);      // 40-64px

// Heading Sizes
$heading-1: clamp(2rem, 4vw, 3rem);         // 32-48px
$heading-2: clamp(1.75rem, 3vw, 2.5rem);    // 28-40px
$heading-3: clamp(1.5rem, 2.5vw, 2rem);     // 24-32px
$heading-4: clamp(1.25rem, 2vw, 1.5rem);    // 20-24px

// Body Sizes
$body-lg: 1.125rem;                          // 18px
$body-base: 1rem;                            // 16px
$body-sm: 0.875rem;                          // 14px
$body-xs: 0.75rem;                           // 12px

// Letter Spacing - Cinematic Feel
$tracking-tightest: -0.05em;
$tracking-tight: -0.025em;
$tracking-normal: 0;
$tracking-wide: 0.025em;
$tracking-wider: 0.05em;
$tracking-widest: 0.1em;  // For credit sequences
```

## 📐 Layout System

### Aspect Ratios

```scss
// Cinematic Aspect Ratios
$ratio-cinema: 2.35 / 1;      // Anamorphic widescreen
$ratio-standard: 16 / 9;       // Standard widescreen
$ratio-classic: 4 / 3;         // Classic film
$ratio-square: 1 / 1;          // Social media
$ratio-portrait: 9 / 16;       // Mobile video
```

### Spacing Scale

```scss
// Based on 8px grid system
$space-0: 0;
$space-1: 0.25rem;   // 4px
$space-2: 0.5rem;    // 8px
$space-3: 0.75rem;   // 12px
$space-4: 1rem;      // 16px
$space-6: 1.5rem;    // 24px
$space-8: 2rem;      // 32px
$space-10: 2.5rem;   // 40px
$space-12: 3rem;     // 48px
$space-16: 4rem;     // 64px
$space-20: 5rem;     // 80px
$space-24: 6rem;     // 96px
$space-32: 8rem;     // 128px
```

### Container Widths

```scss
$container-sm: 640px;   // Narrow content
$container-md: 768px;   // Medium content
$container-lg: 1024px;  // Standard content
$container-xl: 1280px;  // Wide content
$container-2xl: 1536px; // Full width
$container-3xl: 1920px; // Cinema width
```

## 🎞 Animation System

### Timing Functions

```scss
// Cinematic Easings
$ease-fade: cubic-bezier(0.4, 0, 0.2, 1);      // Smooth fade
$ease-dramatic: cubic-bezier(0.68, -0.55, 0.265, 1.55); // Overshoot
$ease-cut: cubic-bezier(0.4, 0, 1, 1);          // Quick cut
$ease-slow: cubic-bezier(0, 0, 0.2, 1);         // Slow reveal
```

### Duration Scale

```scss
$duration-instant: 0ms;
$duration-fast: 150ms;      // Quick cuts
$duration-normal: 300ms;    // Standard transitions
$duration-slow: 500ms;      // Dramatic reveals
$duration-slower: 1000ms;   // Epic moments
$duration-cinematic: 2000ms; // Opening sequences
```

### Keyframe Animations

```css
/* Fade to Black */
@keyframes fadeToBlack {
  0% { opacity: 1; }
  100% { opacity: 0; background-color: #000; }
}

/* Film Roll */
@keyframes filmRoll {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

/* Lens Flare */
@keyframes lensFlare {
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(1); }
}

/* Title Reveal */
@keyframes titleReveal {
  0% { 
    opacity: 0; 
    transform: translateY(20px);
    letter-spacing: 0.2em;
  }
  100% { 
    opacity: 1; 
    transform: translateY(0);
    letter-spacing: 0.1em;
  }
}
```

## 🎥 Component Patterns

### Hero Sections

```scss
.hero-cinematic {
  aspect-ratio: $ratio-cinema;
  position: relative;
  overflow: hidden;
  
  &::before {
    // Vignette effect
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      $vignette-start 0%,
      $vignette-end 100%
    );
    pointer-events: none;
  }
  
  &::after {
    // Film grain
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/assets/film-grain.png');
    opacity: 0.03;
    animation: grain 8s steps(10) infinite;
    pointer-events: none;
  }
}
```

### Video Players

```scss
.video-player {
  position: relative;
  background: $black-pure;
  
  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $space-4;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    transform: translateY(100%);
    transition: transform $duration-normal $ease-fade;
  }
  
  &:hover .controls {
    transform: translateY(0);
  }
}
```

### Navigation

```scss
.nav-cinematic {
  position: fixed;
  top: 0;
  width: 100%;
  padding: $space-6 $space-8;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(10px);
  z-index: 100;
  
  .nav-item {
    position: relative;
    color: $gray-silver;
    text-transform: uppercase;
    letter-spacing: $tracking-widest;
    transition: all $duration-normal $ease-fade;
    
    &:hover {
      color: $white-pure;
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    
    &.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: $accent-main;
      box-shadow: 0 0 10px $accent-main;
    }
  }
}
```

## 🎨 Visual Effects

### Film Grain Overlay

```css
.film-grain {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.03) 4px
      );
    pointer-events: none;
  }
}
```

### Letterbox Bars

```scss
.letterbox {
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 10%;
    background: $black-pure;
    z-index: 10;
  }
  
  &::before { top: 0; }
  &::after { bottom: 0; }
}
```

### Spotlight Effect

```scss
.spotlight {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity $duration-slow $ease-fade;
  }
  
  &:hover::before {
    opacity: 1;
  }
}
```

## 📱 Responsive Behavior

### Breakpoints

```scss
$breakpoint-sm: 640px;   // Mobile landscape
$breakpoint-md: 768px;   // Tablet portrait
$breakpoint-lg: 1024px;  // Tablet landscape
$breakpoint-xl: 1280px;  // Desktop
$breakpoint-2xl: 1536px; // Large desktop
$breakpoint-3xl: 1920px; // Cinema display
```

### Mobile Adaptations

```scss
@media (max-width: $breakpoint-md) {
  // Adjust cinematic ratios for mobile
  .hero-cinematic {
    aspect-ratio: $ratio-standard;
  }
  
  // Simplify effects for performance
  .film-grain::after {
    display: none;
  }
  
  // Increase touch targets
  .nav-item {
    padding: $space-4;
    min-height: 44px;
  }
}
```

## 🔧 Utility Classes

### Text Effects

```css
.text-glow {
  text-shadow: 0 0 20px currentColor;
}

.text-tracking-credits {
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.text-fade-up {
  animation: fadeUp 1s $ease-fade backwards;
}
```

### Visual Effects

```css
.blur-backdrop {
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.5);
}

.noise-texture {
  background-image: url('data:image/svg+xml;base64,...');
  background-size: 200px 200px;
}

.vignette {
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
}
```

## 🎯 Implementation Guidelines

1. **Performance First**: Effects should enhance, not hinder
2. **Subtlety**: Film effects should be felt, not seen
3. **Consistency**: Maintain the cinematic feel throughout
4. **Accessibility**: Ensure contrast ratios meet WCAG standards
5. **Progressive Enhancement**: Core experience works without effects

---

*This design system creates a cohesive cinematic experience that sets DVSN apart in the digital landscape while maintaining usability and performance.*