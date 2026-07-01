import React from 'react'
import { TrendingUp, Instagram, Youtube, MessageCircle, Send, Twitter } from 'lucide-react'

export default function Footer({ whatsappLink, youtubeLink }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#d4af37]/10 pt-14 pb-8 bg-[#0a0e14]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#d4af37]/25 flex-shrink-0">
                <img
                  src="/images/save.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display='none'
                    e.target.parentNode.innerHTML='<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f1d27a] to-[#d4af37] text-[#14110a] font-bold text-sm">S</div>'
                  }}
                />
              </div>
              <span className="font-display font-bold text-base">
                Trade<span className="gradient-text">WithSalman</span>
              </span>
            </a>
            <p className="text-[14px] text-[#93a0b4] leading-relaxed mb-5 max-w-[280px]">
              Forex, gold &amp; crypto signals, daily analysis and 1-on-1 mentorship
              for traders who want a real, repeatable edge.
            </p>
            <div className="flex gap-2.5">
              {[
                { href:whatsappLink, icon:<MessageCircle size={16}/>, label:'WhatsApp' },
                { href:youtubeLink,  icon:<Youtube size={16}/>,       label:'YouTube'  },
                { href:'#',          icon:<Instagram size={16}/>,     label:'Instagram'},
                { href:'#',          icon:<Twitter size={16}/>,       label:'Twitter'  },
                { href:'#',          icon:<Send size={16}/>,          label:'Telegram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-[#d4af37]/12 bg-white/[.03]
                    flex items-center justify-center text-[#5c6a7e]
                    hover:text-[#f1d27a] hover:border-[#d4af37]/40 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-[11.5px] uppercase tracking-widest text-[#5c6a7e] font-bold mb-4">Navigate</h5>
            <ul className="space-y-3">
              {['#about','#services','#youtube','#gallery','#results','#testimonials'].map(href => (
                <li key={href}>
                  <a href={href}
                    className="text-[14.5px] text-[#93a0b4] hover:text-[#f1d27a] transition-colors duration-200">
                    {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-[11.5px] uppercase tracking-widest text-[#5c6a7e] font-bold mb-4">Resources</h5>
            <ul className="space-y-3">
              {[
                ['Free Signals',    whatsappLink, true ],
                ['YouTube Channel', youtubeLink,  true ],
                ['Chart Setups',    '#gallery',   false],
                ['Daily Analysis',  '#youtube',   false],
                ['1-on-1 Mentorship','#contact',  false],
              ].map(([label, href, external]) => (
                <li key={label}>
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                    className="text-[14.5px] text-[#93a0b4] hover:text-[#f1d27a] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11.5px] uppercase tracking-widest text-[#5c6a7e] font-bold mb-4">Contact</h5>
            <ul className="space-y-3">
              {[
                ['WhatsApp',         whatsappLink,                         true ],
                ['Email Us',         'mailto:salman@tradewithsalman.com',  false],
                ['Islamabad, PK',    '#',                                  false],
              ].map(([label, href, external]) => (
                <li key={label}>
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                    className="text-[14.5px] text-[#93a0b4] hover:text-[#f1d27a] transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent mb-7" />

        <div className="flex flex-col sm:flex-row justify-between gap-3 text-[12.5px] text-[#5c6a7e]">
          <span>© {year} TradeWithSalman. All rights reserved.</span>
          <span>Built with React + Tailwind CSS.</span>
        </div>

        <p className="mt-5 text-[11.5px] text-[#3e4a58] leading-relaxed border-t border-[#d4af37]/06 pt-5">
          Risk Disclaimer: Trading forex, gold and cryptocurrency involves substantial risk and is not suitable
          for every investor. Past performance and signal accuracy figures are illustrative and do not guarantee
          future results. Always trade with capital you can afford to lose and conduct your own research.
        </p>
      </div>
    </footer>
  )
}
