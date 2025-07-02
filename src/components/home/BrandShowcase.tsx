'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Film, Building2, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const brands = [
  {
    id: 'films',
    name: 'DVSN.Films',
    tagline: 'Cinematic Wedding Stories',
    description: 'Timeless wedding films that capture every emotion, crafted with cinematic excellence.',
    href: '/films',
    icon: Film,
    accentColor: 'accent-films',
    bgImage: '/images/films-bg.jpg',
    services: ['Wedding Films', 'Engagement Videos', 'Love Stories']
  },
  {
    id: 'media',
    name: 'DVSN.Media',
    tagline: 'Business Through Motion',
    description: 'Professional video production for real estate, corporate, and digital marketing.',
    href: '/media',
    icon: Building2,
    accentColor: 'accent-media',
    bgImage: '/images/media-bg.jpg',
    services: ['Real Estate Video', 'Corporate Films', '3D Virtual Tours']
  },
  {
    id: 'x',
    name: 'X.DVSN',
    tagline: 'Experimental Vision',
    description: 'Pushing boundaries in visual storytelling through artistic and experimental films.',
    href: '/x',
    icon: Sparkles,
    accentColor: 'accent-x',
    bgImage: '/images/x-bg.jpg',
    services: ['Art Films', 'Music Videos', 'Creative Direction']
  }
]

export function BrandShowcase() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-black-pure overflow-hidden">
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
            Our Divisions
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white-pure uppercase mb-6">
            Three Brands
          </h2>
          <p className="font-display text-3xl md:text-4xl text-gray-platinum">
            One Vision
          </p>
        </motion.div>
      </div>

      {/* Brand Cards */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {brands.map((brand, index) => {
            const Icon = brand.icon
            const isHovered = hoveredBrand === brand.id
            
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <Link href={brand.href}>
                  <div className={clsx(
                    'relative h-[500px] bg-black-carbon border border-gray-dark overflow-hidden group cursor-pointer transition-all duration-500',
                    isHovered && 'border-gray-medium'
                  )}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <div 
                        className={clsx(
                          'absolute inset-0 bg-cover bg-center transition-all duration-700',
                          isHovered ? 'scale-110 opacity-30' : 'scale-100 opacity-20'
                        )}
                        style={{ 
                          backgroundImage: `url(${brand.bgImage})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-black-pure/80 to-black-pure/40" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Icon */}
                      <div className={clsx(
                        'w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-all duration-500',
                        isHovered ? 'bg-current shadow-glow' : 'bg-gray-dark'
                      )}
                      style={{
                        backgroundColor: isHovered ? `var(--${brand.accentColor})` : undefined,
                        boxShadow: isHovered ? `0 0 30px var(--${brand.accentColor})` : undefined
                      }}>
                        <Icon className="w-8 h-8 text-white-pure" />
                      </div>

                      {/* Brand Name */}
                      <h3 className="font-heading text-3xl text-white-pure uppercase mb-2">
                        {brand.name}
                      </h3>

                      {/* Tagline */}
                      <p 
                        className="font-accent text-sm tracking-widest uppercase mb-6 transition-colors duration-500"
                        style={{
                          color: isHovered ? `var(--${brand.accentColor})` : 'var(--gray-silver)'
                        }}
                      >
                        {brand.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-gray-silver mb-8 flex-grow">
                        {brand.description}
                      </p>

                      {/* Services */}
                      <div className="mb-8">
                        {brand.services.map((service, i) => (
                          <p 
                            key={i}
                            className="text-sm text-gray-medium mb-1"
                          >
                            {service}
                          </p>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className={clsx(
                        'flex items-center gap-2 font-heading text-lg tracking-wider uppercase transition-all duration-500',
                        isHovered ? 'text-white-pure' : 'text-gray-silver'
                      )}>
                        <span>Explore</span>
                        <ArrowRight className={clsx(
                          'w-5 h-5 transition-transform duration-500',
                          isHovered && 'translate-x-2'
                        )} />
                      </div>

                      {/* Hover Border Effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          backgroundColor: `var(--${brand.accentColor})`,
                          transformOrigin: 'left'
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            var(--gray-dark) 2px,
            var(--gray-dark) 4px
          )`
        }} />
      </div>
    </section>
  )
}