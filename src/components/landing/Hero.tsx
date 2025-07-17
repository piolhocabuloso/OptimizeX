import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function Hero() {
  const { isAuthenticated } = useAuth();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
          ? "animate-fade-in opacity-100"
          : "animate-fade-out opacity-0 pointer-events-none"
      }`}
    >
      {/* Decorações de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-[#22c55e]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/10 rounded-full blur-2xl" />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full bg-[#22c55e]/10 px-3 py-1 text-sm font-medium text-[#22c55e] mb-2">
            <span>Otimização de Sistema</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Deixe sua máquina <span className="text-[#22c55e]">mais rápido</span> e eficiente
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Otimize seu computador eliminando arquivos desnecessários, liberando memória e otimizando o uso do disco para garantir um sistema mais rápido, leve, estável e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to={isAuthenticated ? "/dashboard" : "/login"}>
              <Button size="lg" className="gap-2 rounded-full">
                iniciar otimização
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="pt-8 w-full max-w-2x1">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#22c55e]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-panel p-6 rounded-xl max-w-xs">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="h-8 w-8 text-[#22c55e] mr-2" />
                    <h3 className="text-xl font-bold">OptimizeX</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Controle total do desempenho da sua máquina
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-12 bg-[#22c55e]/20 rounded-md animate-pulse" />
                    <div className="h-12 bg-[#22c55e]/30 rounded-md animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="h-12 bg-[#22c55e]/40 rounded-md animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <div className="h-12 bg-[#22c55e]/20 rounded-md animate-pulse" style={{ animationDelay: "0.6s" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
