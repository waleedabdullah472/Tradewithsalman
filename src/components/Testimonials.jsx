import React from 'react'
import Reveal from './Reveal.jsx'

const TESTI = [
  {
    name:'Ahmed Raza', role:'Forex Trader, 8 months', initials:'AR',
    quote:"Salman's risk management lessons alone changed how I trade. I stopped revenge trading within two weeks and my account has grown every month since.",
  },
  {
    name:'Hina Malik', role:'Crypto Trader, 1 year', initials:'HM',
    quote:"The daily bias videos are short, clear, and actually match what happens during the session. I've tried three other signal groups — this is the only one I kept.",
  },
  {
    name:'Bilal Hussain', role:'Gold Trader, 5 months', initials:'BH',
    quote:"Joined for the signals, stayed for the mentorship. Best decision for my trading this year. My win rate went from 40% to 68% in just three months.",
  },
  {
    name:'Zara Khan', role:'Beginner Trader, 3 months', initials:'ZK',
    quote:"I had zero knowledge when I joined. The structured approach makes it genuinely easy to understand. I made my first profitable week in month two.",
  },
  {
    name:'Omar Farooq', role:'Prop Firm Trader, 1 year', initials:'OF',
    quote:"Salman's setups helped me pass my prop firm challenge on the second attempt. The risk rules he teaches are exactly what prop firms want to see.",
  },
  {
    name:'Sara Ahmed', role:'Part-time Trader, 6 months', initials:'SA',
    quote:"I trade around my full-time job. The morning analysis voice note saves me so much time — I know the plan before I even open the charts.",
  },
]

function Avatar({ initials }) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
      bg-gradient-to-br from-[#f1d27a] to-[#d4af37] font-display font-bold text-sm text-[#14110a]">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#0f141c]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-14">
            <span className="eyebrow">Trader feedback</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[40px] leading-tight mt-4 mb-4">
              What the community{' '}
              <span className="gradient-text">is saying</span>
            </h2>
            <p className="text-[16px] text-[#93a0b4]">
              Real members from the TradeWithSalman WhatsApp community and mentorship program.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTI.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 80}>
              <div className="glow-card rounded-2xl p-6 h-full flex flex-col">
                <div className="text-[#d4af37] tracking-widest text-sm mb-3">★★★★★</div>
                <p className="text-[14px] text-[#93a0b4] leading-relaxed flex-1 mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#d4af37]/08">
                  <Avatar initials={t.initials} />
                  <div>
                    <div className="font-display font-bold text-[14px]">{t.name}</div>
                    <div className="text-[12px] text-[#5c6a7e]">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
