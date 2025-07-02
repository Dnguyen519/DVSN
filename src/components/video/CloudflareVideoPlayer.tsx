'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import clsx from 'clsx'

interface CloudflareVideoPlayerProps {
  videoId: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
  aspectRatio?: '21:9' | '16:9' | '4:3'
  quality?: '4k' | '1080p' | '720p' | 'auto'
  onLoadedData?: () => void
  onPlay?: () => void
  onPause?: () => void
}

export function CloudflareVideoPlayer({
  videoId,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  className,
  aspectRatio = '16:9',
  quality = 'auto',
  onLoadedData,
  onPlay,
  onPause,
}: CloudflareVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoading, setIsLoading] = useState(true)
  const [hasStarted, setHasStarted] = useState(autoPlay)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // For demo purposes, using a placeholder video URL
  // In production, this would be: `https://videodelivery.net/${videoId}/manifest/video.m3u8`
  const videoUrl = videoId === 'demo-hero-video' 
    ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    : `https://videodelivery.net/${videoId}/manifest/video.m3u8`

  useEffect(() => {
    if (!videoRef.current) return

    const video = videoRef.current

    const handleLoadedData = () => {
      setIsLoading(false)
      onLoadedData?.()
    }

    const handlePlay = () => {
      setIsPlaying(true)
      onPlay?.()
    }

    const handlePause = () => {
      setIsPlaying(false)
      onPause?.()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [onLoadedData, onPlay, onPause])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
      setHasStarted(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleMouseMove = () => {
    setShowControls(true)
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '21:9': return 'aspect-cinema'
      case '16:9': return 'aspect-video'
      case '4:3': return 'aspect-classic'
      default: return 'aspect-video'
    }
  }

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative overflow-hidden bg-black-pure group',
        getAspectRatioClass(),
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black-pure flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-gray-dark border-t-accent-main rounded-full animate-spin" />
              <p className="mt-4 font-accent text-sm text-gray-medium tracking-widest uppercase">
                Loading
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play Button Overlay (when video hasn't started) */}
      <AnimatePresence>
        {!hasStarted && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black-pure/50 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full border-2 border-white-pure bg-black-pure/70 backdrop-blur-sm flex items-center justify-center group hover:bg-accent-main hover:border-accent-main transition-all duration-300"
            >
              <Play className="w-8 h-8 text-white-pure ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      {controls && hasStarted && (
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black-pure/80 via-transparent to-black-pure/40"
            >
              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white-pure/10 backdrop-blur-sm flex items-center justify-center hover:bg-white-pure/20 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white-pure" fill="currentColor" />
                    ) : (
                      <Play className="w-5 h-5 text-white-pure ml-0.5" fill="currentColor" />
                    )}
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white-pure/10 backdrop-blur-sm flex items-center justify-center hover:bg-white-pure/20 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white-pure" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white-pure" />
                    )}
                  </button>

                  {/* Video Title (optional) */}
                  <div className="flex-1">
                    <p className="font-heading text-white-pure tracking-wider uppercase">
                      Cinematic Showreel
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}