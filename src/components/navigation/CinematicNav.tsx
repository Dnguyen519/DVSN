'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { href: '/', label: 'DVSN', accent: 'accent-main' },
  { href: '/films', label: 'Films', accent: 'accent-films' },
  { href: '/media', label: 'Media', accent: 'accent-media' },
  { href: '/x', label: 'X', accent: 'accent-x' },
]

export function CinematicNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'py-4 bg-black-pure/95 backdrop-blur-md' 
            : 'py-8 bg-gradient-to-b from-black-pure/90 to-transparent'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group">
              <h1 className="font-heading text-3xl tracking-wider text-white-pure">
                DVSN
              </h1>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-main transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href))
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'relative font-heading text-lg tracking-widest uppercase transition-all duration-300',
                      isActive 
                        ? 'text-white-pure' 
                        : 'text-gray-silver hover:text-white-pure'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={clsx(
                          'absolute -bottom-2 left-0 right-0 h-0.5',
                          `bg-${item.accent}`
                        )}
                        style={{
                          backgroundColor: `var(--${item.accent})`,
                          boxShadow: `0 0 10px var(--${item.accent})`
                        }}
                      />
                    )}
                  </Link>
                )
              })}
              
              {/* Contact Button */}
              <Link
                href="/contact"
                className="ml-8 px-6 py-2 border border-gray-silver text-gray-silver font-heading tracking-widest uppercase transition-all duration-300 hover:bg-accent-main hover:border-accent-main hover:text-white-pure hover:shadow-glow-red"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-6 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={clsx(
                'absolute left-0 w-full h-0.5 bg-white-pure transition-all duration-300',
                isMenuOpen ? 'top-3 rotate-45' : 'top-0'
              )} />
              <span className={clsx(
                'absolute left-0 top-3 w-full h-0.5 bg-white-pure transition-all duration-300',
                isMenuOpen && 'opacity-0'
              )} />
              <span className={clsx(
                'absolute left-0 w-full h-0.5 bg-white-pure transition-all duration-300',
                isMenuOpen ? 'top-3 -rotate-45' : 'top-6'
              )} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black-pure/95 backdrop-blur-md md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-black-elevated p-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname.startsWith(item.href))
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        'font-heading text-2xl tracking-widest uppercase transition-colors duration-300',
                        isActive 
                          ? 'text-white-pure' 
                          : 'text-gray-silver hover:text-white-pure'
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-8 inline-block px-6 py-3 border border-gray-silver text-gray-silver font-heading tracking-widest uppercase transition-all duration-300 hover:bg-accent-main hover:border-accent-main hover:text-white-pure"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}