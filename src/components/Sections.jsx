import React from 'react'
import { motion } from 'framer-motion'
import { Film, Clapperboard, Palette, Focus, MonitorSmartphone, Usb, SdCard, Lightbulb } from 'lucide-react'

const Section = ({ id, title, subtitle, children, icon: Icon }) => (
  <section id={id} className="relative py-20 bg-slate-950 text-white">
    <div className="absolute inset-0 pointer-events-none [background:radial-gradient(800px_300px_at_80%_20%,rgba(99,102,241,0.12),transparent_60%)]" />
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10 flex items-center gap-4">
        <div className="relative">
          <span aria-hidden className="absolute -inset-2 rounded-full bg-indigo-500/30 blur" />
          <Icon className="relative h-8 w-8 text-indigo-300" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-slate-300/80">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  </section>
)

export const About = () => (
  <Section id="about" title="About the Club" subtitle="Where projection meets design" icon={Film}>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/60 to-purple-600/40 mix-blend-overlay" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_20%_20%,black,transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <p className="text-white/90 text-lg">A vintage projector casts our story across the room—frames of collaboration, innovation, and craft.</p>
        </div>
      </div>
      <div className="space-y-4 text-slate-300">
        <p>We are a collective of engineers, artists, and storytellers exploring the intersection of light and pixel. From lens to screen, we turn ideas into immersive experiences.</p>
        <p>Our workshops cover cinematography, projection mapping, real-time graphics, and post-production pipelines.</p>
        <ul className="grid grid-cols-2 gap-3 text-sm">
          <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Projection mapping</li>
          <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Live visuals</li>
          <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Editing & color</li>
          <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Optics & lighting</li>
        </ul>
      </div>
    </div>
  </Section>
)

export const Team = () => (
  <Section id="team" title="Team" subtitle="Profiles in a viewfinder" icon={Focus}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <div className="aspect-[4/3] bg-slate-900 flex items-center justify-center text-slate-400">Portrait {i}</div>
          <div className="absolute inset-0 pointer-events-none group-hover:[box-shadow:inset_0_0_0_2px_rgba(99,102,241,0.7)] transition-all" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
            <p className="font-semibold">Member {i}</p>
            <p className="text-sm text-slate-300/80">Cinematography • Projection</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export const Projects = () => (
  <Section id="projects" title="Projects" subtitle="A wall of glowing screens" icon={MonitorSmartphone}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-slate-900">
          <div className="aspect-video bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(99,102,241,0.35),transparent_60%)]" />
          </div>
          <div className="absolute inset-0 pointer-events-none group-hover:backdrop-brightness-125 transition" />
          <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="font-semibold">Project {i}</p>
            <p className="text-sm text-slate-300/80">Hover to see the beam light up details</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export const Events = () => (
  <Section id="events" title="Events" subtitle="A moving film strip" icon={Clapperboard}>
    <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
      <div className="flex gap-6 animate-[scroll_20s_linear_infinite] p-6 bg-slate-900">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="min-w-[240px] rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
            <p className="text-sm font-semibold">Event {i}</p>
            <p className="text-xs text-slate-300/80">Workshop • Screening • Showcase</p>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  </Section>
)

export const Dashboard = () => (
  <Section id="dashboard" title="Member Dashboard" subtitle="Creative workspace" icon={Palette}>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <p className="font-semibold mb-3">Drop media</p>
        <div className="h-36 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center text-slate-300">Drag & drop files</div>
        <div className="mt-3 flex items-center gap-2 text-slate-300/80 text-sm">
          <SdCard className="h-4 w-4" /> SD • <Usb className="h-4 w-4" /> USB
        </div>
      </div>
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <p className="font-semibold mb-3">Live activity</p>
        <ul className="space-y-2 text-sm text-slate-300/90">
          <li>• Maya uploaded <em>lens_test.mov</em></li>
          <li>• Leo adjusted color wheels for <em>Festival Cut</em></li>
          <li>• Aria synced audio for <em>Room Tone</em></li>
        </ul>
      </div>
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <p className="font-semibold mb-3">Tools</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <button className="rounded-lg bg-indigo-600/80 px-3 py-2 ring-1 ring-indigo-300/30">New Project</button>
          <button className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">Color Wheels</button>
          <button className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">Timeline</button>
          <button className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">Scope</button>
        </div>
      </div>
    </div>
  </Section>
)

export const Contact = () => (
  <Section id="contact" title="Contact" subtitle="Pull up the director's chair" icon={Lightbulb}>
    <form onSubmit={(e)=>{e.preventDefault(); const flash=document.getElementById('flash'); if(flash){flash.classList.remove('opacity-0'); setTimeout(()=>flash.classList.add('opacity-0'),300)}}} className="max-w-2xl">
      <div id="flash" aria-hidden className="pointer-events-none opacity-0 transition-opacity absolute -top-10 right-10 h-10 w-10 rounded-full bg-white/80 blur-lg" />
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-slate-300">Name</span>
          <input required className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </label>
        <label className="block">
          <span className="text-sm text-slate-300">Email</span>
          <input type="email" required className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm text-slate-300">Message</span>
        <textarea rows="4" required className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </label>
      <button className="mt-4 rounded-xl bg-indigo-600/90 px-5 py-3 font-semibold text-white ring-1 ring-indigo-400/30">Send</button>
    </form>
  </Section>
)

export default function Sections() {
  return null
}
