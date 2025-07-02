'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black-soft overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/50 to-black-pure" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/contact-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-accent text-sm tracking-[0.3em] text-accent-main uppercase mb-4">
              Let's Create
            </p>
            <h2 className="font-heading text-5xl md:text-7xl text-white-pure uppercase mb-6">
              Start Your
            </h2>
            <p className="font-display text-4xl md:text-5xl text-gray-platinum mb-8">
              Cinematic Journey
            </p>
            <p className="text-lg text-gray-silver mb-12 max-w-xl">
              Ready to bring your vision to life? Whether it's capturing your wedding day, 
              showcasing your property, or elevating your brand, we're here to create 
              something extraordinary together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a 
                href="mailto:hello@dvsn.studio"
                className="flex items-center gap-4 text-gray-silver hover:text-white-pure transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-dark group-hover:bg-accent-main flex items-center justify-center transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-medium uppercase tracking-wider">Email</p>
                  <p className="font-heading text-lg">hello@dvsn.studio</p>
                </div>
              </a>

              <a 
                href="tel:+14165551234"
                className="flex items-center gap-4 text-gray-silver hover:text-white-pure transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-dark group-hover:bg-accent-main flex items-center justify-center transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-medium uppercase tracking-wider">Phone</p>
                  <p className="font-heading text-lg">(416) 555-1234</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-silver">
                <div className="w-12 h-12 rounded-full bg-gray-dark flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-medium uppercase tracking-wider">Service Area</p>
                  <p className="font-heading text-lg">Greater Toronto Area</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black-carbon border border-gray-dark p-8 lg:p-12">
              <h3 className="font-heading text-3xl text-white-pure uppercase mb-8">
                Quick Inquiry
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-black-pure border border-gray-dark text-white-pure placeholder:text-gray-medium focus:border-accent-main focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-black-pure border border-gray-dark text-white-pure placeholder:text-gray-medium focus:border-accent-main focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-black-pure border border-gray-dark text-white-pure placeholder:text-gray-medium focus:border-accent-main focus:outline-none transition-colors"
                />

                <select className="w-full px-4 py-3 bg-black-pure border border-gray-dark text-white-pure focus:border-accent-main focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="">Service Interested In</option>
                  <option value="wedding">Wedding Videography</option>
                  <option value="realestate">Real Estate Video</option>
                  <option value="corporate">Corporate Production</option>
                  <option value="ai">AI Integration</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-black-pure border border-gray-dark text-white-pure placeholder:text-gray-medium focus:border-accent-main focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent-main text-white-pure font-heading tracking-widest uppercase transition-all duration-300 hover:bg-accent-main/80 hover:shadow-glow-red group flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </form>

              {/* Form decoration */}
              <div className="absolute -top-px -left-px w-20 h-20 border-t border-l border-accent-main" />
              <div className="absolute -bottom-px -right-px w-20 h-20 border-b border-r border-accent-main" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 pt-16 border-t border-gray-dark"
        >
          <p className="font-accent text-sm tracking-[0.2em] text-gray-medium uppercase">
            Serving Toronto • Mississauga • Oakville • Burlington • Hamilton • Niagara
          </p>
        </motion.div>
      </div>
    </section>
  )
}