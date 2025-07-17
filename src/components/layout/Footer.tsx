import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-[#22c55e]" />
          <span className="text-sm font-medium">Piolho Optimize</span>
        </div>

        <p className="text-xs text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Piolho Optimize. Todos os direitos reservados.
        </p>

        <nav className="flex items-center gap-4">
          <Link 
            to="/privacy-policy" 
            className="text-xs text-muted-foreground no-underline hover:no-underline"
          >
            Política de Privacidade
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-xs text-muted-foreground no-underline hover:no-underline"
          >
            Termos de Serviço
          </Link>
        </nav>
      </div>
    </footer>
  );
}
