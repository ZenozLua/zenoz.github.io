import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Box, Clapperboard, Code2, LayoutPanelLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FeaturedGame } from '@/components/featured-game'

export const metadata: Metadata = {
  title: 'Portfolio | LJ Development',
  description: 'Modeling, scripting, animation, and UI design examples from LJ Development.',
}

const modeling = [
  { src: '/portfolio/modeling-1.png', alt: 'Warmly lit diner interior built in Roblox Studio', title: 'Diner interior' },
  { src: '/portfolio/modeling-2.png', alt: 'Desert diner exterior in Roblox', title: 'Desert environment' },
  { src: '/portfolio/modeling-3.png', alt: 'Detailed diner kitchen environment in Roblox', title: 'Kitchen environment' },
]

const uiWork = [
  { src: '/portfolio/ui-design-1.png', alt: 'Diner employee dashboard user interface', title: 'Employee dashboard' },
  { src: '/portfolio/ui-design-2.png', alt: 'Music player user interface for a Roblox experience', title: 'Music player' },
]

const animations = [
  { src: '/portfolio/animation-1.mp4', poster: '/portfolio/animation-1-poster.jpg', title: 'Character animation 01' },
  { src: '/portfolio/animation-2.mp4', poster: '/portfolio/animation-2-poster.jpg', title: 'Character animation 02' },
  { src: '/portfolio/animation-3.mp4', poster: '/portfolio/animation-3-poster.jpg', title: 'Character animation 03' },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-8" aria-label="Featured game">
          <FeaturedGame />
        </section>
        <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div><Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"><ArrowLeft size={15} /> Back home</Link><p className="section-eyebrow">Selected work · 2026</p><h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-6xl md:text-8xl">The <span className="accent-text font-serif italic">portfolio.</span></h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">A growing collection of Roblox environments, animations, interface work, and interactive systems created with Roblox Studio, Blender, Luau, Pixlr, and Visual Studio Code.</p></div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e]"><Image src="/portfolio/lj-development-logo.png" alt="LJ Development logo" width={700} height={700} className="aspect-square h-auto w-full object-cover" priority /></div>
          </div>
        </section>

        <nav aria-label="Portfolio sections" className="sticky top-[73px] z-40 border-y border-white/10 bg-background/85 px-6 backdrop-blur-md"><div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto py-4 text-sm text-white/50"><a href="#modeling" className="whitespace-nowrap hover:text-white">01 Modeling</a><a href="#scripting" className="whitespace-nowrap hover:text-white">02 Scripting</a><a href="#animation" className="whitespace-nowrap hover:text-white">03 Animation</a><a href="#ui-design" className="whitespace-nowrap hover:text-white">04 UI Design</a></div></nav>

        <section id="modeling" className="portfolio-section px-6 py-24"><div className="mx-auto max-w-7xl"><PortfolioHeading number="01" icon={Box} title="Modeling" description="Environments and assets built for atmosphere, play, and storytelling." /><div className="mt-10 grid gap-4 md:grid-cols-2">{modeling.map((item, index) => <figure key={item.src} className={'portfolio-media group ' + (index === 0 ? 'md:col-span-2' : '')}><Image src={item.src} alt={item.alt} width={1680} height={800} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" /><figcaption>{item.title}<span>Roblox Studio / Blender</span></figcaption></figure>)}</div></div></section>

        <section id="scripting" className="portfolio-section border-y border-white/10 bg-white/[0.015] px-6 py-24"><div className="mx-auto max-w-7xl"><PortfolioHeading number="02" icon={Code2} title="Scripting" description="Luau systems that make Roblox experiences responsive and fun to use." /><div className="mt-10 grid overflow-hidden rounded-3xl border border-white/10 bg-[#101018] lg:grid-cols-2"><div className="p-7 md:p-10"><p className="section-eyebrow">Live site example</p><h3 className="mt-4 text-2xl font-medium">Proximity beacon</h3><p className="mt-4 max-w-md text-base leading-relaxed text-white/50">The beacon on the home page turns player distance into brightness and color. It demonstrates responsive logic, state, and feedback—the same ideas used inside a Roblox experience.</p><div className="mt-7 flex flex-wrap gap-2">{['Distance detection', 'Light response', 'Live color state', 'Reset controls'].map(item => <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/45">{item}</span>)}</div><Link href="/#playground" className="primary-action mt-8">Try the live example <ArrowUpRight size={17} /></Link></div><pre className="overflow-x-auto border-t border-white/10 bg-black/25 p-7 text-sm leading-7 lg:border-l lg:border-t-0"><code className="accent-text">{`local distance = (player.Position - beacon.Position).Magnitude\nlocal intensity = 1 - math.clamp(distance / RANGE, 0, 1)\n\nlight.Brightness = intensity * 4\nbeacon.Color = IDLE_COLOR:Lerp(ACTIVE_COLOR, intensity)`}</code></pre></div></div></section>

        <section id="animation" className="portfolio-section px-6 py-24"><div className="mx-auto max-w-7xl"><PortfolioHeading number="03" icon={Clapperboard} title="Animation" description="Character work created in Roblox Studio and Blender." /><div className="mt-10 grid gap-4 lg:grid-cols-3">{animations.map(item => <figure key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111119]"><video controls muted playsInline preload="metadata" poster={item.poster} className="aspect-video w-full bg-black"><source src={item.src} type="video/mp4" />Your browser cannot play this video. <a href={item.src}>Download the clip.</a></video><figcaption className="flex items-center justify-between p-4 text-sm"><span>{item.title}</span><span className="text-white/35">Roblox / Blender</span></figcaption></figure>)}</div></div></section>

        <section id="ui-design" className="portfolio-section border-y border-white/10 bg-white/[0.015] px-6 py-24"><div className="mx-auto max-w-7xl"><PortfolioHeading number="04" icon={LayoutPanelLeft} title="UI Design" description="Readable, themed interfaces that support the experience around them." /><div className="mt-10 grid gap-4 lg:grid-cols-2">{uiWork.map(item => <figure key={item.src} className="portfolio-media group"><Image src={item.src} alt={item.alt} width={900} height={430} className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.02]" /><figcaption>{item.title}<span>Pixlr / Roblox Studio</span></figcaption></figure>)}</div></div></section>

        <section className="px-6 py-24"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12"><div><p className="section-eyebrow">Have something in mind?</p><h2 className="mt-4 text-3xl font-medium">Let’s make the next example yours.</h2></div><Link href="/#pricing" className="primary-action">View rates & start a brief <ArrowUpRight size={17} /></Link></div></section>
      </main>
      <Footer />
    </div>
  )
}

function PortfolioHeading({ number, icon: Icon, title, description }: { number: string; icon: typeof Box; title: string; description: string }) {
  return <div className="flex flex-wrap items-end justify-between gap-6"><div><span className="accent-text font-mono text-sm">{number}</span><h2 className="mt-3 flex items-center gap-3 text-4xl font-medium md:text-5xl"><Icon className="accent-text h-8 w-8" strokeWidth={1.5} />{title}</h2></div><p className="max-w-sm text-base leading-relaxed text-white/50">{description}</p></div>
}
