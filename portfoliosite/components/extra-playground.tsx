'use client'

import { useState } from 'react'
import { ArrowRight, Code2, RotateCcw } from 'lucide-react'

const doorCode = `-- Script inside a door model with a Hinge part and prompt.
local TweenService = game:GetService("TweenService")
local hinge = script.Parent.Hinge
local prompt = script.Parent.Handle.ProximityPrompt
local closed = hinge.CFrame
local isOpen = false
local moving = false

prompt.Triggered:Connect(function()
    if moving then return end
    moving = true
    isOpen = not isOpen

    local target = closed
    if isOpen then
        target = closed * CFrame.Angles(0, math.rad(90), 0)
    end

    local tween = TweenService:Create(hinge,
        TweenInfo.new(0.6, Enum.EasingStyle.Quad),
        { CFrame = target })
    tween:Play()
    tween.Completed:Wait()
    prompt.ActionText = isOpen and "Close" or "Open"
    moving = false
end)`

const shopCode = `-- Server-side purchase handler; prices stay on the server.
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local purchase = ReplicatedStorage.PurchaseItem
local prices = { Lantern = 40, Compass = 65, Backpack = 90 }
local owned = {}

purchase.OnServerEvent:Connect(function(player, itemName)
    local price = prices[itemName]
    local stats = player:FindFirstChild("leaderstats")
    local coins = stats and stats:FindFirstChild("Coins")
    if not price or not coins then return end

    owned[player] = owned[player] or {}
    if owned[player][itemName] or coins.Value < price then return end

    coins.Value -= price
    owned[player][itemName] = true
    -- Grant the matching item here, after validation.
end)

game.Players.PlayerRemoving:Connect(function(player)
    owned[player] = nil
end)`

const items = [
  { name: 'Lantern', price: 40 },
  { name: 'Compass', price: 65 },
  { name: 'Backpack', price: 90 },
]

export function ExtraPlayground() {
  const [doorOpen, setDoorOpen] = useState(false)
  const [owned, setOwned] = useState<string[]>([])
  const [codeVisible, setCodeVisible] = useState<string | null>(null)
  const spent = items.reduce((total, item) => total + (owned.includes(item.name) ? item.price : 0), 0)
  const balance = 150 - spent

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <article className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111119]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-6">
          <div><p className="section-eyebrow">02 / Interaction</p><h3 className="mt-2 text-xl font-medium">Open sesame.</h3></div>
          <button type="button" className="secondary-action !p-3" onClick={() => setCodeVisible(codeVisible === 'door' ? null : 'door')} aria-expanded={codeVisible === 'door'} aria-label="Toggle door code"><Code2 size={18} /></button>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-white/50">An open-and-close interaction with a smooth transition. In Roblox, a proximity prompt can trigger a hinged door.</p>
          <div className="my-6 flex min-h-48 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
            <div className="relative h-36 w-24 rounded-t-lg border-4 border-white/20 bg-black/60 [perspective:500px]">
              <div aria-hidden="true" className="absolute inset-0 origin-left rounded-t-sm border border-white/20 bg-[var(--site-accent)] transition-transform duration-700" style={{ transform: doorOpen ? 'rotateY(-75deg)' : 'rotateY(0)' }}><span className="absolute right-2 top-1/2 h-2 w-2 rounded-full bg-black/60" /></div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4"><p aria-live="polite" className="text-sm text-white/50">Door is {doorOpen ? 'open' : 'closed'}</p><button type="button" className="primary-action" aria-pressed={doorOpen} onClick={() => setDoorOpen(!doorOpen)}>{doorOpen ? 'Close door' : 'Open door'}<ArrowRight size={16} /></button></div>
          {codeVisible === 'door' && <CodeSample code={doorCode} note="Luau example: weld the door panel to an anchored hinge; keep the panel unanchored." />}
        </div>
      </article>

      <article className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111119]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-6">
          <div><p className="section-eyebrow">03 / Game UI</p><h3 className="mt-2 text-xl font-medium">Pack for the adventure.</h3></div>
          <button type="button" className="secondary-action !p-3" onClick={() => setCodeVisible(codeVisible === 'shop' ? null : 'shop')} aria-expanded={codeVisible === 'shop'} aria-label="Toggle shop code"><Code2 size={18} /></button>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-white/50">Try a small inventory shop. Spend demo coins, collect items, and see the interface respond. No real purchases.</p>
          <div className="my-5 flex items-center justify-between"><span className="text-sm text-white/50">Your balance</span><output className="accent-text font-mono font-semibold" aria-live="polite">{balance} coins</output></div>
          <div className="space-y-2">{items.map(item => {
            const purchased = owned.includes(item.name)
            const affordable = balance >= item.price
            return <div key={item.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3"><span className="text-sm">{item.name}<span className="ml-3 text-white/40">{item.price} coins</span></span><button type="button" disabled={purchased || !affordable} onClick={() => setOwned(current => current.includes(item.name) ? current : [...current, item.name])} className="rounded-lg border border-white/15 px-3 py-2 text-sm transition hover:bg-white/10 disabled:cursor-default disabled:opacity-40">{purchased ? 'Owned' : affordable ? 'Buy' : 'Not enough'}</button></div>
          })}</div>
          <button type="button" onClick={() => setOwned([])} className="mt-5 flex items-center gap-2 text-sm text-white/50 hover:text-white"><RotateCcw size={14} /> Reset coins & items</button>
          {codeVisible === 'shop' && <CodeSample code={shopCode} note="Luau example: validate purchases on the server. This excerpt uses session-only inventory; saving and item delivery belong in the full game system." />}
        </div>
      </article>
    </div>
  )
}

function CodeSample({ code, note }: { code: string; note: string }) {
  return <div className="mt-6 min-w-0 rounded-xl border border-white/10 bg-black/25"><p className="border-b border-white/10 p-4 text-xs leading-relaxed text-white/50">{note}</p><pre className="max-h-80 overflow-auto p-4 text-xs leading-6"><code className="accent-text">{code}</code></pre></div>
}
