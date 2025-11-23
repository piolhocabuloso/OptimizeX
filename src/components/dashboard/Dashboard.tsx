import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Rocket, ShieldCheck, Zap, CheckCircle, MessageCircle, Cpu, Crown, Star } from "lucide-react";

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

      <div className="container relative z-10 flex flex-col items-center text-center space-y-12 max-w-6xl mx-auto">
        {/* Header */}
        <div className="inline-flex items-center justify-center rounded-full bg-green-400/10 px-3 py-1 text-sm font-medium text-green-600 mb-2">
          Aplicativos de Otimização
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Deixe seu PC <span className="text-green-600">mais rápido</span> e eficiente
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Baixe nossos aplicativos gratuitos ou adquira a versão premium para recursos avançados.
        </p>

        {/* Apps */}
        <div className="w-full space-y-8 mt-12">
          {/* App PRINCIPAL - Destaque */}
          <div className="relative bg-white/80 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform border-2 border-green-400">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            <Rocket className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Piolho OptimizeX</h3>
            <p className="text-muted-foreground mb-4 text-center max-w-md">
              Otimização completa do sistema, performance turbo e interface intuitiva.
              <span className="block text-green-600 font-semibold mt-1">A solução completa para seu PC!</span>
            </p>
            <Button
              size="lg"
              className="flex items-center gap-2 rounded-full px-12 bg-green-600 hover:bg-green-700 text-white transition-colors text-base font-semibold"
              onClick={() =>
                window.open(
                  "https://download943.mediafire.com/qxt8nnaji2wgooohiToSqlq_s108nna3tT12ySZkPbXewilJRcM6JzT2cti5uEWnKDP5kpgrQ9O0dyDQw0hRCX9ubTXjgSbf3qdxbg5DFez4E0H0-LJUd6pWBGn7Tmm0y6RGsqYJdK3wSRwU6N0VtAGjqjVEfMCorYSihySHHi0Ja2k/gp9921tm2bcsp3r/Piolho+OptimizeX.rar",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5" />
              Baixar Gratuito
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Senha: <strong>piolhofree</strong></p>
          </div>

          {/* Apps Secundários - Lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* App 2 - Gratuito */}
            <div className="relative bg-white/80 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-green-200">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                GRATUITO
              </div>
              <Cpu className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">MemorySaver</h3>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                Limpeza de memória RAM, mantendo tudo leve e rápido.
              </p>
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full px-8 bg-green-600 hover:bg-green-700 text-white transition-colors w-full"
                onClick={() =>
                  window.open(
                    "https://download1654.mediafire.com/8oc0li7r9j4ghw1qWAr-GObPXPxesGIn_AKviI_U7Dt0TcTRgZPHkY5SxrDEi2fX6tlcKB3nTyXXpXiW1uixwM1jw936NzJUkixaeGkltS_yNe02Ti32z66Xo5771OAyjE-Tjw7VyXME5oXl3RifCo1Cw2GSiyrOHkET0Cz6EF-_fIg/8oft3bxzt4nhv9e/MemorySaver.rar",
                    "_blank"
                  )
                }
              >
                <Download className="w-4 h-4" />
                Baixar Gratuito
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Senha: <strong>PiolhoMS</strong></p>
            </div>

            {/* App 3 - Gratuito */}
            <div className="relative bg-white/80 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-green-200">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                GRATUITO
              </div>
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">SystemCleaner</h3>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                Limpeza profunda de arquivos temporários e registro do sistema.
              </p>
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full px-8 bg-green-600 hover:bg-green-700 text-white transition-colors w-full"
                onClick={() =>
                  window.open(
                    "#",
                    "_blank"
                  )
                }
              >
                <Download className="w-4 h-4" />
                Em Breve
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Senha: <strong>PiolhoSC</strong></p>
            </div>

            {/* App 4 - PAGO */}
            <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform border-2 border-yellow-300">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Crown className="w-3 h-3" />
                PREMIUM
              </div>


              <Star className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Maxify</h3>
              <p className="text-white/90 text-sm mb-4 text-center">
                Versão completa com recursos avançados, suporte prioritário e atualizações exclusivas.
              </p>
              <div className="text-white text-lg font-bold mb-4">
                R$ 19,90
              </div>
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full px-8 bg-white text-orange-600 hover:bg-gray-100 transition-colors w-full font-bold"
                onClick={() =>
                  window.open(
                    "https://discord.gg/45zyQEe2s3",
                    "_blank"
                  )
                }
              >
                <Crown className="w-4 h-4" />
                Comprar Agora
              </Button>
              <p className="text-white/80 text-xs mt-2">Pagamento único • Vitalício</p>
            </div>
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

        {/* Comparação Free vs Pro */}
        <div className="mt-12 bg-white/70 rounded-2xl p-8 shadow-lg w-full">
          <h3 className="text-2xl font-bold mb-6 text-center">Compare as Versões</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-green-600 mb-4">Versão Gratuita</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Otimização básica do sistema
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Limpeza de memória RAM
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Limpeza de arquivos temporários
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Suporte via Discord
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-orange-600 mb-4">Versão PRO</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Todos os recursos gratuitos
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Otimização avançada
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Atualizações exclusivas
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Suporte prioritário 24/7
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  Recursos premium
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Suporte */}
        <div className="mt-8">
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