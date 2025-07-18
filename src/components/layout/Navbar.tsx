import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Rocket
} from 'lucide-react';

import { cn } from '@/lib/utils';

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90 no-underline hover:no-underline"
        >
          <Rocket className="h-6 w-6 text-[#22c55e]" />
          <span className="text-xl font-bold">Piolho Optimize</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#22c55e] no-underline hover:no-underline",
              location.pathname === "/" ? "text-[#22c55e]" : "text-muted-foreground"
            )}
          >
            Início
          </Link>

          <Link
            to="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#22c55e] no-underline hover:no-underline",
              location.pathname === "/dashboard" ? "text-[#22c55e]" : "text-muted-foreground"
            )}
          >
            Download
          </Link>
        </nav>

      </div>
    </header>
  );
}
