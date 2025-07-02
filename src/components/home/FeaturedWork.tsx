'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CloudflareVideoPlayer } from '@/components/video/CloudflareVideoPlayer'
import { Play, Info } from 'lucide-react'
import clsx from 'clsx'

const featuredProjects = [
  {
    id: '1',
    title: 'Sarah & Michael',
    category: 'Wedding Film',
    brand: 'films',
    videoId: 'demo-wedding-1',
    thumbnail: '/images/wedding-thumb-1.jpg',
    duration: '4:32',
    description: 'A romantic celebration at Casa Loma',
  },
  {
    id: '2',
    title: 'Luxury Penthouse',
    category: 'Real Estate',
    brand: 'media',
    videoId: 'demo-realestate-1',
    thumbnail: '/images/realestate-thumb-1.jpg',
    duration: '2:15',
    description: 'Downtown Toronto skyline views',
  },
  {
    id: '3',
    title: 'Abstract Motion',
    category: 'Experimental',
    brand: 'x',
    videoId: 'demo-experimental-1',
    thumbnail: '/images/experimental-thumb-1.jpg',
    duration: '3:48',
    description: 'Visual exploration of movement',
  },
  {
    id: '4',
    title: 'Emily & James',
    category: 'Wedding Film',
    brand: 'films',
    videoId: 'demo-wedding-2',
    thumbnail: '/images/wedding-thumb-2.jpg',
    duration: '5:21',
    description: 'Intimate vineyard ceremony',
  },
  {
    id: '5',
    title: 'Tech Startup Office',
    category: 'Corporate',
    brand: 'media',
    videoId: 'demo-corporate-1',
    thumbnail: '/images/corporate-thumb-1.jpg',
    duration: '1:45',
    description: 'Modern workspace showcase',
  },
  {
    id: '6',
    title: 'Neon Dreams',
    category: 'Music Video',
    brand: 'x',
    videoId: 'demo-music-1',
    thumbnail: '/images/music-thumb-1.jpg',
    duration: '3:12',
    description: 'Cyberpunk aesthetic exploration',
  },
]

export function FeaturedWork() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'films' | 'media' | 'x'>('all')

  const filteredProjects = featuredProjects.filter(
    project => filter === 'all' || project.brand === filter
  )

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case 'films': return 'accent-films'
      case 'media': return 'accent-media'
      case 'x': return 'accent-x'
      default: return 'accent-main'
    }
  }

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-black-soft">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-accent text-sm tracking-[0.3em] text-gray-silver uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white-pure uppercase mb-12">
            Featured Work
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'films', 'media', 'x'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption as any)}
                className={clsx(
                  'px-6 py-2 font-heading tracking-widest uppercase transition-all duration-300',
                  filter === filterOption
                    ? 'bg-accent-main text-white-pure'
                    : 'bg-transparent border border-gray-dark text-gray-silver hover:border-gray-medium hover:text-white-pure'
                )}
              >
                {filterOption === 'all' ? 'All Work' : `DVSN.${filterOption}`}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video bg-black-carbon overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(project.id)}
              >
                {/* Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-black-pure/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                    animate={{ scale: 0.9, opacity: 1 }}
                    className="w-16 h-16 rounded-full border-2 border-white-pure bg-black-pure/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent-main group-hover:border-accent-main transition-all duration-300"
                  >
                    <Play className="w-6 h-6 text-white-pure ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p 
                    className={clsx(
                      'text-xs font-accent tracking-widest uppercase mb-2',
                      getBrandColor(project.brand)
                    )}
                    style={{ color: `var(--${getBrandColor(project.brand)})` }}
                  >
                    {project.category}
                  </p>
                  <h3 className="font-heading text-2xl text-white-pure mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-silver">
                    {project.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black-pure/70 backdrop-blur-sm rounded-full">
                  <span className="text-xs text-white-pure">{project.duration}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black-pure/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CloudflareVideoPlayer
                videoId={featuredProjects.find(p => p.id === selectedVideo)?.videoId || ''}
                aspectRatio="16:9"
                autoPlay
                controls
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white-pure hover:text-accent-main transition-colors"
              >
                <span className="font-heading text-lg tracking-widest uppercase">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}