import React, { useEffect, useRef, useState } from "react"
import {
  Cpu,
  Activity,
  HardDrive,
  ShieldCheck,
  BatteryCharging,
  Fan,
  Gauge,
  Sparkles,
  ArrowUpRight,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Monitoramento de CPU",
    description:
      "Acompanhe o uso do processador em tempo real e identifique gargalos que deixam o PC lento.",
    badge: "Tempo real",
  },
  {
    icon: Activity,
    title: "Consumo de Memória",
    description:
      "Visualize o uso da RAM e veja quando o sistema está pesado demais para jogos ou multitarefas.",
    badge: "RAM",
  },
  {
    icon: HardDrive,
    title: "Status do Disco",
    description:
      "Verifique espaço livre, arquivos pesados e pontos que podem afetar o desempenho do SSD ou HD.",
    badge: "SSD / HD",
  },
  {
    icon: BatteryCharging,
    title: "Gerenciamento de Energia",
    description:
      "Aplique perfis de energia para buscar mais desempenho, resposta rápida e melhor estabilidade.",
    badge: "Energia",
  },
  {
    icon: Fan,
    title: "Otimização Inteligente",
    description:
      "Ajustes rápidos para deixar o Windows mais leve, limpo e preparado para entregar mais fluidez.",
    badge: "Boost",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Ajuda a manter o sistema mais controlado, evitando processos desnecessários afetando o uso.",
    badge: "Proteção",
  },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#030504] py-20 text-white md:py-28"
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

          @keyframes floatGlow {
            0%, 100% {
              transform: translateY(0);
              opacity: .45;
            }
            50% {
              transform: translateY(-18px);
              opacity: .9;
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

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <span className="absolute left-[12%] top-[20%] h-1.5 w-1.5 rounded-full bg-emerald-300 animate-[floatGlow_5s_ease-in-out_infinite]" />
        <span className="absolute left-[78%] top-[18%] h-1 w-1 rounded-full bg-emerald-300 animate-[floatGlow_6s_ease-in-out_infinite]" />
        <span className="absolute left-[64%] top-[72%] h-1.5 w-1.5 rounded-full bg-lime-300 animate-[floatGlow_7s_ease-in-out_infinite]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            visible ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300 shadow-lg shadow-emerald-950/30">
            <Sparkles className="h-4 w-4" />
            Recursos Piolho OptimizeX
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Ferramentas para deixar seu PC{" "}
            <span className="relative inline-block text-emerald-300">
              mais rápido
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400/70" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Tudo o que você precisa para monitorar, limpar, otimizar e manter o
            Windows mais leve para jogos e uso diário.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div
            className={`rounded-[1.7rem] border border-emerald-400/20 bg-emerald-400/10 p-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Gauge className="mb-4 h-8 w-8 text-emerald-300" />
            <p className="text-3xl font-black">+FPS</p>
            <p className="mt-2 text-sm text-zinc-400">
              Foco em jogos, fluidez e resposta rápida.
            </p>
          </div>

          <div
            className={`rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Zap className="mb-4 h-8 w-8 text-emerald-300" />
            <p className="text-3xl font-black">1 clique</p>
            <p className="mt-2 text-sm text-zinc-400">
              Ajustes simples para otimizar sem complicação.
            </p>
          </div>

          <div
            className={`rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ShieldCheck className="mb-4 h-8 w-8 text-emerald-300" />
            <p className="text-3xl font-black">Seguro</p>
            <p className="mt-2 text-sm text-zinc-400">
              Recursos pensados para controle e estabilidade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
                className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-zinc-950 ${
                  visible
                    ? "opacity-0 animate-[riseIn_.8s_ease_forwards]"
                    : "opacity-0"
                }`}
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/0 blur-3xl transition-all duration-700 group-hover:bg-emerald-400/15" />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-950/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-colors duration-300 group-hover:text-emerald-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-400">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-bold text-emerald-300">
                      Saiba mais
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}