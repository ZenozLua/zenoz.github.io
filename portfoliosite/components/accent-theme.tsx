'use client'

import { useEffect } from 'react'

const colors: Record<string, string> = {
  violet: '#a78bfa',
  mint: '#6ee7b7',
  coral: '#fb7185',
}

export function AccentTheme() {
  useEffect(() => {
    const saved = localStorage.getItem('lj-accent')
    if (saved && colors[saved]) {
      document.documentElement.style.setProperty('--site-accent', colors[saved])
    }
  }, [])

  return null
}
