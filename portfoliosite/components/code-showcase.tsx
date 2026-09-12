'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { Code2, RotateCcw, Sparkles } from 'lucide-react'
import { ExtraPlayground } from '@/components/extra-playground'
import { FeaturedGame } from '@/components/featured-game'

export function CodeShowcase() {
  const [distance, setDistance] = useState(35)
  const [color, setColor] = useState('violet')
  const [showCode, setShowCode] = useState(false)
  const colors = { violet: '#a78bfa', mint: '#6ee7b7', coral: '#fb7185' }
  const tint = colors[color as keyof typeof colors]
  const intensity = 1 - distance / 100

  useEffect(() => {
    const saved = localStorage.getItem('lj-accent')
    if (saved && saved in colors) setColor(saved)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--site-accent', tint)
    localStorage.setItem('lj-accent', color)
  }, [color, tint])

  return (
    <section id="playground" className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="section-eyebrow">A little code. A lot of possibility.</p><h2 className="mt-3 text-3xl font-medium tracking-tight">Don’t just look. Play.</h2></div><p className="max-w-sm text-sm leading-relaxed text-white/45">Three browser demos: a proximity beacon, an interactive door, and an inventory shop. Open the code buttons for Luau examples.</p></div>
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#111119] md:grid-cols-[1.5fr_1fr]">
          <div className="beacon-stage relative flex min-h-[340px] items-center justify-center overflow-hidden" style={{ '--beacon-color': tint, '--beacon-power': intensity } as CSSProperties}>
            <span className="absolute left-6 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/45"><Sparkles size={13} /> Interactive concept / 001</span>
            {showCode ? <pre className="accent-text relative max-w-full overflow-x-auto px-6 text-xs leading-7"><code>{[
              '-- Proximity → light intensity',
              'local distance = ' + distance,
              'local range = 100',
              'local intensity = 1 - distance / range',
              '',
              'light.Brightness = intensity * 4',
              '-- Brightness: ' + (intensity * 4).toFixed(2),
            ].join('\n')}</code></pre> : <><div className="beacon-halo" /><div className="beacon-ring" /><div className="beacon-core" /><span className="absolute bottom-7 px-4 text-center font-mono text-[11px] text-white/45">{distance < 30 ? 'You’re close. Full of possibility.' : distance > 75 ? 'Move closer to wake the beacon.' : 'A little closer. A little brighter.'}</span></>}
            <button type="button" onClick={() => setShowCode(!showCode)} aria-pressed={showCode} className="absolute right-4 top-4 rounded-lg border border-white/10 bg-black/20 p-2 text-white/60 transition hover:text-white" aria-label={showCode ? 'Show beacon preview' : 'Show beacon code'}><Code2 size={17} /></button>
          </div>
          <div className="flex flex-col justify-center border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-9">
            <p className="text-lg font-medium">Make it your own.</p><p className="mt-2 text-sm leading-relaxed text-white/45">Small interactions make a world feel alive. Try this one.</p>
            <div className="mb-4 mt-8 flex justify-between text-xs"><label htmlFor="distance" className="text-white/65">Player distance</label><output htmlFor="distance" className="accent-text font-mono font-semibold">{distance} studs</output></div>
            <input id="distance" type="range" min="0" max="100" value={distance} onChange={e => setDistance(Number(e.target.value))} className="beacon-slider w-full cursor-pointer" style={{ background: `linear-gradient(90deg, var(--site-accent) ${distance}%, #ffffff12 ${distance}%)` }} />
            <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-white/30"><span>Near</span><span>Far</span></div>
            <div className="mt-7 flex items-center justify-between"><span className="text-xs text-white/65">Beacon color</span><div className="flex gap-3">{Object.entries(colors).map(([name, value]) => <button key={name} type="button" aria-label={name + ' beacon'} aria-pressed={color === name} onClick={() => setColor(name)} style={{ backgroundColor: value }} className={'h-6 w-6 rounded-full ring-offset-4 ring-offset-[#111119] transition-transform hover:scale-110 ' + (color === name ? 'ring-1 ring-white' : '')} />)}</div></div>
            <button type="button" onClick={() => { setDistance(35); setColor('violet'); setShowCode(false) }} className="mt-8 flex items-center gap-2 self-start text-xs text-white/40 hover:text-white"><RotateCcw size={12} /> Reset playground</button>
          </div>
        </div>
        <ExtraPlayground />
        <FeaturedGame />
      </div>
    </section>
  )
}
