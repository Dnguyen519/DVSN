'use client'

import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black-pure flex items-center justify-center"
    >
      <div className="relative">
        {/* Main loading text */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="font-heading text-6xl md:text-8xl text-gray-silver uppercase"
        >
          DVSN
        </motion.h1>
        
        {/* Loading bar */}
        <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gray-dark overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="h-full w-full bg-accent-main"
            style={{
              boxShadow: '0 0 20px var(--accent-main)',
            }}
          />
        </div>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-12 left-0 right-0 text-center font-accent text-sm tracking-widest text-gray-medium uppercase"
        >
          Loading Cinematic Experience
        </motion.p>
      </div>
    </motion.div>
  )
}