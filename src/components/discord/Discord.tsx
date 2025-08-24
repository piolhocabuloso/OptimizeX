import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Rocket, ShieldCheck, Zap, CheckCircle } from "lucide-react";

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
      className={`relative py-16 overflow-hidden transition-opacity duration-1000 ${visible ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0 pointer-events-none"
        }`}
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 z-0" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Bem-vindo ao <span className="text-green-600">Servidor Oficial</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg">
              Um lugar para interagir, aprender, se divertir e participar de eventos exclusivos.
            </p>
            <Button
              size="lg"
              className="mt-6 flex items-center gap-2 rounded-full px-8 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open("https://discord.gg/45zyQEe2s3", "_blank")}
            >
              <Rocket className="w-5 h-5" /> Entrar Agora
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Users className="w-40 h-40 text-green-500 animate-bounce-slow" />
          </div>
        </header>

        {/* Seção sobre */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
            <MessageCircle className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Chats & Voz</h2>
            <p className="text-gray-600">
              Diversos canais de texto e voz para todos os gostos. Converse, jogue e troque ideias em tempo real.
            </p>
          </div>
          <div className="bg-green-100 rounded-2xl shadow-inner p-8 flex flex-col items-start hover:scale-105 transition-transform">
            <ShieldCheck className="w-12 h-12 text-green-700 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Ambiente Seguro</h2>
            <p className="text-gray-700">
              Regras claras e equipe de moderação ativa para manter o espaço saudável e divertido.
            </p>
          </div>
        </section>


        {/* Recursos */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-green-50 rounded-2xl hover:-translate-y-2 transition-transform shadow-md">
            <Zap className="text-green-600 w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg">Eventos</h4>
            <p className="text-sm text-gray-600">Sorteios, campeonatos e interações semanais.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl hover:scale-105 transition-transform shadow-md md:translate-y-10">
            <CheckCircle className="text-green-600 w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg">Networking</h4>
            <p className="text-sm text-gray-600">Conheça pessoas novas, faça amizades e parcerias.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl hover:-translate-y-2 transition-transform shadow-md">
            <Users className="text-green-600 w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg">Comunidade</h4>
            <p className="text-sm text-gray-600">Uma galera ativa todos os dias para conversar.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
