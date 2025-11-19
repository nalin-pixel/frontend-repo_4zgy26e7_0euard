import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero3D = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [10, -10])
  const rotateY = useTransform(x, [-200, 200], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic vignette and gradient beams */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/10 to-slate-950/60" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_400px_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(800px_300px_at_20%_20%,rgba(168,85,247,0.18),transparent_60%)]" />

      <motion.div 
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY }}
        className="relative z-10 h-full flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            style={{ textShadow: '0 10px 60px rgba(59,130,246,0.5)' }}
          >
            Projection & Design Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto"
          >
            Cameras. Projectors. Storytelling. We fuse art and engineering to craft immersive visual experiences.
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -2, boxShadow: '0 10px 40px rgba(99,102,241,0.55)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600/90 px-5 py-3 font-semibold text-white ring-1 ring-indigo-400/30 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="View Projects"
            >
              Explore Projects
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/10 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Learn About the Club"
            >
              Learn More
            </motion.a>
          </div>

          {/* Micro interaction hints */}
          <p className="mt-6 text-xs text-blue-200/70">Tip: move your cursor to tilt the scene • Press Tab/Enter to navigate</p>
        </div>
      </motion.div>

      {/* Accessibility: reduce motion respects */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [style*='transform'] { transform: none !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero3D
