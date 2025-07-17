import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Rocket,
  FileSpreadsheet,
  LogOut
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90 no-underline hover:no-underline"
        >
          <Rocket className="h-6 w-6 text-[#22c55e]" />
          <span className="text-xl font-bold text">Piolho Optimize</span>
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

          {isAuthenticated && (
            <Link
              to="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#22c55e] no-underline hover:no-underline",
                location.pathname === "/dashboard" ? "text-[#22c55e]" : "text-muted-foreground"
              )}
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-[#22c55e]/20">
                    <AvatarImage src="" alt={user?.name || 'Usuário'} />
                    <AvatarFallback className="bg-[#22c55e]/10 text-[#22c55e]">
                      {user?.name.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 animate-fade-in">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/dashboard"
                    className="cursor-pointer no-underline hover:no-underline"
                  >
                    <FileSpreadsheet className="mr-2 h-4 w-4 text-[#22c55e]" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              className="no-underline hover:no-underline"
            >
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Entrar</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
