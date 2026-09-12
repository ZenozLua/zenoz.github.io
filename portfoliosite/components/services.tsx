import { Box, Code2, Clapperboard, LayoutPanelLeft } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    num: '01',
    title: 'Modeling',
    icon: Box,
    body: 'I model buildings, characters, and all kinds of assets in Roblox Studio and Blender.',
  },
  {
    num: '02',
    title: 'Scripting',
    icon: Code2,
    body: "I'm fairly familiar with Roblox Luau. I started back in 2020 at just 9 years old and have always enjoyed Roblox development.",
  },
  {
    num: '03',
    title: 'Animation',
    icon: Clapperboard,
    body: 'I animate well, with examples shown inside the portfolio. I specialize in animating on both Roblox Studio and Blender.',
  },
  {
    num: '04',
    title: 'UI Design',
    icon: LayoutPanelLeft,
    body: 'I design a vast range of user interfaces with different functions. I design UI in Pixlr, then make it work in Roblox.',
  },
]

const tools = [
  { name: 'Roblox Studio', use: 'Building & scripting', image: '/tools/roblox-studio.svg' },
  { name: 'Blender', use: 'Modeling & animation', image: '/tools/blender.svg' },
  { name: 'Visual Studio Code', use: 'Luau workflow', image: '/tools/vscode.png' },
  { name: 'Pixlr', use: 'Interface design', image: '/tools/pixlr.svg' },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-red)]">
            What I Do
          </p>
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Services & Expertise
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.num}
                className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-white/[0.03]"
              >
                <span className="font-mono text-sm text-white/30">
                  {service.num}
                </span>
                <Icon
                  className="mt-8 h-8 w-8 text-white/80 transition-colors group-hover:text-[var(--accent-indigo)]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {service.body}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-5">
          <div><p className="section-eyebrow">My toolkit</p><h3 className="mt-3 text-2xl font-medium">Where the work happens</h3></div>
          <a href="/portfolio" className="accent-text text-sm font-medium hover:underline">See examples in my portfolio →</a>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(tool => (
            <article key={tool.name} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:bg-white/[0.05]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                <Image src={tool.image} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              </span>
              <div><h4 className="font-medium">{tool.name}</h4><p className="mt-1 text-sm text-white/40">{tool.use}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
