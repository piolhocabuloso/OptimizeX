import React from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PageBackground } from "@/components/layout/PageBackground"
import { CheckCircle, Crown, Download, Lock, MessageCircle, Package, Rocket, ShieldCheck, Sparkles, Star, Zap, Cpu, ArrowRight } from "lucide-react"

const DISCORD_URL = "https://discord.gg/45zyQEe2s3"

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
  premium?: boolean
}

const apps: AppItem[] = [
  {
    title: "Piolho OptimizeX",
    subtitle: "Aplicativo principal",
    description: "O app principal para deixar o Windows mais limpo, organizado e preparado para jogos.",
    badge: "Mais popular",
    icon: Rocket,
    button: "Baixar gratuito",
    password: "piolhofree",
    url: "https://www.mediafire.com/file/gp9921tm2bcsp3r/Piolho_OptimizeX.rar/file",
  },
  {
    title: "MemorySaver",
    subtitle: "Memória mais leve",
    description: "Ferramenta simples para ajudar na organização do uso de memória e deixar o sistema mais fluido.",
    badge: "Gratuito",
    icon: Cpu,
    button: "Baixar gratuito",
    password: "PiolhoMS",
    url: "https://www.mediafire.com/file/8oft3bxzt4nhv9e/MemorySaver.rar/file",
  },
  {
    title: "SystemCleaner",
    subtitle: "Limpeza profunda",
    description: "Ferramenta planejada para limpeza de cache, arquivos temporários e resíduos do sistema.",
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
    description: "Recursos avançados, suporte prioritário, atualizações exclusivas e acesso vitalício.",
    badge: "Premium",
    icon: Crown,
    button: "Comprar agora",
    url: DISCORD_URL,
    premium: true,
  },
]

const freeItems = ["Downloads gratuitos", "Ferramentas simples", "Suporte via Discord", "Fácil instalação"]
const proItems = ["Recursos avançados", "Atualizações exclusivas", "Suporte prioritário", "Acesso vitalício"]

function openLink(url: string, disabled?: boolean) {
  if (disabled || !url || url === "#") return
  window.open(url, "_blank", "noopener,noreferrer")
}

function SmallAppCard({ app, index }: { app: AppItem; index: number }) {
  const Icon = app.icon
  return (
    <div
      style={{ animationDelay: `${index * 120}ms` }}
      className={`group relative overflow-hidden rounded-[1.7rem] border p-6 opacity-0 shadow-xl transition-all duration-500 animate-[riseIn_.8s_ease_forwards] hover:-translate-y-2 ${
        app.premium
          ? "border-yellow-300/30 bg-gradient-to-br from-yellow-500 via-orange-500 to-orange-700 text-white shadow-orange-950/30"
          : "border-white/10 bg-zinc-950/80 text-white shadow-black/30"
      }`}
    >
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${app.premium ? "bg-white/20 text-white" : app.disabled ? "bg-zinc-800 text-zinc-300" : "bg-emerald-400/10 text-emerald-300"}`}>
            {app.badge}
          </span>
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${app.premium ? "bg-white/20" : "bg-white/5"}`}>
            <Icon className={app.premium ? "h-6 w-6 text-white" : "h-6 w-6 text-emerald-300"} />
          </div>
        </div>
        <p className={app.premium ? "text-sm text-white/80" : "text-sm text-zinc-400"}>{app.subtitle}</p>
        <h3 className="mt-1 text-2xl font-black">{app.title}</h3>
        <p className={app.premium ? "mt-4 min-h-[72px] text-sm leading-6 text-white/85" : "mt-4 min-h-[72px] text-sm leading-6 text-zinc-400"}>{app.description}</p>
        {app.premium && (
          <div className="mt-5 rounded-2xl bg-black/15 p-4">
            <p className="text-sm text-white/75">Pagamento único</p>
            <p className="text-3xl font-black">R$ 19,90</p>
            <p className="text-xs text-white/70">Acesso vitalício</p>
          </div>
        )}
        {app.password && <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">Senha: <strong className="text-white">{app.password}</strong></p>}
        <Button size="lg" disabled={app.disabled} onClick={() => openLink(app.url, app.disabled)} className={`mt-5 h-11 w-full rounded-full font-black ${app.premium ? "bg-white text-orange-600 hover:bg-zinc-100" : app.disabled ? "cursor-not-allowed bg-zinc-800 text-zinc-400" : "bg-emerald-400 text-black hover:bg-emerald-300"}`}>
          {app.premium ? <Crown className="mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />}
          {app.button}
        </Button>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="page-shell">
      <PageBackground density={20} />
      <div className="relative z-20"><Navbar /></div>

      <main className="relative z-10 flex-1 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl">
          <section className="mx-auto max-w-4xl text-center opacity-0 animate-[riseIn_.8s_ease_forwards]">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
              <Download className="h-4 w-4" /> Central de Downloads
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-7xl">Baixe os aplicativos da <span className="text-emerald-300">Piolho OptimizeX</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">Escolha a ferramenta ideal para seu PC. Tudo organizado, bonito e pronto para entregar.</p>
          </section>

          <section className="mt-16 grid gap-6">
            <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/50 p-1 shadow-2xl shadow-emerald-950/30 opacity-0 animate-[riseIn_.8s_ease_forwards]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,.18),transparent_30%)]" />
              <div className="relative rounded-[1.8rem] bg-black/30 p-8 backdrop-blur-xl md:p-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300"><Sparkles className="h-4 w-4" /> Mais popular</div>
                    <h2 className="text-4xl font-black md:text-6xl">Piolho OptimizeX</h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">O aplicativo principal para quem quer uma experiência de otimização mais completa, moderna e fácil de usar.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button size="lg" onClick={() => openLink(apps[0].url)} className="relative h-12 overflow-hidden rounded-full bg-emerald-400 px-8 font-black text-black hover:bg-emerald-300">
                        <span className="absolute inset-0 animate-[shine_2.8s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        <span className="relative flex items-center"><Download className="mr-2 h-5 w-5" /> Baixar gratuito</span>
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => openLink(DISCORD_URL)} className="h-12 rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"><MessageCircle className="mr-2 h-5 w-5" /> Suporte</Button>
                    </div>
                    <p className="mt-4 text-sm text-zinc-400">Senha: <strong className="text-emerald-300">piolhofree</strong></p>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"><Package className="mb-4 h-7 w-7 text-emerald-300" /><p className="text-2xl font-black">Arquivo compactado</p><p className="mt-2 text-sm text-zinc-400">Baixe, extraia e execute.</p></div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"><Lock className="mb-4 h-7 w-7 text-emerald-300" /><p className="text-2xl font-black">Senha incluída</p><p className="mt-2 text-sm text-zinc-400">Use a senha informada no card.</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {apps.slice(1).map((app, index) => <SmallAppCard key={app.title} app={app} index={index + 1} />)}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">Comparação</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Gratuito ou Premium?</h2></div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/5 p-6">
                <h3 className="mb-5 text-2xl font-black text-emerald-300">Gratuito</h3>
                <ul className="space-y-3">{freeItems.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><CheckCircle className="h-5 w-5 text-emerald-300" /><span className="text-zinc-300">{item}</span></li>)}</ul>
              </div>
              <div className="rounded-[1.5rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 p-6">
                <h3 className="mb-5 text-2xl font-black text-orange-300">Premium</h3>
                <ul className="space-y-3">{proItems.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><Star className="h-5 w-5 text-orange-300" /><span className="text-zinc-300">{item}</span></li>)}</ul>
                <Button onClick={() => openLink(DISCORD_URL)} className="mt-6 rounded-full bg-orange-400 font-black text-black hover:bg-orange-300">Comprar premium <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="relative z-20"><Footer /></div>
    </div>
  )
}
