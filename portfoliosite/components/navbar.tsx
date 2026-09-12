'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Playground', href: '/#playground' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/#top" className="flex items-center gap-3" aria-label="LJ Development home">
          <Image src="/portfolio/lj-development-logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" priority />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:block">
            LJ Development
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#pricing"
            className="primary-action !px-5 !py-2"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
