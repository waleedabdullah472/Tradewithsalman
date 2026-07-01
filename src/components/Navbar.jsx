import React, { useEffect, useState } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Services',  href: '#services'  },
  { label: 'YouTube',   href: '#youtube'   },
  { label: 'Gallery',   href: '#gallery'   },
  { label: 'Results',   href: '#results'   },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar({ whatsappLink }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${scrolled
          ? 'py-3 bg-[#0a0e14]/90 backdrop-blur-xl border-b border-[#d4af37]/10 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-gold flex-shrink-0">
            {/* Replace /images/logo.png with your real logo file */}
            <img
              src="/images/logo.png"
              alt="TradeWithSalman Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.innerHTML =
                  '<div class="w-full h-full bg-gradient-to-br from-[#f1d27a] to-[#d4af37] flex items-center justify-center text-[#14110a] font-bold text-lg">S</div>'
              }}
            />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Trade<span className="gradient-text">WithSalman</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-[13.5px] text-[#93a0b4] hover:text-[#f1d27a] transition-colors duration-200 font-body">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href={whatsappLink} target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-gradient-to-r from-[#f1d27a] to-[#d4af37] text-[#14110a]
              font-display font-bold text-sm shadow-gold hover:-translate-y-0.5
              transition-all duration-200">
            Join Signals
          </a>
          <button onClick={() => setOpen(true)} className="lg:hidden text-white p-1">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-[#080b10]/98 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white">
            <X size={30} />
          </button>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-white hover:text-[#f1d27a] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
            className="mt-4 flex items-center gap-2 px-8 py-3 rounded-full
              bg-[#1ed9a7] text-[#06241c] font-display font-bold text-base shadow-bull">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
