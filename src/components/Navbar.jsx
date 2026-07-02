import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'YouTube',  href: '#youtube'  },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Results',  href: '#results'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar({ whatsappLink }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll on mobile when menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${scrolled
          ? 'py-3 bg-[#0a0e14]/90 backdrop-blur-xl border-b border-[#d4af37]/10 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group text-white">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-gold flex-shrink-0">
            <img
              src="/images/logo.jpg"
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
          <button 
            onClick={() => setOpen(true)} 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* --- PROFESSIONAL MOBILE SIDEBAR SYSTEM --- */}
      {/* Dimmed backdrop blur overlay */}
      <div 
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      >
        {/* Sidebar Panel Drawer */}
        <div 
          className={`absolute top-0 right-0 h-dvh w-[290px] max-w-[85vw] bg-[#0a0e14] border-l border-[#d4af37]/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out will-change-transform
            ${open ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Keeps inner clicks inside the menu panel
        >
          {/* Top Panel Section */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
              <span className="font-display font-bold text-base tracking-tight text-white">
                Navigation
              </span>
              <button 
                onClick={() => setOpen(false)} 
                className="text-[#93a0b4] hover:text-white p-1.5 hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(l => (
                <a 
                  key={l.href} 
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[15px] font-medium text-[#93a0b4] hover:text-[#f1d27a] hover:bg-white/[0.02] px-3 py-2.5 rounded-xl transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Panel Section (CTA Wrapper) */}
          <div className="pt-4 border-t border-white/5">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                bg-[#1ed9a7] text-[#06241c] font-display font-bold text-sm shadow-bull hover:bg-[#1bc496] active:scale-[0.98] transition-all duration-200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}