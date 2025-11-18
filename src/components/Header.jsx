import { useMemo } from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
      <span className="text-white font-semibold tracking-tight">Backbone</span>
    </div>
  )
}

export default function Header() {
  const glow = useMemo(
    () => ({ boxShadow: '0 0 24px rgba(99, 102, 241, 0.35), inset 0 0 0 1px rgba(255,255,255,0.08)' }),
    []
  )

  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Logo />
        <button
          className="backdrop-blur-xl text-white/90 hover:text-white px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors shadow-[0_0_0_0_rgba(0,0,0,0)]"
          style={glow}
          onClick={() => {
            const el = document.getElementById('waitlist');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Join the waitlist
        </button>
      </div>
    </header>
  )
}
