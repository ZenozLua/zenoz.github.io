import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60"><span className="accent-dot h-2 w-2 rounded-full" /> LJ Development · Roblox creator</p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl xl:text-[100px]">Big ideas.<br />Built in <span className="accent-text font-serif italic">pixels.</span></h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/55 md:text-lg">From the first block to the final interaction. Modeling, scripting, animation, and UI that bring your Roblox world to life.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/portfolio" className="primary-action">Tap to view my portfolio <ArrowUpRight size={18} /></a>
            <a href="#pricing" className="primary-action group">Let’s build something <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <a href="#playground" className="secondary-action">Explore the playground <ArrowDown size={16} /></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.17em] text-white/35"><span>Roblox Studio</span><span>Blender</span><span>Luau</span></div>
        </div>
        <a href="#playground" className="world-card group relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-white/10" aria-label="Explore the interactive beacon playground">
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50"><span className="accent-dot h-1.5 w-1.5 rounded-full" /> A world of possibilities</div>
          <Image src="/portfolio/lj-development-logo.png" alt="LJ Development logo artwork" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" aria-hidden="true" />
          <span className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/40">IDEA → EXPERIENCE</span>
          <span className="absolute bottom-5 right-5 z-10 rounded-full border border-white/20 p-3 transition-colors group-hover:bg-white/10"><ArrowUpRight size={18} /></span>
        </a>
      </div>
    </section>
  )
}
