import React, { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Activity,
  HardDrive,
  ShieldCheck,
  BatteryCharging,
  Fan,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-[#22c55e]" />,
      title: "Monitoramento de CPU",
      description:
        "Acompanhe o uso do processador em tempo real e identifique gargalos de desempenho.",
    },
    {
      icon: <Activity className="h-10 w-10 text-[#22c55e]" />,
      title: "Consumo de Memória",
      description:
        "Visualize o uso da RAM e descubra quais processos estão consumindo mais recursos.",
    },
    {
      icon: <HardDrive className="h-10 w-10 text-[#22c55e]" />,
      title: "Status do Disco",
      description:
        "Verifique o espaço disponível, saúde do SSD/HD e alertas de desempenho.",
    },
    {
      icon: <BatteryCharging className="h-10 w-10 text-[#22c55e]" />,
      title: "Gerenciamento de Energia",
      description:
        "Otimize o consumo de energia e estenda a vida útil da bateria com perfis inteligentes.",
    },
    {
      icon: <Fan className="h-10 w-10 text-[#22c55e]" />,
      title: "Otimização Inteligente",
      description:
        "Ajuste automático do sistema para melhorar o desempenho e eficiência da sua máquina.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#22c55e]" />,
      title: "Segurança",
      description:
        "Detecta atividades suspeitas e protege contra processos que afetam o desempenho.",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animationClass = visible ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0";

  return (
    <div ref={ref} className="py-20 bg-muted/30">
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-opacity duration-700 ease-out ${animationClass}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ferramentas de Otimização
          </h2>
          <p className="text-muted-foreground">
            Tudo o que você precisa para manter seu PC rápido, seguro e eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-6 border shadow-sm card-hover transition-opacity duration-700 ease-out ${animationClass}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 p-2 w-fit rounded-full bg-[#22c55e]/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
