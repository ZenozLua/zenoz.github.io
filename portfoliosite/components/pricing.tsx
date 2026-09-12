'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const options = ['Modeling', 'Scripting', 'Animation', 'UI Design']
const inquiryCooldownMs = 90 * 60 * 1000
const rates = [
  { service: 'Modeling', usd: '$4–$22', robux: '400–2,500 R$', note: 'Props, buildings, and detailed assets' },
  { service: 'Scripting', usd: '$6–$35', robux: '650–3,700 R$', note: 'Small mechanics through medium systems' },
  { service: 'Animation', usd: '$4–$18', robux: '400–2,000 R$', note: 'Simple loops, actions, and character work' },
  { service: 'UI Design', usd: '$4–$22', robux: '400–2,500 R$', note: 'Single screens through connected menus' },
]

export function Pricing() {
  const [selected, setSelected] = useState<string[]>(['Scripting'])
  const [scope, setScope] = useState('A single feature or asset')
  const [payment, setPayment] = useState('Robux · Group funds')
  const [details, setDetails] = useState('')
  const [cooldownUntil, setCooldownUntil] = useState(0)
  const [now, setNow] = useState(0)
  const body = ['Hi LJ Development,', '', "I’d like to discuss a project.", 'Services: ' + selected.join(', '), 'Scope: ' + scope, 'Preferred payment: ' + payment, '', 'My idea:', details || '[Add your idea, references, budget, and timeline here]', '', 'Thanks!'].join('\n')
  const remainingMs = Math.max(0, cooldownUntil - now)
  const canPrepareInquiry = selected.length > 0 && remainingMs === 0

  useEffect(() => {
    const currentTime = Date.now()
    const savedTime = Number(localStorage.getItem('lj-inquiry-cooldown'))
    setNow(currentTime)

    if (savedTime > currentTime) {
      setCooldownUntil(savedTime)
    } else {
      localStorage.removeItem('lj-inquiry-cooldown')
    }

    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  function startInquiryCooldown() {
    const nextAvailableTime = Date.now() + inquiryCooldownMs
    localStorage.setItem('lj-inquiry-cooldown', String(nextAvailableTime))
    setNow(Date.now())
    setCooldownUntil(nextAvailableTime)
  }

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Beginner-friendly · Negotiable rates</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight md:text-5xl">Simple pricing.<br /><span className="accent-text font-serif italic">Clear payments.</span></h2>
          <p className="mt-6 text-base leading-relaxed text-white/55">These are starting ranges while I build my commission history. Prices are negotiable and the final quote depends on detail, complexity, and time. We’ll agree on it before I begin.</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rates.map(rate => (
            <article key={rate.service} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-sm text-white/50">{rate.service}</p>
              <p className="accent-text mt-3 text-2xl font-semibold">{rate.usd} USD</p>
              <p className="mt-1 font-mono text-sm text-white/70">or {rate.robux}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/45">{rate.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h3 className="text-2xl font-medium">50 / 50 payment</h3>
            <div className="mt-6 grid gap-3">
              <div className="flex gap-4 rounded-2xl border border-white/10 p-5"><span className="accent-text font-mono font-semibold">50%</span><div><p className="font-medium">To begin</p><p className="mt-1 text-sm text-white/45">Paid after we agree on the scope and price.</p></div></div>
              <div className="flex gap-4 rounded-2xl border border-white/10 p-5"><span className="accent-text font-mono font-semibold">50%</span><div><p className="font-medium">When finished</p><p className="mt-1 text-sm text-white/45">Paid once the agreed work is complete.</p></div></div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-white/60">{['USD, Robux group funds, or gamepass', 'Prices can be negotiated', 'Clear scope and revisions before I start'].map(item => <p key={item} className="flex items-center gap-3"><Check size={15} className="accent-text" />{item}</p>)}</div>
            <p className="mt-6 text-xs leading-relaxed text-white/35">Ranges are starting estimates. Larger projects, extra revisions, or additions may change the final price. For gamepass payments, we’ll confirm the gamepass total together before work begins.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h3 className="mb-7 text-xl font-medium">Build your project brief</h3>
            <fieldset><legend className="mb-3 text-sm text-white/55">01 / What do you need?</legend>
              <div className="flex flex-wrap gap-2">{options.map(option => <button type="button" key={option} aria-pressed={selected.includes(option)} onClick={() => setSelected(current => current.includes(option) ? current.filter(item => item !== option) : [...current, option])} className={'service-choice rounded-xl border px-4 py-2.5 text-sm transition ' + (selected.includes(option) ? 'is-selected' : 'border-white/10 text-white/50 hover:border-white/30')}>{option}</button>)}</div>
            </fieldset>
            <label htmlFor="project-scope" className="mb-3 mt-6 block text-sm text-white/55">02 / How big is the idea?</label>
            <select id="project-scope" value={scope} onChange={e => setScope(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#15151f] p-3 text-sm"><option>A single feature or asset</option><option>Several features or assets</option><option>A complete experience</option><option>Let’s figure it out together</option></select>
            <label htmlFor="project-details" className="mb-3 mt-6 block text-sm text-white/55">03 / Tell me a little more <span className="text-white/30">(optional)</span></label>
            <textarea id="project-details" value={details} onChange={e => setDetails(e.target.value)} rows={4} maxLength={1500} placeholder="Your idea, references, budget, and timeline…" className="w-full resize-y rounded-xl border border-white/10 bg-[#15151f] p-3 text-sm placeholder:text-white/25" />
            <fieldset className="mt-6"><legend className="mb-3 text-sm text-white/55">04 / Preferred payment</legend><div className="grid gap-2 sm:grid-cols-3">{['Robux · Group funds', 'Robux · Gamepass', 'USD'].map(method => <button key={method} type="button" aria-pressed={payment === method} onClick={() => setPayment(method)} className={'service-choice rounded-xl border px-3 py-2.5 text-sm transition ' + (payment === method ? 'is-selected' : 'border-white/10 text-white/50 hover:border-white/30')}>{method}</button>)}</div></fieldset>
            <a onClick={canPrepareInquiry ? startInquiryCooldown : undefined} aria-disabled={!canPrepareInquiry} tabIndex={canPrepareInquiry ? 0 : -1} href={canPrepareInquiry ? 'mailto:gigiandlj@gmail.com?subject=' + encodeURIComponent('New project · ' + selected.join(' + ')) + '&body=' + encodeURIComponent(body) : undefined} className={'primary-action mt-5 w-full justify-center ' + (!canPrepareInquiry ? 'pointer-events-none opacity-40' : '')}>{remainingMs > 0 ? `Try again in ${formatRemainingTime(remainingMs)}` : 'Prepare my inquiry'} <ArrowUpRight size={17} /></a>
            <p aria-live="polite" className="mt-3 text-center text-xs text-white/35">{remainingMs > 0 ? `Inquiry cooldown active. You can prepare another email in ${formatRemainingTime(remainingMs)}.` : selected.length ? 'Opens your email app with your brief. A 1 hour 30 minute cooldown starts when clicked.' : 'Choose at least one service to continue.'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function formatRemainingTime(milliseconds: number) {
  const totalMinutes = Math.ceil(milliseconds / 60000)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return [hours > 0 ? `${hours}h` : '', minutes > 0 ? `${minutes}m` : ''].filter(Boolean).join(' ')
}
