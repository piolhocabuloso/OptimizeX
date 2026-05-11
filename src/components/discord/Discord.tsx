import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Users,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle,
  Sparkles,
  Crown,
  Gamepad2,
  Headphones,
  ArrowRight,
  Radio,
} from "lucide-react"

const DISCORD_URL = "https://discord.gg/45zyQEe2s3"

const openDiscord = () => {
  window.open(DISCORD_URL, "_blank", "noopener,noreferrer")
}

const highlights = [
  {
    icon: MessageCircle,
    title: "Chats ativos",
    text: "Converse com a comunidade, tire dúvidas e participe das novidades.",
  },
  {
    icon: Headphones,
    title: "Canais de voz",
    text: "Entre em calls, jogue com a galera e participe de interações ao vivo.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro",
    text: "Servidor organizado, com regras claras e moderação ativa.",
  },
]

const features = [
  {
    icon: Zap,
    title: "Eventos",
    text: "Sorteios, campeonatos, avisos e interações exclusivas.",
  },
  {
    icon: CheckCircle,
    title: "Networking",
    text: "Conheça pessoas novas, faça amizades e parcerias.",
  },
  {
    icon: Users,
    title: "Comunidade",
    text: "Uma comunidade ativa para conversar todos os dias.",
  },
]

export function Dashboard() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const particles = useMemo(() => Array.from({ length: 18 }), [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[#030504] py-20 text-white transition-all duration-700 md:py-28 ${
        visible ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-md"
      }`}
    >
      <style>
        {`
          @keyframes riseIn {
            from {
              opacity: 0;
              transform: translateY(28px) scale(.98);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes floatSoft {
            0%, 100% {
              transform: translateY(0);
              opacity: .35;
            }
            50% {
              transform: translateY(-18px);
              opacity: .85;
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(52, 211, 153, 0);
            }
            50% {
              box-shadow: 0 0 50px rgba(52, 211, 153, .25);
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }
        `}
      </style>

      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        {particles.map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-emerald-300"
            style={{
              left: `${8 + ((index * 17) % 86)}%`,
              top: `${8 + ((index * 23) % 78)}%`,
              animation: `floatSoft ${4 + (index % 5)}s ease-in-out infinite`,
              animationDelay: `${index * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Hero */}
        <header className="grid items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
          <div className="opacity-0 animate-[riseIn_.8s_ease_forwards]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 shadow-lg shadow-emerald-950/30">
              <Sparkles className="h-4 w-4" />
              Servidor Oficial Piolho OptimizeX
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-7xl">
              Entre na comunidade da{" "}
              <span className="relative inline-block text-emerald-300">
                Piolho OptimizeX
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400/70" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Um servidor feito para quem curte otimização, desempenho, jogos,
              suporte, novidades e uma comunidade ativa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={openDiscord}
                className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-black text-black shadow-xl shadow-emerald-950/40 hover:bg-emerald-300"
              >
                <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative flex items-center">
                  <Rocket className="mr-2 h-5 w-5" />
                  Entrar agora
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={openDiscord}
                className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Suporte via Discord
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                ⚡ Otimização
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                🎮 Jogos
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                🛠️ Suporte
              </div>
            </div>
          </div>

          {/* Card principal */}
          <div className="relative opacity-0 animate-[riseIn_.9s_ease_forwards] [animation-delay:160ms]">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-lime-400/20 blur-xl" />

            <div
              className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-zinc-950/80 p-8 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl"
              style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-300/20 bg-emerald-400/10">
                  <Users className="h-10 w-10 text-emerald-300" />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300/80">
                  Comunidade oficial
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Conecte-se com quem busca mais desempenho
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Receba avisos, tire dúvidas, acompanhe atualizações e fique
                  por dentro das novidades da Piolho OptimizeX.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Radio className="mb-3 h-5 w-5 text-emerald-300" />
                    <p className="text-2xl font-black">24h</p>
                    <p className="text-xs text-zinc-400">comunidade online</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Gamepad2 className="mb-3 h-5 w-5 text-emerald-300" />
                    <p className="text-2xl font-black">Games</p>
                    <p className="text-xs text-zinc-400">foco em desempenho</p>
                  </div>
                </div>

                <Button
                  onClick={openDiscord}
                  className="mt-6 h-11 w-full rounded-full bg-emerald-400 font-black text-black hover:bg-emerald-300"
                >
                  Entrar no servidor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Cards de destaque */}
        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 130}ms` }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </div>
            )
          })}
        </section>

        {/* Recursos */}
        <section className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
                O que tem no servidor
              </p>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">
                Mais que um Discord, uma comunidade
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Participe dos canais, veja novidades, acompanhe atualizações dos
              projetos e fale diretamente com a comunidade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-zinc-950/60 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-zinc-950"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <Crown className="h-5 w-5 text-emerald-300/60" />
                  </div>

                  <h4 className="text-xl font-black">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-zinc-950 to-zinc-950 p-8 text-center shadow-2xl shadow-emerald-950/20 md:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-400/10 text-emerald-300">
            <Rocket className="h-8 w-8" />
          </div>

          <h3 className="text-3xl font-black md:text-4xl">
            Pronto para fazer parte?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
            Entre agora no servidor oficial da Piolho OptimizeX e acompanhe
            novidades, suporte, eventos e conteúdos sobre otimização.
          </p>

          <Button
            size="lg"
            onClick={openDiscord}
            className="mt-7 h-12 rounded-full bg-emerald-400 px-10 font-black text-black hover:bg-emerald-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Entrar no Discord
          </Button>
        </section>
      </div>
    </section>
  )
}