import React, { useMemo } from "react"

export function PageBackground({ density = 22 }: { density?: number }) {
  const particles = useMemo(() => Array.from({ length: density }), [density])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#030504]">
      <div className="absolute left-1/2 top-0 h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -left-40 top-[25%] h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -right-40 top-[58%] h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="absolute left-1/2 bottom-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-emerald-300"
          style={{
            left: `${8 + ((index * 17) % 86)}%`,
            top: `${8 + ((index * 23) % 78)}%`,
            animation: `floatSoft ${4 + (index % 5)}s ease-in-out infinite`,
            animationDelay: `${index * 0.35}s`,
          }}
        />
      ))}
    </div>
  )
}
