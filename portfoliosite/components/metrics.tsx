const metrics = [
  { value: '3+', label: 'Years Exp' },
  { value: '1', label: 'Projects Completed' },
  { value: '~5K', label: 'Contributed Visits' },
  { value: 'None yet', label: '5-Star Reviews', accent: true },
]

const pillars = [
  {
    title: 'Client-Centric Focus',
    body: 'I plan on becoming a trustworthy partner, helping on projects across the long term while holding myself to a high standard.',
  },
  {
    title: 'Tailored Solutions',
    body: 'Personalized development and design strategies aligned with your unique community goals.',
  },
  {
    title: 'Priority Understanding',
    body: 'Priority understanding of business objectives to ensure maximum impact and engagement.',
  },
]

export function Metrics() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-red)]">
          Performance Metrics
        </p>
        <h2 className="mb-14 text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Metrics &amp; Impact
        </h2>

        <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-12 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p
                className={`text-4xl font-bold tracking-tight md:text-6xl ${
                  metric.accent ? 'text-[var(--accent-red)]' : 'text-white'
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <span className="block h-1 w-10 bg-[var(--accent-red)]" />
              <h3 className="mt-6 text-lg font-semibold uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
