const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '1', label: 'Successful Projects' },
  { value: '~4K', label: 'Contributed Visits' },
  { value: 'None yet!', label: '5-Star Reviews' },
]

export function Stats() {
  return (
    <section className="border-y border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 ${
              i !== 0 ? 'lg:border-l lg:border-white/10' : ''
            } ${i % 2 !== 0 ? 'border-l border-white/10 lg:border-l' : ''}`}
          >
            <p className="text-4xl font-bold tracking-tight md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wide text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
