# Image Organization Guide for DVSN Studios Website

This guide explains how to organize and provide images for automatic use across the website.

## Recommended Folder Structure

Create a folder structure like this in your project:

```
DVSN Studio Project/
├── images/
│   ├── hero/
│   │   ├── wedding-hero-01.jpg
│   │   ├── wedding-hero-02.jpg
│   │   ├── engagement-hero-01.jpg
│   │   ├── trailer-hero-01.jpg
│   │   └── real-estate-hero-01.jpg
│   ├── weddings/
│   │   ├── vlad-carmela/
│   │   │   ├── vlad-carmela-01.jpg
│   │   │   ├── vlad-carmela-02.jpg
│   │   │   └── vlad-carmela-thumb.jpg
│   │   ├── david-courtney/
│   │   │   ├── david-courtney-01.jpg
│   │   │   └── david-courtney-thumb.jpg
│   │   └── dan-marissa/
│   │       ├── dan-marissa-01.jpg
│   │       └── dan-marissa-thumb.jpg
│   ├── engagements/
│   │   ├── devin-yeelok/
│   │   │   ├── devin-yeelok-01.jpg
│   │   │   └── devin-yeelok-thumb.jpg
│   │   ├── carmela-vlad/
│   │   │   ├── carmela-vlad-01.jpg
│   │   │   └── carmela-vlad-thumb.jpg
│   │   └── mike-jess/
│   │       ├── mike-jess-01.jpg
│   │       └── mike-jess-thumb.jpg
│   ├── locations/
│   │   ├── toronto-islands.jpg
│   │   ├── distillery-district.jpg
│   │   ├── high-park.jpg
│   │   ├── casa-loma.jpg
│   │   ├── harbourfront.jpg
│   │   └── trinity-bellwoods.jpg
│   ├── team/
│   │   ├── davis-nguyen.jpg
│   │   └── team-photo.jpg
│   └── placeholders/
│       ├── video-placeholder.jpg
│       └── gallery-placeholder.jpg
```

## Image Naming Conventions

### 1. Hero Images
- Format: `[page-type]-hero-[number].jpg`
- Examples:
  - `wedding-hero-01.jpg`
  - `engagement-hero-01.jpg`
  - `real-estate-hero-01.jpg`

### 2. Project Images
- Format: `[couple-names]/[couple-names]-[number].jpg`
- Thumbnail: `[couple-names]-thumb.jpg`
- Examples:
  - `vlad-carmela/vlad-carmela-01.jpg`
  - `vlad-carmela/vlad-carmela-thumb.jpg`

### 3. Location Images
- Format: `[location-name].jpg`
- Use hyphens for spaces
- Examples:
  - `toronto-islands.jpg`
  - `distillery-district.jpg`

## Image Specifications

### Hero Images
- **Dimensions**: 2560 x 1440px (minimum)
- **Aspect Ratio**: 16:9
- **Format**: JPG (optimized for web)
- **Quality**: 80-85% compression
- **File Size**: Under 500KB

### Gallery Images
- **Dimensions**: 1920 x 1080px
- **Aspect Ratio**: 16:9 or 3:2
- **Format**: JPG
- **Quality**: 80% compression
- **File Size**: Under 300KB

### Thumbnail Images
- **Dimensions**: 640 x 360px
- **Aspect Ratio**: 16:9
- **Format**: JPG
- **Quality**: 75% compression
- **File Size**: Under 100KB

### Location Images
- **Dimensions**: 800 x 1000px
- **Aspect Ratio**: 4:5 (portrait)
- **Format**: JPG
- **Quality**: 80% compression
- **File Size**: Under 200KB

## How to Provide Images

### Option 1: Direct Upload
1. Create the folder structure on your computer
2. Name files according to conventions above
3. Compress images to web-ready sizes
4. Upload to the project directory

### Option 2: Cloud Storage Link
1. Organize images in Google Drive/Dropbox following the structure
2. Share the folder link
3. Include a `manifest.txt` file listing all images and their intended use

### Option 3: ZIP Archive
1. Create the folder structure
2. Compress into a ZIP file named `dvsn-images-[date].zip`
3. Include a README with image descriptions

## Image Manifest Example

Create an `images-manifest.json` file:

```json
{
  "hero": {
    "wedding": [
      {
        "filename": "wedding-hero-01.jpg",
        "description": "Vlad & Carmela first dance",
        "credit": "DVSN Studios",
        "primary": true
      }
    ],
    "engagement": [
      {
        "filename": "engagement-hero-01.jpg",
        "description": "Devin & Yeelok at High Park",
        "credit": "DVSN Studios",
        "primary": true
      }
    ]
  },
  "projects": {
    "vlad-carmela": {
      "date": "2025",
      "type": "wedding",
      "images": [
        {
          "filename": "vlad-carmela-01.jpg",
          "description": "Ceremony moment",
          "featured": true
        },
        {
          "filename": "vlad-carmela-02.jpg",
          "description": "Reception dancing"
        }
      ]
    }
  },
  "locations": [
    {
      "name": "Toronto Islands",
      "filename": "toronto-islands.jpg",
      "tags": ["beach", "skyline", "nature"]
    }
  ]
}
```

## Automatic Usage Guidelines

Once images are organized this way, they will be automatically used:

1. **Hero Images**: First image in each category becomes the hero
2. **Gallery Images**: All images in project folders appear in galleries
3. **Thumbnails**: Used for video previews and grid layouts
4. **Location Images**: Used in location showcase sections

## Image Optimization Tips

1. **Use online tools**:
   - TinyPNG.com for compression
   - Squoosh.app for advanced optimization
   - ImageOptim for batch processing

2. **Maintain quality**:
   - Start with high-resolution originals
   - Keep uncompressed backups
   - Test on retina displays

3. **Consider loading**:
   - Use lazy loading for galleries
   - Provide low-quality placeholders
   - Optimize for mobile first

## SEO Considerations

1. **Alt Text**: Will be auto-generated from filenames
2. **File Names**: Use descriptive names with keywords
3. **EXIF Data**: Preserve copyright information

## Questions?

When providing images, include:
- Total number of images
- Any specific placement requests
- Copyright/credit requirements
- Any images that should NOT be used publicly