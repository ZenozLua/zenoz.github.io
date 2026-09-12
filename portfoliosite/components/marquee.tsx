const items = [
  'Roblox Animator',
  'Roblox Scripter',
  'Roblox Modeler',
  'UI Designer',
  'Full-Stack Dev',
]

export function Marquee() {
  const loop = [...items, ...items]

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-6">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 text-2xl font-bold uppercase tracking-tight text-white/70 md:text-4xl">
                {item}
              </span>
              <span className="text-2xl text-[var(--accent-red)] md:text-4xl">
                &bull;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
