import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {
  Rocket,
  ArrowRight,
  Sparkles,
  Gauge,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  MonitorCog,
  Download,
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export function Hero() {
  const { isAuthenticated } = useAuth()
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const particles = useMemo(() => Array.from({ length: 18 }), [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.12 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-[#030504] py-20 text-white transition-all duration-700 md:py-32 ${
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

          @keyframes shine {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }

          @keyframes pulseBar {
            0%, 100% {
              transform: scaleX(.45);
              opacity: .45;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[680px] w-[1000px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
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
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          {/* Texto */}
          <div className="text-center opacity-0 animate-[riseIn_.8s_ease_forwards] lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300 shadow-lg shadow-emerald-950/30">
              <Sparkles className="h-4 w-4" />
              Otimização de Sistema
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-7xl">
              Deixe sua máquina{" "}
              <span className="relative inline-block text-emerald-300">
                mais rápida
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400/70" />
              </span>{" "}
              e pronta para jogos
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg lg:mx-0">
              Otimize seu computador com ferramentas da Piolho OptimizeX:
              limpeza, desempenho, controle de memória e ajustes para deixar o
              Windows mais leve e fluido.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to={isAuthenticated ? "/dashboard" : "/dashboard"}>
                <Button
                  size="lg"
                  className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-black text-black shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
                >
                  <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <span className="relative flex items-center">
                    Iniciar otimização
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>

              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/10 bg-white/5 px-8 font-bold text-white hover:bg-white/10"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Ver downloads
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <Zap className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="text-sm font-black text-white">Mais FPS</p>
                <p className="mt-1 text-xs text-zinc-500">foco em jogos</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <ShieldCheck className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="text-sm font-black text-white">Mais controle</p>
                <p className="mt-1 text-xs text-zinc-500">ajustes simples</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <Gauge className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="text-sm font-black text-white">Mais fluidez</p>
                <p className="mt-1 text-xs text-zinc-500">sistema leve</p>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative opacity-0 animate-[riseIn_.9s_ease_forwards] [animation-delay:160ms]">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-lime-400/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-400/20 bg-zinc-950/80 p-4 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/40">
                {/* Top bar */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    OptimizeX
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
                        Painel ativo
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white">
                        Piolho OptimizeX
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        Controle total do desempenho
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Rocket className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                      <Cpu className="mb-4 h-6 w-6 text-emerald-300" />
                      <p className="text-sm font-bold text-zinc-400">CPU</p>
                      <p className="mt-1 text-3xl font-black text-white">32%</p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full origin-left rounded-full bg-emerald-400 animate-[pulseBar_2.2s_ease-in-out_infinite]" />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                      <Activity className="mb-4 h-6 w-6 text-emerald-300" />
                      <p className="text-sm font-bold text-zinc-400">RAM</p>
                      <p className="mt-1 text-3xl font-black text-white">58%</p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full origin-left rounded-full bg-emerald-400 animate-[pulseBar_2.6s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <div className="mb-4 flex items-center gap-2 text-emerald-300">
                      <MonitorCog className="h-5 w-5" />
                      <span className="font-black">Otimização recomendada</span>
                    </div>

                    <div className="grid gap-3">
                      <div className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
                        <span className="text-sm text-zinc-300">Limpeza de cache</span>
                        <span className="text-xs font-bold text-emerald-300">Pronto</span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
                        <span className="text-sm text-zinc-300">Memória RAM</span>
                        <span className="text-xs font-bold text-emerald-300">Otimizada</span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
                        <span className="text-sm text-zinc-300">Modo desempenho</span>
                        <span className="text-xs font-bold text-emerald-300">Ativo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-xl font-black text-white">+FPS</p>
                  <p className="mt-1 text-[11px] text-zinc-500">jogos</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-xl font-black text-white">1 clique</p>
                  <p className="mt-1 text-[11px] text-zinc-500">simples</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-xl font-black text-white">leve</p>
                  <p className="mt-1 text-[11px] text-zinc-500">Windows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}