import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PageBackground } from "@/components/layout/PageBackground"
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Download,
  MessageCircle,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Desempenho real",
    description: "Ferramentas pensadas para deixar o Windows mais leve, fluido e pronto para jogos.",
  },
  {
    icon: ShieldCheck,
    title: "Experiência segura",
    description: "Interface simples, ações claras e foco em controle para o usuário.",
  },
  {
    icon: MonitorCog,
    title: "Visual profissional",
    description: "Design moderno para apresentar o projeto com qualidade de empresa.",
  },
]

const steps = ["Baixe o aplicativo", "Extraia o arquivo", "Abra no Windows", "Aplique as otimizações"]

export default function Index() {
  return (
    <div className="page-shell">
      <PageBackground />
      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10">
        <section className="container mx-auto max-w-7xl py-20 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="text-center opacity-0 animate-[riseIn_.8s_ease_forwards] lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300 shadow-lg shadow-emerald-950/30">
                <Sparkles className="h-4 w-4" />
                Site oficial Piolho OptimizeX
              </div>

              <h1 className="text-4xl font-black tracking-tight md:text-7xl">
                Otimização para PC com visual de{" "}
                <span className="relative inline-block text-emerald-300">
                  alto nível
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400/70" />
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg lg:mx-0">
                A Piolho OptimizeX reúne aplicativos, suporte e uma comunidade para quem quer um Windows mais limpo, organizado e preparado para jogos.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link to="/dashboard">
                  <Button size="lg" className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-black text-black shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300">
                    <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <span className="relative flex items-center">
                      Ver downloads
                      <Download className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </Link>

                <Link to="/discord">
                  <Button size="lg" variant="outline" className="h-12 rounded-full border-white/10 bg-white/5 px-8 font-bold text-white hover:bg-white/10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Entrar no Discord
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {['Otimização', 'Foco em jogos', 'Fácil de usar'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative opacity-0 animate-[riseIn_.9s_ease_forwards] [animation-delay:160ms]">
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-lime-400/20 blur-xl" />
              <div className="green-glow relative overflow-hidden rounded-[2.2rem] border border-emerald-400/20 bg-zinc-950/85 p-5 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />

                <div className="relative rounded-[1.8rem] border border-white/10 bg-black/30 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-300">Plataforma</p>
                      <h2 className="mt-2 text-3xl font-black">Piolho OptimizeX</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Rocket className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="mb-3 flex items-center gap-2 text-emerald-300">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-black">Projeto pronto para vender</span>
                      </div>
                      <p className="text-sm leading-6 text-zinc-400">
                        Página clara, botões diretos, download destacado e identidade visual consistente.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <Star className="mb-4 h-6 w-6 text-emerald-300" />
                        <p className="text-xl font-black">Design premium</p>
                        <p className="mt-2 text-sm text-zinc-500">Visual escuro com verde neon.</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <Crown className="mb-4 h-6 w-6 text-emerald-300" />
                        <p className="text-xl font-black">Marca forte</p>
                        <p className="mt-2 text-sm text-zinc-500">Tudo no mesmo padrão.</p>
                      </div>
                    </div>

                    <Link to="/dashboard">
                      <Button className="h-12 w-full rounded-full bg-emerald-400 font-black text-black hover:bg-emerald-300">
                        Conhecer aplicativos
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-7xl pb-24 md:pb-32">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Por que usar?
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Feito para parecer produto profissional</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Uma página inicial de apresentação, sem informação técnica exagerada, pronta para enviar para clientes e comunidade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{ animationDelay: `${index * 120}ms` }} className="group premium-card p-6 opacity-0 transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 hover:bg-white/[0.07]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">Como funciona</p>
                <h3 className="mt-3 text-3xl font-black md:text-4xl">Tudo direto, simples e bonito</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">O visitante entende rapidamente o que é o projeto, baixa o app ou entra no Discord.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {steps.map((step, index) => (
                  <div key={step} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-black">{index + 1}</div>
                    <p className="font-black text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-20"><Footer /></div>
    </div>
  )
}
