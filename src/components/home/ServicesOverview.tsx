'use client'

import { motion } from 'framer-motion'
import { 
  Camera, 
  Video, 
  Home, 
  Building, 
  Users, 
  Sparkles,
  Monitor,
  Cpu,
  Globe
} from 'lucide-react'

const services = [
  {
    category: 'Wedding Films',
    icon: Camera,
    services: [
      { name: 'Full Day Coverage', price: 'From $3,500' },
      { name: 'Highlight Films', price: 'From $2,000' },
      { name: 'Same-Day Edits', price: 'From $4,500' },
      { name: 'Engagement Videos', price: 'From $800' },
    ]
  },
  {
    category: 'Real Estate',
    icon: Home,
    services: [
      { name: 'Property Showcase', price: 'From $800' },
      { name: '3D Virtual Tours', price: 'From $400' },
      { name: 'Twilight Photography', price: 'From $500' },
      { name: 'Aerial Drone Footage', price: 'From $600' },
    ]
  },
  {
    category: 'Corporate',
    icon: Building,
    services: [
      { name: 'Brand Story Videos', price: 'From $2,500' },
      { name: 'Product Demonstrations', price: 'From $1,500' },
      { name: 'Training Content', price: 'From $2,000' },
      { name: 'Event Coverage', price: 'From $1,800' },
    ]
  },
  {
    category: 'AI Integration',
    icon: Cpu,
    services: [
      { name: 'Workflow Automation', price: 'From $150/hr' },
      { name: 'Content Repurposing', price: 'From $200/hr' },
      { name: 'Analytics Dashboard', price: 'From $3,000' },
      { name: 'AI Video Editing', price: 'From $100/hr' },
    ]
  },
]

export function ServicesOverview() {
  return (
    <section className="relative py-24 lg:py-32 bg-black-pure">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, var(--gray-dark) 49%, var(--gray-dark) 51%, transparent 51%)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-accent text-sm tracking-[0.3em] text-gray-silver uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white-pure uppercase mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-silver">
            From intimate weddings to corporate campaigns, we bring cinematic excellence to every frame
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((category, index) => {
            const Icon = category.icon
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full p-8 bg-black-carbon border border-gray-dark hover:border-gray-medium transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 text-gray-silver group-hover:text-accent-main transition-colors duration-500">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Category */}
                  <h3 className="font-heading text-2xl text-white-pure uppercase mb-6">
                    {category.category}
                  </h3>

                  {/* Service List */}
                  <div className="space-y-4">
                    {category.services.map((service, i) => (
                      <div 
                        key={i}
                        className="flex justify-between items-start border-b border-gray-dark pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-gray-silver">
                          {service.name}
                        </span>
                        <span className="text-sm text-gray-medium font-accent">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-main transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-main text-white-pure font-heading tracking-widest uppercase transition-all duration-300 hover:bg-accent-main/80 hover:shadow-glow-red"
          >
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}