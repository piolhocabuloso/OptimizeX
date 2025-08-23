import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Rocket, ShieldCheck, Zap, CheckCircle, MessageCircle, Cpu } from "lucide-react";

export function Dashboard() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative py-20 md:py-32 overflow-hidden transition-opacity duration-1000 ${visible
        ? "animate-fade-in opacity-100"
        : "animate-fade-out opacity-0 pointer-events-none"
        }`}
    >
      {/* Fundo blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-green-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-green-400/10 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="inline-flex items-center justify-center rounded-full bg-green-400/10 px-3 py-1 text-sm font-medium text-green-600 mb-2">
          Aplicativos de Otimização
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Deixe seu PC <span className="text-green-600">mais rápido</span> e eficiente
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Baixe nossos aplicativos e garanta desempenho máximo, limpeza de arquivos inúteis e proteção total do sistema.
        </p>

        {/* Apps */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* App 1 */}
          <div className="relative bg-white/70 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
            <Rocket className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Piolho Optimize X</h3>
            <p className="text-muted-foreground text-sm mb-4 text-center">
              Otimização completa do sistema, performance turbo e interface intuitiva.
            </p>
            <Button
              size="lg"
              className="flex items-center gap-2 rounded-full px-10 bg-green-600 hover:bg-green-700 text-white transition-colors"
              onClick={() =>
                window.open(
                  "https://www.mediafire.com/file/gp9921tm2bcsp3r/Piolho_OptimizeX.rar/file",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5" />
              Baixar Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Senha: <strong>piolhofree</strong></p>
          </div>

          {/* App 2 */}
          <div className="relative bg-white/70 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
            <Cpu className="w-10 h-10 text-green-600 mb-4" /> {/* ícone de RAM/desempenho */}
            <h3 className="text-xl font-bold mb-2">MemorySaver</h3>
            <p className="text-muted-foreground text-sm mb-4 text-center">
              Limpeza de memória RAM, mantendo tudo leve e rápido.
            </p>
            <Button
              size="lg"
              className="flex items-center gap-2 rounded-full px-10 bg-green-600 hover:bg-green-700 text-white transition-colors"
              onClick={() =>
                window.open(
                  "https://www.mediafire.com/file/8oft3bxzt4nhv9e/MemorySaver.rar/file",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5" />
              Baixar Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Senha: <strong>PiolhoMS</strong></p>
          </div>


        </div>

        {/* Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="p-6 bg-green-50 rounded-2xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <Zap className="text-green-600 w-8 h-8" />
            <h4 className="font-semibold text-lg">Performance</h4>
            <p className="text-sm text-muted-foreground">Aumente velocidade e estabilidade do seu PC.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <ShieldCheck className="text-green-600 w-8 h-8" />
            <h4 className="font-semibold text-lg">Segurança</h4>
            <p className="text-sm text-muted-foreground">Proteção total sem enviar dados para a internet.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
            <CheckCircle className="text-green-600 w-8 h-8" />
            <h4 className="font-semibold text-lg">Interface</h4>
            <p className="text-sm text-muted-foreground">Fácil, intuitivo e moderno, sem complicações.</p>
          </div>
        </div>

        {/* Suporte */}
        <div className="mt-12">
          <Button
            variant="outline"
            className="mx-auto flex gap-2 items-center"
            onClick={() => window.open("https://discord.gg/45zyQEe2s3", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            Suporte via Discord
          </Button>
        </div>

      </div>
    </div>
  );
}
