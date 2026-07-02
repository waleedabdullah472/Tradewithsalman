import React from 'react'
import Reveal from './Reveal.jsx'
import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  { n:'01', title:'Real account, real results',     body:'Every signal is taken from a live funded account — no demo screenshots, no cherry-picked wins.' },
  { n:'02', title:'Risk-first methodology',         body:'Position sizing, stop-loss and risk-to-reward are taught before a single entry is shared.' },
  { n:'03', title:'Daily market breakdowns',        body:'A short video or voice note every morning covering bias, key levels and the session plan.' },
]

const TRAITS = ['6+ years live trading','Funded by prop firms','Transparent track record','No recycled tips']

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_50%,rgba(212,175,55,.07),transparent)]" />
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Trader portrait card ── */}
        <Reveal direction="left">
          <div className="relative">
            {/* Big portrait */}
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/15
              shadow-[0_40px_80px_-20px_rgba(0,0,0,.65)] aspect-[3/4] max-w-[420px] mx-auto">
              {/*
                ─────────────────────────────────────────────
                ABOUT SECTION TRADER PHOTO
                Replace /images/trader-about.jpg with your pic
                (can reuse trader.jpg or use a different shot)
                ─────────────────────────────────────────────
              */}
              <img
                src="/images/trader-about.jpg"
                alt="Salman — Trader &amp; Mentor"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.target.onerror = null
                  e.target.src = '/images/salman.jpeg'
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2
                bg-gradient-to-t from-[#0a0e14] to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display font-bold text-xl">Salman</h3>
                <p className="text-[13px] text-[#93a0b4]">Full-time Forex &amp; Crypto Trader</p>
              </div>
            </div>

            {/* Traits chips */}
            <div className="absolute -right-4 top-8 flex flex-col gap-2">
              {TRAITS.map(t => (
                <div key={t}
                  className="flex items-center gap-2 bg-[#0f141c]/95 border border-[#d4af37]/15
                    rounded-xl px-3 py-2 text-xs font-semibold text-[#f1d27a] shadow-lg backdrop-blur-sm whitespace-nowrap">
                  <CheckCircle2 size={12} className="text-[#1ed9a7]" /> {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Copy ── */}
        <div>
          <Reveal direction="right">
            <span className="eyebrow">About TradeWithSalman</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-[42px] leading-tight mt-4 mb-5">
              Discipline beats<br />
              <span className="gradient-text">prediction — every time</span>
            </h2>
            <p className="text-[16.5px] text-[#93a0b4] leading-relaxed mb-8">
              I'm Salman, a full-time forex &amp; crypto trader. After years of grinding charts
              and blowing accounts the wrong way, I built a simple, rules-based system — and
              now I share it with traders who are done guessing.
            </p>
          </Reveal>

          <div className="space-y-5">
            {POINTS.map((p, i) => (
              <Reveal key={p.n} direction="right" delay={i * 110}>
                <div className="flex gap-4 glow-card rounded-2xl p-5">
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl
                    bg-[#d4af37]/10 border border-[#d4af37]/15
                    flex items-center justify-center
                    font-display font-bold text-[#d4af37] text-sm">
                    {p.n}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base mb-1">{p.title}</h4>
                    <p className="text-[14px] text-[#93a0b4] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
