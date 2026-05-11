import React from "react"
import { Link } from "react-router-dom"
import { Heart, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react"

const DISCORD_URL = "https://discord.gg/45zyQEe2s3"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-400/10 bg-[#030504] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[760px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr] md:items-start">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 no-underline hover:no-underline">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-950/30">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black leading-none text-white">Piolho OptimizeX</h3>
                <p className="mt-1 text-xs text-zinc-500">Otimização, desempenho e comunidade</p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              Site oficial dos aplicativos Piolho OptimizeX. Visual profissional, downloads organizados e suporte em um só lugar.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" /> Performance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-zinc-300">
                <ShieldCheck className="h-3.5 w-3.5" /> Segurança
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-zinc-400 no-underline transition-colors hover:text-emerald-300 hover:no-underline">Início</Link>
              <Link to="/dashboard" className="text-sm text-zinc-400 no-underline transition-colors hover:text-emerald-300 hover:no-underline">Download</Link>
              <Link to="/discord" className="text-sm text-zinc-400 no-underline transition-colors hover:text-emerald-300 hover:no-underline">Discord</Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-emerald-300">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy-policy" className="text-sm text-zinc-400 no-underline transition-colors hover:text-emerald-300 hover:no-underline">Política de Privacidade</Link>
              <Link to="/terms-of-service" className="text-sm text-zinc-400 no-underline transition-colors hover:text-emerald-300 hover:no-underline">Termos de Serviço</Link>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300 no-underline transition-all hover:-translate-y-0.5 hover:bg-emerald-400/20 hover:no-underline">
                <MessageCircle className="h-4 w-4" /> Suporte
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-center text-xs text-zinc-500 md:text-left">© {new Date().getFullYear()} Piolho OptimizeX. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2 text-xs text-zinc-500">Feito com <Heart className="h-3.5 w-3.5 text-emerald-300" /> por Piolho OptimizeX</p>
        </div>
      </div>
    </footer>
  )
}
