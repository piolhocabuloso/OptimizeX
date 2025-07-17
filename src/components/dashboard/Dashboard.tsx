import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  ShieldCheck,
  Zap,
  CheckCircle,
  HelpCircle,
  MessageCircle,
  MonitorSmartphone,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function Dashboard() {
  const { user } = useAuth();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative py-20 md:py-32 overflow-hidden transition-opacity duration-1000 ${
        visible
          ? "animate-fade-in opacity-100 pointer-events-auto"
          : "animate-fade-out opacity-0 pointer-events-none"
      }`}
    >
      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-[#22c55e]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/10 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-2">
              Painel de Instalação
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Baixe nosso aplicativo oficial para gerenciar seu sistema com mais
              segurança, rapidez e praticidade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card de download */}
          <Card className="glass-card border-primary/20 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl">Aplicativo Piolho Optimize</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center flex-grow space-y-6">
              <a href="/downloads/PainelAppInstaller.exe" download>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-full px-8 hover:scale-105 transition-transform"
                >
                  <Download className="w-5 h-5" />
                  Baixar Agora
                </Button>
              </a>
            </CardContent>
            <p className="text-center text-sm text-muted-foreground pb-6">
              Versão 1.0.0 · 41,44 MB
            </p>
          </Card>

          {/* Card de recursos */}
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Recursos do Aplicativo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold">Desempenho Rápido</p>
                  <p className="text-muted-foreground text-sm">
                    Otimização inteligente para garantir velocidade e estabilidade no
                    seu sistema.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold">Seguro & Privado</p>
                  <p className="text-muted-foreground text-sm">
                    Nenhum dado é enviado para a internet. Tudo é feito localmente no
                    seu computador.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold">Interface Simples</p>
                  <p className="text-muted-foreground text-sm">
                    Fácil de usar, com menus claros e sem complicações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MonitorSmartphone className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold">Modo Performance</p>
                  <p className="text-muted-foreground text-sm">
                    Ative o modo turbo para jogos, trabalho pesado ou renderizações.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Novidades da Versão */}
        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Novidades da Versão 1.0.0</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Sistema de login melhorado</li>
              <li>Correção de bugs e melhorias de estabilidade</li>
              <li>Ativação de modo turbo com 1 clique</li>
              <li>Nova interface responsiva</li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Dúvidas Frequentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2 items-start">
              <HelpCircle className="text-primary w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Como instalar?</p>
                <p className="text-sm text-muted-foreground">
                  Clique em “Baixar Agora”, execute o instalador e siga as instruções.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <HelpCircle className="text-primary w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">O aplicativo é gratuito?</p>
                <p className="text-sm text-muted-foreground">
                  Sim! Totalmente gratuito para uso pessoal.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <HelpCircle className="text-primary w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Precisa de internet para funcionar?</p>
                <p className="text-sm text-muted-foreground">
                  Não. Ele funciona totalmente offline após instalado.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indicadores de Uso */}
        <div className="flex justify-center gap-10 mt-6 text-center text-muted-foreground">
          <div>
            <p className="text-4xl font-bold text-[#22c55e]">500+</p>
            <p>Instalações</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#22c55e]">4.8/5</p>
            <p>Avaliação média</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#22c55e]">100%</p>
            <p>Usuários satisfeitos</p>
          </div>
        </div>

        {/* Suporte */}
        <div className="text-center">
          <Button
            variant="outline"
            className="mx-auto flex gap-2 items-center"
            onClick={() => window.open("https://wa.me/5533999411080", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            Suporte via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
