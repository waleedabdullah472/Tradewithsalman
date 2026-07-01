import React from 'react'
import Reveal from './Reveal.jsx'
import { Signal, GraduationCap, LineChart, Users2, ShieldAlert, Headphones } from 'lucide-react'

const SERVICES = [
  { icon:<Signal size={22}/>,       title:'Daily Trade Signals',       desc:'Entry, SL and TP levels for forex, gold and crypto — straight to WhatsApp every morning.' },
  { icon:<GraduationCap size={22}/>,title:'1-on-1 Mentorship',         desc:'Personal chart reviews and a custom roadmap from beginner to consistently profitable.' },
  { icon:<LineChart size={22}/>,    title:'Live Market Analysis',       desc:'Daily bias videos covering key levels, news impact and the session plan before open.' },
  { icon:<Users2 size={22}/>,       title:'Private Community',          desc:'A focused WhatsApp group of serious traders sharing setups, journals and accountability.' },
  { icon:<ShieldAlert size={22}/>,  title:'Risk Management Training',   desc:'Position sizing and capital protection rules so one bad trade never wipes your account.' },
  { icon:<Headphones size={22}/>,   title:'Direct WhatsApp Support',    desc:'Questions about a setup? Message Salman directly and get a real answer fast.' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0f141c]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-14">
            <span className="eyebrow">What you get</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[40px] leading-tight mt-4 mb-4">
              Everything you need to<br />
              <span className="gradient-text">trade with a plan</span>
            </h2>
            <p className="text-[16px] text-[#93a0b4]">
              No noise, no recycled YouTube tips — a structured system and direct access
              to a mentor who actually trades.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="glow-card rounded-2xl p-7 h-full cursor-default group">
                <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center
                  bg-gradient-to-br from-[#d4af37]/18 to-[#d4af37]/05
                  text-[#d4af37] border border-[#d4af37]/10
                  group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-[17px] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#93a0b4] leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
