import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Download, Home, Menu, MessageCircle, Rocket, Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"

const DISCORD_URL = "https://discord.gg/45zyQEe2s3"

const navItems = [
  { label: "Início", href: "/", icon: Home },
  { label: "Download", href: "/dashboard", icon: Download },
  { label: "Discord", href: "/discord", icon: MessageCircle },
]

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-400/10 bg-[#030504] text-white shadow-2xl shadow-black/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,.18),transparent_42%)]" />
      <div className="container relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-3 no-underline hover:no-underline">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-950/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-400/20">
            <Rocket className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </div>
          <div className="leading-none">
            <h1 className="text-base font-black tracking-tight text-white md:text-lg">Piolho OptimizeX</h1>
            <p className="mt-1 hidden text-[11px] font-semibold text-zinc-500 sm:block">Performance para seu PC</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.045] p-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold no-underline transition-all duration-300 hover:no-underline",
                  active ? "bg-emerald-400 text-black shadow-lg shadow-emerald-950/30" : "text-zinc-400 hover:bg-emerald-400/10 hover:text-white"
                )}
              >
                <Icon className={cn("h-4 w-4 transition-transform duration-300 group-hover:scale-110", active ? "text-black" : "text-emerald-300")} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden h-10 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 text-sm font-black text-emerald-300 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400/20 hover:no-underline md:inline-flex"
        >
          <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          Entrar
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.06] text-white transition-all hover:bg-emerald-400/10 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-400/10 bg-[#030504] px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold no-underline transition-all hover:no-underline",
                    active ? "bg-emerald-400 text-black" : "bg-emerald-400/[0.06] text-zinc-300 hover:bg-emerald-400/10 hover:text-white"
                  )}
                >
                  <Icon className={cn("h-5 w-5", active ? "text-black" : "text-emerald-300")} />
                  {item.label}
                </Link>
              )
            })}
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-black no-underline hover:bg-emerald-300 hover:no-underline">
              <MessageCircle className="h-5 w-5" />
              Entrar no Discord
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
