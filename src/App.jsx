import React from 'react'
import Hero3D from './components/Hero3D'
import NavCinematic from './components/NavCinematic'
import { About, Team, Projects, Events, Dashboard, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <NavCinematic />
      <Hero3D />

      {/* Parallax divider */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_400px_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1000px_300px_at_90%_30%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="h-8" />
      </div>

      <About />
      <Team />
      <Projects />
      <Events />
      <Dashboard />
      <Contact />

      <footer className="relative mt-20 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
          © {new Date().getFullYear()} Projection & Design Club — crafted with light.
        </div>
      </footer>
    </div>
  )
}

export default App
