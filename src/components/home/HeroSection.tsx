'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CloudflareVideoPlayer } from '@/components/video/CloudflareVideoPlayer'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <CloudflareVideoPlayer
          videoId="demo-hero-video" // Replace with actual video ID
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/30 via-black-pure/50 to-black-pure/80" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-accent text-sm md:text-base tracking-[0.3em] text-gray-silver uppercase mb-6"
        >
          Cinematic Excellence
        </motion.p>

        {/* Main Title */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              delay: 0.7, 
              duration: 1, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-wider text-white-pure uppercase"
          >
            Where Vision
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 1, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white-pure"
          >
            Meets Craft
          </motion.h2>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#work"
            className="px-8 py-3 bg-accent-main text-white-pure font-heading tracking-widest uppercase transition-all duration-300 hover:bg-accent-main/80 hover:shadow-glow-red"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white-pure text-white-pure font-heading tracking-widest uppercase transition-all duration-300 hover:bg-white-pure hover:text-black-pure"
          >
            Start Your Project
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white-pure"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-accent text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Film grain effect is applied globally in layout */}
    </section>
  )
}