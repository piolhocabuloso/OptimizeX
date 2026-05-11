import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PageBackground } from "@/components/layout/PageBackground"

export default function PrivacyPolicy() {
  return (
    <div className="page-shell">
      <PageBackground density={14} />
      <div className="relative z-20"><Navbar /></div>
      <main className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center opacity-0 animate-[riseIn_.8s_ease_forwards]">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300"><Sparkles className="h-4 w-4" /> Política de Privacidade</div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Sua privacidade em primeiro lugar</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">Documento oficial da Piolho OptimizeX para manter tudo organizado, profissional e transparente.</p>
          </div>
          <div className="mt-12 grid gap-5 opacity-0 animate-[riseIn_.8s_ease_forwards] [animation-delay:120ms]">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-emerald-300">1. Coleta de dados</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Coletamos apenas informações necessárias para suporte, funcionamento e melhoria dos serviços.</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-emerald-300">2. Uso dos dados</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Os dados podem ser usados para atendimento, melhoria dos aplicativos e segurança.</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-emerald-300">3. Proteção</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Buscamos proteger as informações com boas práticas e acesso limitado.</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-emerald-300">4. Compartilhamento</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Não vendemos dados pessoais. Compartilhamentos ocorrem apenas quando necessário ou exigido por lei.</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-emerald-300">5. Seus direitos</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Você pode solicitar revisão, correção ou remoção de informações quando aplicável.</p></section>
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/"><Button className="rounded-full bg-emerald-400 font-black text-black hover:bg-emerald-300"><ArrowLeft className="mr-2 h-5 w-5" /> Voltar para início</Button></Link>
          </div>
        </div>
      </main>
      <div className="relative z-20"><Footer /></div>
    </div>
  )
}
