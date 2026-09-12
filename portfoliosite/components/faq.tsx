'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What programming languages do I specialize in?',
    a: 'I primarily specialize in Luau for high-performance Roblox programming, and can also do some C# and C++.',
  },
  {
    q: 'Do I work on both front-end and back-end?',
    a: 'Yes, I offer full-stack development. I design immersive user interfaces with pixel-perfect precision while implementing complex back-end systems to ensure seamless gameplay and community engagement.',
  },
  {
    q: 'What tools do I use for my workflow?',
    a: 'I build and model in Roblox Studio and Blender, design interfaces in Pixlr, and script gameplay systems in Luau — bringing everything together inside Roblox Studio.',
  },
  {
    q: 'How do revisions work?',
    a: 'We agree on scope before starting. Reasonable revisions are part of the process, but extra revisions or additions beyond the agreed scope may affect the final price.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-red)]">
          FAQ
        </p>
        <h2 className="mb-12 text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Common Questions
        </h2>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold uppercase tracking-wide text-white/90 md:text-lg">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-[var(--accent-red)]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] pb-6 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-white/55">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
