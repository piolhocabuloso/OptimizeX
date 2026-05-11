import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { DoorClosed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageBackground } from "@/components/layout/PageBackground"

export default function NotFound() {
  const location = useLocation()

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname)
  }, [location.pathname])

  return (
    <div className="page-shell flex items-center justify-center px-4">
      <PageBackground density={12} />
      <div className="relative z-10 max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl shadow-black/30 backdrop-blur-xl">
        <DoorClosed className="mx-auto mb-6 h-16 w-16 text-emerald-300" />
        <h1 className="text-7xl font-black text-white">404</h1>
        <p className="mt-4 text-zinc-400">A página que você tentou acessar não existe.</p>
        <Link to="/"><Button className="mt-8 rounded-full bg-emerald-400 font-black text-black hover:bg-emerald-300">Voltar para início</Button></Link>
      </div>
    </div>
  )
}
