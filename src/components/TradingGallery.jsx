import React from 'react'
import Reveal from './Reveal.jsx'
import { TrendingUp } from 'lucide-react'

/*
  ──────────────────────────────────────────────────────────────
  TRADING CHART GALLERY — uses YOUR local images from
  public/images/  folder. Replace the src values below with
  your real chart screenshots or trading pic filenames.
  ──────────────────────────────────────────────────────────────
*/
const CHARTS = [
  { src:'/images/usd.jfif', title:'XAU/USD — Daily Structure',        tag:'Bullish',  tagColor:'text-[#1ed9a7] bg-[#1ed9a7]/10' },
  { src:'/images/eur.png', title:'EUR/USD — Liquidity Sweep Setup',  tag:'Reversal', tagColor:'text-[#f1d27a] bg-[#d4af37]/10' },
  { src:'/images/btc.png', title:'BTC/USD — Breakout Continuation',  tag:'Bullish',  tagColor:'text-[#1ed9a7] bg-[#1ed9a7]/10' },
  { src:'/images/gbp.png', title:'GBP/JPY — Order Block Rejection',  tag:'Bearish',  tagColor:'text-[#ff5c6c] bg-[#ff5c6c]/10' },
  { src:'/images/nas.png', title:'NAS100 — Weekly Fair Value Gap',   tag:'Long',     tagColor:'text-[#1ed9a7] bg-[#1ed9a7]/10' },
  { src:'/images/xag.png', title:'XAG/USD — Intraday Scalp Setup',  tag:'Short',    tagColor:'text-[#ff5c6c] bg-[#ff5c6c]/10' },
]

/* Placeholder shown when the image is missing */
function ChartPlaceholder({ title, index }) {
  const colors = ['#d4af37','#1ed9a7','#ff5c6c']
  const c = colors[index % 3]
  return (
    <div className="w-full h-full bg-[#0d1219] flex flex-col items-center justify-center gap-3 p-4">
      <TrendingUp size={28} color={c} />
      <span className="text-[11px] text-center text-[#5c6a7e] leading-snug">
        Add chart image:<br /><span style={{ color:c }}>public/images/chart{index+1}.jpg</span>
      </span>
    </div>
  )
}

export default function TradingGallery() {
  return (
    <section id="gallery" className="py-28 bg-[#0f141c] border-t border-[#d4af37]/08">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-14">
            <span className="eyebrow">Inside the charts</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[40px] leading-tight mt-4 mb-4">
              Real setups,{' '}
              <span className="gradient-text">real structure</span>
            </h2>
            <p className="text-[16px] text-[#93a0b4]">
              A look at the exact kind of price action and setups broken down
              daily inside the community and YouTube channel.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHARTS.map((ch, i) => (
            <Reveal key={ch.title} direction="up" delay={i * 80}>
              <div className="glow-card rounded-2xl overflow-hidden group cursor-pointer">
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-[#0d1219]">
                  <img
                    src={ch.src}
                    alt={ch.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => {
                      e.target.style.display = 'none'
                      const box = e.target.parentNode
                      box.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.5">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                          </svg>
                          <span style="color:#5c6a7e;font-size:11px;text-align:center">
                            Add: public/images/chart${i+1}.jpg
                          </span>
                        </div>`
                    }}
                  />
                </div>
                {/* Footer */}
                <div className="p-4 flex items-center justify-between gap-3">
                  <h4 className="font-display font-semibold text-[13.5px] leading-snug">{ch.title}</h4>
                  <span className={`flex-shrink-0 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${ch.tagColor}`}>
                    {ch.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
