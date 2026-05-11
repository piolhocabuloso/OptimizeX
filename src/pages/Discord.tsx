import React from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PageBackground } from "@/components/layout/PageBackground"
import { Bell, CheckCircle, Gamepad2, Headphones, MessageCircle, Rocket, ShieldCheck, Sparkles, Trophy, Users, Zap, ArrowRight } from "lucide-react"

const DISCORD_URL = "https://discord.gg/45zyQEe2s3"

const cards = [
  { icon: MessageCircle, title: "Chats organizados", description: "Canais separados para dúvidas, suporte, novidades e conversa geral." },
  { icon: Headphones, title: "Canais de voz", description: "Entre em call, jogue com a galera e participe de interações ao vivo." },
  { icon: ShieldCheck, title: "Ambiente seguro", description: "Servidor com regras claras, moderação e foco em manter tudo organizado." },
]

const reasons = [
  { icon: Bell, title: "Novidades", description: "Receba avisos sobre atualizações, mudanças e lançamentos." },
  { icon: Trophy, title: "Eventos", description: "Participe de sorteios, interações e eventos especiais." },
  { icon: Gamepad2, title: "Comunidade gamer", description: "Converse com pessoas que também buscam desempenho em jogos." },
]

function openDiscord() {
  window.open(DISCORD_URL, "_blank", "noopener,noreferrer")
}

export default function Discord() {
  return (
    <div className="page-shell">
      <PageBackground density={20} />
      <div className="relative z-20"><Navbar /></div>

      <main className="relative z-10 flex-1 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl">
          <section className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="text-center opacity-0 animate-[riseIn_.8s_ease_forwards] lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
                <Sparkles className="h-4 w-4" /> Servidor Oficial
              </div>
              <h1 className="text-4xl font-black tracking-tight md:text-7xl">Entre na comunidade da <span className="text-emerald-300">Piolho OptimizeX</span></h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg lg:mx-0">Um espaço para suporte, novidades, eventos, conversas e pessoas que curtem otimização, tecnologia e jogos.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" onClick={openDiscord} className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-black text-black hover:bg-emerald-300">
                  <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <span className="relative flex items-center"><Rocket className="mr-2 h-5 w-5" /> Entrar agora</span>
                </Button>
                <Button size="lg" variant="outline" onClick={openDiscord} className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"><MessageCircle className="mr-2 h-5 w-5" /> Suporte</Button>
              </div>
            </div>

            <div className="relative opacity-0 animate-[riseIn_.9s_ease_forwards] [animation-delay:160ms]">
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-lime-400/20 blur-xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-400/20 bg-zinc-950/80 p-6 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-300/20 bg-emerald-400/10"><Users className="h-10 w-10 text-emerald-300" /></div>
                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">Comunidade</p>
                  <h2 className="mt-3 text-3xl font-black md:text-4xl">Fique por dentro de tudo</h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">No servidor você acompanha avisos, recebe ajuda e participa das novidades da Piolho OptimizeX.</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Zap className="mb-3 h-5 w-5 text-emerald-300" /><p className="text-xl font-black">Suporte</p><p className="mt-1 text-xs text-zinc-500">Ajuda e dúvidas</p></div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Trophy className="mb-3 h-5 w-5 text-emerald-300" /><p className="text-xl font-black">Eventos</p><p className="mt-1 text-xs text-zinc-500">Interações e avisos</p></div>
                  </div>
                  <Button onClick={openDiscord} className="mt-6 h-12 w-full rounded-full bg-emerald-400 font-black text-black hover:bg-emerald-300">Entrar no servidor <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 md:grid-cols-3">
            {cards.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{ animationDelay: `${index * 120}ms` }} className="group premium-card p-6 opacity-0 transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 hover:bg-white/[0.07]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon className="h-7 w-7" /></div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              )
            })}
          </section>

          <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">Por que entrar?</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Uma comunidade para acompanhar o projeto</h2></div>
            <div className="grid gap-6 md:grid-cols-3">
              {reasons.map((item) => {
                const Icon = item.icon
                return <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-6"><Icon className="mb-5 h-8 w-8 text-emerald-300" /><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p></div>
              })}
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-zinc-950 to-zinc-950 p-8 text-center shadow-2xl shadow-emerald-950/20 md:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-400/10 text-emerald-300"><MessageCircle className="h-8 w-8" /></div>
            <h2 className="text-3xl font-black md:text-4xl">Pronto para entrar?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">Entre no Discord oficial da Piolho OptimizeX e acompanhe suporte, novidades e interações da comunidade.</p>
            <Button size="lg" onClick={openDiscord} className="mt-7 h-12 rounded-full bg-emerald-400 px-10 font-black text-black hover:bg-emerald-300"><CheckCircle className="mr-2 h-5 w-5" /> Entrar no Discord</Button>
          </section>
        </div>
      </main>

      <div className="relative z-20"><Footer /></div>
    </div>
  )
}
