# Video Optimization Guide - 4K Hosting & Performance

## 🎥 Overview

This guide outlines the migration from Vimeo to a cost-effective, high-performance video hosting solution that maintains 4K quality while optimizing for web delivery.

## 💰 Cost Comparison

### Current Vimeo Costs
- Pro Plan: $20/month (limited bandwidth)
- Plus Plan: $12/month (very limited)
- Premium: $75/month (required for 4K analytics)

### Recommended Solution: Cloudflare Stream
- $5/month for 1000 minutes watched
- $1 per 1000 minutes stored
- No bandwidth limits
- Global CDN included

**Example Monthly Cost:**
- 50 videos × 3 minutes = 150 minutes stored = $0.15
- 1000 views × 3 minutes = 3000 minutes watched = $15
- **Total: ~$15.15/month** (vs $75 on Vimeo)

## 🚀 Implementation Strategy

### Phase 1: Cloudflare Stream Setup

```javascript
// lib/cloudflare-stream.js
const CLOUDFLARE_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CF_API_TOKEN;

export async function uploadVideo(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
      },
      body: formData
    }
  );
  
  return response.json();
}
```

### Phase 2: Video Component Architecture

```tsx
// components/video/CinematicPlayer.tsx
import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoId: string;
  poster?: string;
  aspectRatio?: '21:9' | '16:9' | '4:3';
  quality?: '4k' | '1080p' | '720p' | 'auto';
}

export function CinematicPlayer({ 
  videoId, 
  poster, 
  aspectRatio = '21:9',
  quality = 'auto' 
}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  
  return (
    <div className="video-container">
      {!hasStarted && poster && (
        <div className="video-poster">
          <img src={poster} alt="" />
          <button onClick={() => setHasStarted(true)}>
            <PlayIcon />
          </button>
        </div>
      )}
      
      {hasStarted && (
        <iframe
          src={`https://iframe.videodelivery.net/${videoId}?poster=${poster}`}
          loading="lazy"
          style={{ aspectRatio }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
```

## 📊 Performance Optimization Techniques

### 1. Lazy Loading with Intersection Observer

```javascript
// hooks/useVideoLazyLoad.js
export function useVideoLazyLoad(threshold = 0.5) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting];
}
```

### 2. Thumbnail Preview System

```javascript
// Generate thumbnails at multiple timestamps
export async function generateThumbnails(videoId) {
  const timestamps = [0, 25, 50, 75]; // Percentages
  
  return timestamps.map(time => ({
    time,
    url: `https://videodelivery.net/${videoId}/thumbnails/thumbnail.jpg?time=${time}%`
  }));
}
```

### 3. Adaptive Bitrate Configuration

```javascript
// config/video-quality.js
export const qualityProfiles = {
  '4k': {
    width: 3840,
    height: 2160,
    bitrate: '35000k',
    codec: 'h265'
  },
  '1080p': {
    width: 1920,
    height: 1080,
    bitrate: '8000k',
    codec: 'h264'
  },
  '720p': {
    width: 1280,
    height: 720,
    bitrate: '5000k',
    codec: 'h264'
  },
  'mobile': {
    width: 854,
    height: 480,
    bitrate: '2500k',
    codec: 'h264'
  }
};
```

## 🎬 Video Processing Pipeline

### Optimal Encoding Settings

```bash
# FFmpeg settings for web optimization
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -vf "scale=3840:2160:force_original_aspect_ratio=decrease,pad=3840:2160:(ow-iw)/2:(oh-ih)/2" \
  output_4k.mp4
```

### Pre-upload Optimization Checklist

1. **Resolution**: Maintain 4K (3840×2160) for hero videos
2. **Bitrate**: 35-45 Mbps for 4K, 8-12 Mbps for 1080p
3. **Codec**: H.265/HEVC for 4K, H.264 for broader compatibility
4. **Frame Rate**: 24fps for cinematic feel, 30fps for standard
5. **Color Space**: Rec. 709 for web delivery
6. **Audio**: AAC 256kbps stereo

## 🔧 Implementation Components

### 1. Video Gallery Component

```tsx
// components/video/VideoGallery.tsx
export function VideoGallery({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          priority={index < 2} // Load first 2 immediately
          preload={index < 4}  // Preload first 4
        />
      ))}
    </div>
  );
}
```

### 2. Progressive Loading Strategy

```javascript
// lib/video-loader.js
class VideoLoader {
  constructor() {
    this.queue = [];
    this.loading = false;
  }

  async loadVideo(videoId, priority = 0) {
    return new Promise((resolve, reject) => {
      this.queue.push({ videoId, priority, resolve, reject });
      this.queue.sort((a, b) => b.priority - a.priority);
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.loading || this.queue.length === 0) return;
    
    this.loading = true;
    const { videoId, resolve, reject } = this.queue.shift();
    
    try {
      const video = await this.fetchVideoData(videoId);
      resolve(video);
    } catch (error) {
      reject(error);
    } finally {
      this.loading = false;
      this.processQueue();
    }
  }
}
```

## 📱 Mobile Optimization

### Responsive Video Delivery

```javascript
// hooks/useDeviceVideo.js
export function useDeviceVideo(video4kId, video1080pId, videoMobileId) {
  const [videoId, setVideoId] = useState(video1080pId);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const connection = navigator.connection;
      
      if (width < 768 || connection?.saveData) {
        setVideoId(videoMobileId);
      } else if (width >= 1920 && connection?.effectiveType === '4g') {
        setVideoId(video4kId);
      } else {
        setVideoId(video1080pId);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [video4kId, video1080pId, videoMobileId]);

  return videoId;
}
```

## 🎯 Performance Metrics

### Target Metrics
- **Initial Load**: < 2 seconds for first frame
- **Buffer Time**: < 1 second for 4K content
- **Seek Time**: < 500ms
- **Mobile Data**: < 50MB for 3-minute video

### Monitoring Implementation

```javascript
// lib/video-analytics.js
export function trackVideoPerformance(videoId) {
  const metrics = {
    loadTime: 0,
    bufferEvents: 0,
    qualityChanges: 0,
    watchTime: 0
  };

  // Track initial load
  const startTime = performance.now();
  
  video.addEventListener('loadeddata', () => {
    metrics.loadTime = performance.now() - startTime;
    sendAnalytics('video_load', metrics);
  });

  // Track buffering
  video.addEventListener('waiting', () => {
    metrics.bufferEvents++;
  });

  return metrics;
}
```

## 🛠 Migration Checklist

### From Vimeo to Cloudflare Stream

1. **Export Videos from Vimeo**
   - Download original quality files
   - Export metadata (titles, descriptions)
   - Save thumbnail timestamps

2. **Prepare Videos**
   - Optimize encoding settings
   - Generate custom thumbnails
   - Create mobile versions

3. **Upload to Cloudflare**
   - Batch upload via API
   - Set up webhook for processing
   - Configure player settings

4. **Update Website**
   - Replace Vimeo embeds
   - Implement new player component
   - Add fallback for older browsers

5. **Testing**
   - Test on various devices
   - Check bandwidth usage
   - Verify analytics tracking

## 🚨 Backup Strategy

### Alternative Solutions

1. **Bunny.net Stream**
   - $0.005/GB streaming
   - Good alternative to Cloudflare
   - Similar API structure

2. **Self-hosted with CDN**
   - Backblaze B2 + Cloudflare CDN
   - Most control, lowest cost
   - Requires more setup

3. **YouTube (Unlisted)**
   - Free hosting
   - Less control over player
   - Good for backup/archive

## 📈 Cost Optimization Tips

1. **Implement View Limits**
   ```javascript
   // Only load video after user interaction
   const [allowLoad, setAllowLoad] = useState(false);
   ```

2. **Use Appropriate Quality**
   - Hero videos: 4K
   - Portfolio grid: 1080p
   - Mobile: 720p max

3. **Cache Aggressively**
   ```javascript
   // Service worker for video caching
   self.addEventListener('fetch', event => {
     if (event.request.url.includes('videodelivery.net')) {
       event.respondWith(
         caches.match(event.request).then(response => {
           return response || fetch(event.request);
         })
       );
     }
   });
   ```

---

*This optimization strategy will reduce your video hosting costs by 80% while improving performance and maintaining 4K quality for your cinematic portfolio.*