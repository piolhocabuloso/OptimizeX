import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Settings, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden min-h-screen">
      {/* Decorações de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-[#22c55e]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/10 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 max-w-3xl mx-auto px-4 text-center space-y-10">
        <div className="inline-flex items-center justify-center rounded-full bg-[#22c55e]/10 px-3 py-1 text-sm font-medium text-[#22c55e] mb-2 animate-fade-in">
          <span>Termos de Serviço</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Termos e condições para uso do aplicativo
        </h1>

        <div className="text-left text-lg text-muted-foreground space-y-6 max-w-2xl mx-auto animate-fade-in">
          <p>Ao usar nosso aplicativo, você concorda com os seguintes termos e condições.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">1. Uso do Aplicativo</h2>
          <p>Você concorda em usar o aplicativo apenas para fins legais e de acordo com estas regras.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">2. Licença</h2>
          <p>Concedemos uma licença limitada para uso pessoal do aplicativo, não comercial.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">3. Responsabilidades</h2>
          <p>Não nos responsabilizamos por danos decorrentes do uso do aplicativo.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">4. Alterações nos Termos</h2>
          <p>Podemos modificar estes termos a qualquer momento, notificando você das mudanças.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">5. Contato</h2>
          <p>
            Para dúvidas ou reclamações, entre em contato conosco pelo email{' '}
            <a href="mailto:edgardsouza176@gmail.com" className="text-[#22c55e] underline">
              edgardsouza176@gmail.com
            </a>.
          </p>

          <p className="text-sm text-muted-foreground mt-6 text-right">
            Última atualização: 15 de julho de 2025
          </p>
        </div>

        <div className="flex justify-center mt-10 animate-fade-in">
          <Link to="/">
            <Button size="lg" className="gap-2 rounded-full">
              <ArrowLeft className="h-5 w-5" />
              Voltar para Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
