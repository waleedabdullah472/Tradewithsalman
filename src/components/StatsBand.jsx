import React from 'react'
import CountUp from './CountUp.jsx'
import Reveal from './Reveal.jsx'

const STATS = [
  { val:12400, suffix:'+',    decs:0, label:'Active Followers'    },
  { val:6,     suffix:' Yrs', decs:0, label:'Trading Experience'  },
  { val:87,    suffix:'%',    decs:0, label:'Signal Accuracy*'    },
  { val:4.9,   suffix:'/5',   decs:1, label:'Community Rating'    },
]

export default function StatsBand() {
  return (
    <section id="results"
      className="py-20 border-y border-[#d4af37]/10
        bg-gradient-to-br from-[#0e1318] to-[#0a0e14]">
      <div className="max-w-[1200px] mx-auto px-6
        grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div>
              <div className="count-badge text-4xl sm:text-5xl">
                <CountUp value={s.val} suffix={s.suffix} decimals={s.decs} />
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-widest text-[#5c6a7e]">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
