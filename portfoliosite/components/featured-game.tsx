import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function FeaturedGame() {
  return (
    <article className="mt-8 grid overflow-hidden rounded-3xl border border-white/10 bg-[#111119] md:grid-cols-2">
      <div className="relative min-h-64">
        <Image src="/portfolio/modeling-1.png" alt="Warm lighting and furnished tables inside LJ’s Diner" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col items-start justify-center p-7 md:p-10">
        <p className="section-eyebrow">Featured Roblox game</p>
        <h3 className="mt-3 text-3xl font-medium">LJ’s Diner</h3>
        <p className="mt-4 text-base leading-relaxed text-white/55">Take a look inside my Roblox game. Explore the diner beyond the screenshots and see the experience for yourself.</p>
        <a href="https://www.roblox.com/games/118842136966414/LJS-Diner" target="_blank" rel="noopener noreferrer" className="primary-action mt-7">View game on Roblox <ArrowUpRight size={17} /></a>
      </div>
    </article>
  )
}
