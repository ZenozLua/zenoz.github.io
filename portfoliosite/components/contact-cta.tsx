import { ArrowUpRight, Gamepad2, Mail, MessageCircle } from 'lucide-react'

const contacts = [
  { label: 'Discord', value: 'lllouis', href: 'https://discord.gg/pDWAJtNVrf', icon: MessageCircle, action: 'Open server' },
  { label: 'Roblox', value: 'imnotlouisplays', href: 'https://www.roblox.com/search/users?keyword=imnotlouisplays', icon: Gamepad2, action: 'Find on Roblox' },
  { label: 'Gmail', value: 'gigiandlj@gmail.com', href: 'mailto:gigiandlj@gmail.com', icon: Mail, action: 'Write an email' },
]

export function ContactCta() {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="contact-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 px-8 py-14 md:px-14 md:py-20">
        <div className="relative">
          <p className="section-eyebrow">Three ways to reach me</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <div><h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">Let’s build your next<br /><span className="accent-text font-serif italic">Roblox experience.</span></h2><p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">Send your idea, references, budget, and timeline. I’ll reply so we can agree on the scope, price, and 50/50 payment plan.</p></div>
            <a href="https://discord.gg/pDWAJtNVrf" target="_blank" rel="noreferrer" className="primary-action">Join my Discord <ArrowUpRight size={18} /></a>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {contacts.map(contact => {
              const Icon = contact.icon
              return <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined} className="contact-card group rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between"><Icon className="accent-text h-5 w-5" /><ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" /></div>
                <p className="mt-8 text-sm text-white/40">{contact.label}</p><p className="mt-1 break-all font-medium">{contact.value}</p><p className="mt-4 text-xs text-white/30">{contact.action}</p>
              </a>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
