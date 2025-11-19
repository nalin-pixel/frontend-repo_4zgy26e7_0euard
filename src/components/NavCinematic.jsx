import React from 'react'
import { motion } from 'framer-motion'
import { Menu, Camera, Film, LayoutDashboard, Calendar, Users, GalleryHorizontalEnd, Phone } from 'lucide-react'

const NavCinematic = () => {
  const linkClass = 'relative px-4 py-2 text-sm font-semibold text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-md'

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <span aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 blur-sm" />
              <Camera className="relative h-8 w-8 text-white" />
            </div>
            <span className="text-white font-bold tracking-wide">P&D Club</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a className={linkClass} href="#about">About</a>
            <a className={linkClass} href="#team">Team</a>
            <a className={linkClass} href="#projects">Projects</a>
            <a className={linkClass} href="#events">Events</a>
            <a className={linkClass} href="#dashboard">Dashboard</a>
            <a className={linkClass} href="#contact">Contact</a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10 text-white" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Cinematic wipe indicator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="origin-left h-[2px] w-full bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400"
      />
    </header>
  )
}

export default NavCinematic
