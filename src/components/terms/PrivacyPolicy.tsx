import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Settings, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <span>Política de Privacidade</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Sua privacidade em primeiro lugar
        </h1>

        <div className="text-left text-lg text-muted-foreground space-y-6 max-w-2xl mx-auto animate-fade-in">
          <p>
            Sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos seus dados.
          </p>
          <h2 className="text-2xl font-semibold text-[#22c55e]">1. Coleta de Dados</h2>
          <p>Coletamos informações pessoais que você fornece ao usar nosso aplicativo, como nome, email e dados de uso.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">2. Uso dos Dados</h2>
          <p>Os dados coletados são usados para melhorar o aplicativo, oferecer suporte e garantir segurança.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">3. Proteção dos Dados</h2>
          <p>Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">4. Compartilhamento de Dados</h2>
          <p>Não compartilhamos seus dados com terceiros, exceto quando exigido por lei.</p>

          <h2 className="text-2xl font-semibold text-[#22c55e]">5. Seus Direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento.</p>

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
