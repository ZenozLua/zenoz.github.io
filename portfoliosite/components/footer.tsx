import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image src="/portfolio/lj-development-logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            LJ Development
          </span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-white/50">
          <a href="/#services" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="/portfolio" className="transition-colors hover:text-white">
            Portfolio
          </a>
          <a href="/#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} LJ Development. Designing your
          future in pixels.
        </p>
      </div>
    </footer>
  )
}
