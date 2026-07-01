import React, { useEffect, useRef } from 'react'
import { ArrowUpRight, MessageCircle, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react'

/* ─── Floating particle background ─── */
function Particles() {
  const canvas = useRef(null)
  useEffect(() => {
    const c = canvas.current
    if (!c) return
    const ctx = c.getContext('2d')
    let W = c.width = c.offsetWidth
    let H = c.height = c.offsetHeight
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight }
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      a: Math.random(),
    }))

    let frame
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${p.a * 0.45})`
        ctx.fill()
      })
      // draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(212,175,55,${(1 - dist/100) * 0.1})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvas} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function Hero({ whatsappLink }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-[#0a0e14]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_14%_10%,rgba(212,175,55,.13),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_88%_30%,rgba(30,217,167,.09),transparent_60%)]" />
      <Particles />

      <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

        {/* ── LEFT COPY ── */}
        <div className="hero-enter">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[#1ed9a7]/10 border border-[#1ed9a7]/35 text-[#1ed9a7] text-[13px] font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1ed9a7] animate-pulse" />
            Live signals running right now
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-tight">
            Trade smarter<br />
            with{' '}
            <span className="gradient-text">TradeWithSalman</span>
          </h1>

          <p className="mt-5 text-[17px] text-[#93a0b4] leading-relaxed max-w-[520px]">
            Forex &amp; crypto signals, daily market breakdowns and
            1-on-1 mentorship from a full-time trader — built for
            people who want consistency, not luck.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href={whatsappLink} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-[#1ed9a7] text-[#06241c] font-display font-bold text-[15px]
                shadow-bull hover:-translate-y-1 hover:shadow-[0_18px_44px_-10px_rgba(30,217,167,.7)]
                transition-all duration-300">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href="#youtube"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                border border-white/15 text-white font-display font-bold text-[15px]
                hover:border-[#d4af37] hover:text-[#f1d27a] transition-all duration-300">
              Watch Free Lessons <ArrowUpRight size={16} />
            </a>
          </div>

          {/* stat row */}
          <div className="flex flex-wrap gap-10 mt-12">
            {[
              { num: '6+ Yrs', label: 'Experience' },
              { num: '12K+',   label: 'Students'   },
              { num: '87%',    label: 'Signal Acc.' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-2xl gradient-text">{s.num}</div>
                <div className="text-[11.5px] uppercase tracking-widest text-[#5c6a7e] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PORTRAIT ── */}
        <div className="hero-enter-d flex justify-center relative">

          {/* Float chip top */}
          <div className="float-1 absolute -top-4 right-4 z-20 flex items-center gap-2
            bg-[#131a24]/90 border border-[#d4af37]/20 rounded-2xl px-4 py-2.5
            shadow-xl text-[#f1d27a] font-display font-bold text-sm backdrop-blur-md">
            <TrendingUp size={15} /> XAU/USD +2.4%
          </div>

          {/* Float chip mid */}
          <div className="float-2 hidden xl:flex absolute top-1/3 -right-8 z-20 items-center gap-2
            bg-[#131a24]/90 border border-[#1ed9a7]/20 rounded-2xl px-4 py-2.5
            shadow-xl text-[#1ed9a7] font-semibold text-sm backdrop-blur-md">
            <ShieldCheck size={15} /> Verified Mentor
          </div>

          {/* Portrait frame */}
          <div className="relative w-[320px] sm:w-[380px] aspect-[3/3.6]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-[38%_38%_34%_34%/44%_44%_30%_30%]
              bg-gradient-to-br from-[#d4af37]/25 to-transparent blur-2xl" />
            {/* Card */}
            <div className="relative w-full h-full rounded-[38%_38%_34%_34%/44%_44%_30%_30%]
              overflow-hidden border border-[#d4af37]/20 bg-[#0d1219]
              shadow-[0_40px_80px_-20px_rgba(0,0,0,.7),inset_0_0_60px_rgba(212,175,55,.04)]">
              {/*
                ─────────────────────────────────────────────────
                TRADER PHOTO: Replace /images/trader.jpg below
                with your actual trader photo filename.
                Put the file inside the  public/images/  folder.
                ─────────────────────────────────────────────────
              */}
              <img
                src="/images/trader.jpg"
                alt="Salman — TradeWithSalman"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#1a2230] to-[#0d1219]">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span style="color:#d4af37;font-family:Space Grotesk;font-size:13px;text-align:center;padding:0 20px">
                        Add your photo:<br/>public/images/trader.jpg
                      </span>
                    </div>`
                }}
              />
            </div>

            {/* Bottom info card */}
            <div className="absolute -bottom-5 -left-6 z-20 flex items-center gap-3
              bg-[#0f141c]/95 border border-[#d4af37]/15 rounded-2xl px-4 py-3
              shadow-[0_20px_40px_-12px_rgba(0,0,0,.6)] backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#1ed9a7]/14 flex items-center justify-center text-[#1ed9a7]">
                <Users size={20} />
              </div>
              <div>
                <div className="text-[11px] text-[#5c6a7e]">Trusted by</div>
                <div className="font-display font-bold text-[15px] text-[#1ed9a7]">12,400+ traders</div>
              </div>
            </div>

            {/* Bottom-right live chip */}
            <div className="absolute -bottom-5 right-0 z-20 flex items-center gap-2
              bg-[#0f141c]/95 border border-[#d4af37]/15 rounded-2xl px-4 py-3
              shadow-xl backdrop-blur-md">
              <Zap size={15} className="text-[#f1d27a]" />
              <span className="font-display font-bold text-sm text-[#f1d27a]">Live Signals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-[#d4af37]/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#d4af37]/60" />
        </div>
      </div>
    </section>
  )
}
