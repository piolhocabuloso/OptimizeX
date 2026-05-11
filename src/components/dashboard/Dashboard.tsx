import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Download,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle,
  MessageCircle,
  Cpu,
  Crown,
  Star,
  Sparkles,
  MonitorCog,
  Gauge,
  Lock,
  ArrowRight,
} from "lucide-react"

type AppItem = {
  title: string
  subtitle: string
  description: string
  badge: string
  icon: React.ElementType
  button: string
  password?: string
  url: string
  disabled?: boolean
  featured?: boolean
  premium?: boolean
}

const apps: AppItem[] = [
  {
    title: "Piolho OptimizeX",
    subtitle: "Otimização completa",
    description:
      "Ajustes inteligentes para deixar o Windows mais leve, rápido e estável para jogos e uso diário.",
    badge: "Mais popular",
    icon: Rocket,
    button: "Baixar gratuito",
    password: "piolhofree",
    url: "https://www.mediafire.com/file/gp9921tm2bcsp3r/Piolho_OptimizeX.rar/file",
    featured: true,
  },
  {
    title: "MemorySaver",
    subtitle: "RAM mais leve",
    description:
      "Liberação de memória RAM e redução de processos pesados para melhorar a fluidez do sistema.",
    badge: "Gratuito",
    icon: Cpu,
    button: "Baixar gratuito",
    password: "PiolhoMS",
    url: "https://www.mediafire.com/file/8oft3bxzt4nhv9e/MemorySaver.rar/file",
  },
  {
    title: "SystemCleaner",
    subtitle: "Limpeza profunda",
    description:
      "Remoção de arquivos temporários, cache e resíduos que deixam o Windows mais pesado.",
    badge: "Em breve",
    icon: ShieldCheck,
    button: "Em breve",
    password: "PiolhoSC",
    url: "#",
    disabled: true,
  },
  {
    title: "Maxify",
    subtitle: "Versão premium",
    description:
      "Recursos avançados, otimizações exclusivas, suporte prioritário e atualizações premium.",
    badge: "Premium",
    icon: Crown,
    button: "Comprar agora",
    url: "https://discord.gg/45zyQEe2s3",
    premium: true,
  },
]

const features = [
  {
    icon: Zap,
    title: "Mais desempenho",
    text: "Ajustes para melhorar resposta, estabilidade e fluidez.",
  },
  {
    icon: Gauge,
    title: "Mais FPS",
    text: "Configurações pensadas para jogos e sistemas mais fracos.",
  },
  {
    icon: Lock,
    title: "Mais controle",
    text: "Ferramentas simples para você otimizar sem complicação.",
  },
]

const freeItems = [
  "Otimização básica do sistema",
  "Limpeza de memória RAM",
  "Limpeza de arquivos temporários",
  "Suporte via Discord",
]

const proItems = [
  "Todos os recursos gratuitos",
  "Otimização avançada",
  "Atualizações exclusivas",
  "Suporte prioritário",
  "Recursos premium",
]

function openLink(url: string, disabled?: boolean) {
  if (disabled || !url || url === "#") return
  window.open(url, "_blank", "noopener,noreferrer")
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const totalFrames = 50

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(value * eased))

      if (frame >= totalFrames) {
        clearInterval(timer)
        setCount(value)
      }
    }, 25)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

function AppCard({ app, index }: { app: AppItem; index: number }) {
  const Icon = app.icon

  const baseDelay = `${index * 120}ms`

  if (app.featured) {
    return (
      <div
        style={{ animationDelay: baseDelay }}
        className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/50 p-1 shadow-2xl shadow-emerald-950/30 opacity-0 animate-[riseIn_.8s_ease_forwards]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,.18),transparent_30%)]" />
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

        <div className="relative rounded-[1.8rem] bg-black/30 p-8 md:p-10 backdrop-blur-xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <Sparkles className="h-4 w-4" />
              {app.badge}
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Senha: <strong className="text-white">{app.password}</strong>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div className="text-left">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-400/10 shadow-lg shadow-emerald-950/40">
                <Icon className="h-8 w-8 text-emerald-300" />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
                {app.subtitle}
              </p>

              <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
                {app.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
                {app.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => openLink(app.url)}
                  className="h-12 rounded-full bg-emerald-400 px-8 font-bold text-black shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {app.button}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openLink("https://discord.gg/45zyQEe2s3")}
                  className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
                >
                  Discord
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur">
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                  foco em desempenho
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur">
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter value={1} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                  clique para otimizar
                </p>
              </div>

              <div className="col-span-2 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                  <MonitorCog className="h-5 w-5" />
                  <span className="font-bold">Ideal para Windows</span>
                </div>
                <p className="text-sm leading-6 text-zinc-300">
                  Feito para quem quer um PC mais limpo, rápido e preparado para jogos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{ animationDelay: baseDelay }}
      className={`group relative overflow-hidden rounded-[1.7rem] border p-6 opacity-0 shadow-xl transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 ${
        app.premium
          ? "border-yellow-300/30 bg-gradient-to-br from-yellow-500 via-orange-500 to-orange-700 text-white shadow-orange-950/30"
          : "border-white/10 bg-zinc-950/80 text-white shadow-black/30"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={
            app.premium
              ? "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/25 blur-3xl"
              : "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl"
          }
        />
      </div>

      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              app.premium
                ? "bg-white/20 text-white"
                : app.disabled
                  ? "bg-zinc-800 text-zinc-300"
                  : "bg-emerald-400/10 text-emerald-300"
            }`}
          >
            {app.premium && <Crown className="h-3.5 w-3.5" />}
            {app.badge}
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
              app.premium ? "bg-white/20" : "bg-white/5"
            }`}
          >
            <Icon className={app.premium ? "h-6 w-6 text-white" : "h-6 w-6 text-emerald-300"} />
          </div>
        </div>

        <p className={app.premium ? "text-sm text-white/80" : "text-sm text-zinc-400"}>
          {app.subtitle}
        </p>

        <h3 className="mt-1 text-2xl font-black">{app.title}</h3>

        <p className={app.premium ? "mt-4 min-h-[72px] text-sm leading-6 text-white/85" : "mt-4 min-h-[72px] text-sm leading-6 text-zinc-400"}>
          {app.description}
        </p>

        {app.premium && (
          <div className="mt-5 rounded-2xl bg-black/15 p-4">
            <p className="text-sm text-white/75">Pagamento único</p>
            <p className="text-3xl font-black">R$ 19,90</p>
            <p className="text-xs text-white/70">Acesso vitalício</p>
          </div>
        )}

        {app.password && (
          <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
            Senha: <strong className="text-white">{app.password}</strong>
          </p>
        )}

        <Button
          size="lg"
          disabled={app.disabled}
          onClick={() => openLink(app.url, app.disabled)}
          className={`mt-5 h-11 w-full rounded-full font-bold transition-all duration-300 ${
            app.premium
              ? "bg-white text-orange-600 hover:bg-zinc-100"
              : app.disabled
                ? "cursor-not-allowed bg-zinc-800 text-zinc-400"
                : "bg-emerald-400 text-black hover:-translate-y-1 hover:bg-emerald-300"
          }`}
        >
          {app.premium ? <Crown className="mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />}
          {app.button}
        </Button>
      </div>
    </div>
  )
}

export function Dashboard() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const stars = useMemo(() => Array.from({ length: 18 }), [])

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
      className={`relative overflow-hidden bg-[#030504] py-20 text-white transition-opacity duration-700 md:py-32 ${
        visible ? "opacity-100" : "opacity-0"
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
              transform: translateY(-16px);
              opacity: .8;
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
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        {stars.map((_, index) => (
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 shadow-lg shadow-emerald-950/30">
            <Sparkles className="h-4 w-4" />
            Piolho OptimizeX
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-7xl">
            Deixe seu PC mais{" "}
            <span className="relative inline-block text-emerald-300">
              rápido
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400/70" />
            </span>{" "}
            e preparado para jogos
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Ferramentas da Piolho OptimizeX para limpar, otimizar e melhorar a fluidez do Windows
            com uma experiência simples, moderna e direta.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => openLink(apps[0].url)}
              className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-bold text-black shadow-xl shadow-emerald-950/40 hover:bg-emerald-300"
            >
              <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="relative flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Baixar Piolho OptimizeX
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => openLink("https://discord.gg/45zyQEe2s3")}
              className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar no Discord
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6">
          <AppCard app={apps[0]} index={0} />

          <div className="grid gap-6 md:grid-cols-3">
            {apps.slice(1).map((app, index) => (
              <AppCard key={app.title} app={app} index={index + 1} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                style={{ animationDelay: `${index * 130}ms` }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="text-xl font-black">{feature.title}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
                Comparação
              </p>
              <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
                Free vs Premium
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Escolha a versão ideal para seu tipo de uso. A gratuita ajuda no básico,
              enquanto a premium entrega recursos mais completos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/5 p-6">
              <h4 className="mb-5 text-2xl font-black text-emerald-300">Versão Gratuita</h4>

              <ul className="space-y-3">
                {freeItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle className="h-5 w-5 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 p-6">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h4 className="text-2xl font-black text-orange-300">Versão Premium</h4>

                  <div className="rounded-full bg-orange-400 px-3 py-1 text-xs font-black text-black">
                    R$ 19,90
                  </div>
                </div>

                <ul className="space-y-3">
                  {proItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                      <Star className="h-5 w-5 shrink-0 text-orange-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => openLink("https://discord.gg/45zyQEe2s3")}
                  className="mt-6 h-11 rounded-full bg-orange-400 px-6 font-black text-black hover:bg-orange-300"
                >
                  <Crown className="mr-2 h-4 w-4" />
                  Comprar Premium
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            onClick={() => openLink("https://discord.gg/45zyQEe2s3")}
            className="h-12 rounded-full border-emerald-400/20 bg-emerald-400/10 px-8 font-bold text-emerald-300 hover:bg-emerald-400/20"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Suporte via Discord
          </Button>
        </div>
      </div>
    </section>
  )
}