import React from 'react'
import Reveal from './Reveal.jsx'
import { MessageCircle, Mail, Clock, MapPin, ArrowUpRight } from 'lucide-react'

const INFO = [
  { icon:<MessageCircle size={20}/>, label:'WhatsApp',     value:'+92 300 1234567' },
  { icon:<Mail size={20}/>,          label:'Email',        value:'salman@tradewithsalman.com' },
  { icon:<Clock size={20}/>,         label:'Response time',value:'Usually within an hour' },
  { icon:<MapPin size={20}/>,        label:'Based in',     value:'Islamabad, Pakistan' },
]

export default function CTAContact({ whatsappLink }) {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl
            bg-gradient-to-br from-[#161c14] to-[#0e1219]
            border border-[#d4af37]/12 p-10 sm:p-16
            grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-64 h-64
              rounded-full bg-[#1ed9a7]/12 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48
              rounded-full bg-[#d4af37]/08 blur-3xl pointer-events-none" />

            {/* Left */}
            <div className="relative">
              <span className="eyebrow">Get started today</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-[38px] leading-tight mt-4 mb-4">
                Ready to trade with<br />
                <span className="gradient-text">a plan, not guesswork?</span>
              </h2>
              <p className="text-[16px] text-[#93a0b4] leading-relaxed mb-8 max-w-md">
                Message Salman directly on WhatsApp — get your questions answered
                and join the free signal channel in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappLink} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                    bg-[#1ed9a7] text-[#06241c] font-display font-bold text-[15px]
                    shadow-bull hover:-translate-y-1 transition-all duration-300">
                  <MessageCircle size={18} /> Message on WhatsApp
                </a>
                <a href="#youtube"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                    border border-white/14 text-white font-display font-bold text-[15px]
                    hover:border-[#d4af37] hover:text-[#f1d27a] transition-all duration-300">
                  Watch on YouTube <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Right info cards */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map(it => (
                <div key={it.label}
                  className="flex items-center gap-3 rounded-2xl
                    bg-white/[.03] border border-[#d4af37]/10 p-4">
                  <span className="text-[#d4af37]">{it.icon}</span>
                  <div>
                    <div className="text-[11px] text-[#5c6a7e]">{it.label}</div>
                    <div className="font-display font-semibold text-[14px]">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
