import React from 'react'
import Reveal from './Reveal.jsx'
import { Youtube, PlayCircle, Bell, Eye, Clock } from 'lucide-react'

/*
  ──────────────────────────────────────────────────────────────
  YOUTUBE SECTION — thumbnail images come from your local files.
  Put thumbnail screenshots inside public/images/  and update
  the src paths below, OR leave as-is and the styled placeholder
  will show automatically.
  ──────────────────────────────────────────────────────────────
*/
const VIDEOS = [
  {
    src:     '/images/yt-thumb1.jpg',
    title:   'How I Read Gold (XAU/USD) Like a Pro — Full Breakdown',
    views:   '184K views',
    length:  '18:24',
    border:  'hover:border-red-500/40',
  },
  {
    src:     '/images/yt-thumb2.jpg',
    title:   'My Exact Risk Management Rules — Never Blow An Account Again',
    views:   '96K views',
    length:  '12:07',
    border:  'hover:border-red-500/40',
  },
  {
    src:     '/images/yt-thumb3.jpg',
    title:   'Live Trade Recap: 3 Setups From This Week Explained',
    views:   '61K views',
    length:  '21:40',
    border:  'hover:border-red-500/40',
  },
]

export default function YouTubeSection({ youtubeLink }) {
  return (
    <section id="youtube" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header row */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="eyebrow">Free education</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-[40px] leading-tight mt-4 mb-3">
                Learn for free on the{' '}
                <span className="text-[#ff5050]">YouTube</span> channel
              </h2>
              <p className="text-[16px] text-[#93a0b4]">
                Weekly breakdowns, live trade recaps and full strategy lessons — all free.
              </p>
            </div>
            <a href={youtubeLink} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full flex-shrink-0
                bg-gradient-to-r from-[#ff5050] to-[#e62e2e] text-white
                font-display font-bold text-[14px] shadow-yt
                hover:-translate-y-1 transition-all duration-300">
              <Youtube size={17} /> Subscribe Free
            </a>
          </div>
        </Reveal>

        {/* Video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.title} delay={i * 110}>
              <a href={youtubeLink} target="_blank" rel="noreferrer"
                className={`block rounded-2xl overflow-hidden border border-[#d4af37]/10
                  bg-[#131a24] transition-all duration-350 group ${v.border}
                  hover:-translate-y-2 hover:shadow-yt`}>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-[#0d1219]">
                  <img
                    src={v.src}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-[#1c1414] to-[#0c1018]
                          flex items-center justify-center relative">
                          <svg width="60" height="42" viewBox="0 0 60 42" fill="none">
                            <rect width="60" height="42" rx="8" fill="#ff0000" opacity=".9"/>
                            <path d="M24 12 L44 21 L24 30 Z" fill="white"/>
                          </svg>
                        </div>`
                    }}
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-black/30">
                    <PlayCircle size={52} className="text-white drop-shadow-xl" />
                  </div>
                  {/* Duration chip */}
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white
                    text-[11px] font-semibold px-2 py-0.5 rounded-md">{v.length}</span>
                </div>
                {/* Meta */}
                <div className="p-4">
                  <h4 className="font-display font-semibold text-[14px] leading-snug mb-3 line-clamp-2">
                    {v.title}
                  </h4>
                  <div className="flex items-center gap-4 text-[12px] text-[#5c6a7e]">
                    <span className="flex items-center gap-1"><Eye size={12} /> {v.views}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {v.length}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Subscribe banner */}
        <Reveal delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6
            bg-gradient-to-br from-[#1c1414] to-[#0d1117]
            border border-[#ff5050]/20 rounded-2xl p-7 sm:p-9">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#ff5050]/14 flex items-center justify-center
                text-[#ff5050] flex-shrink-0">
                <Youtube size={26} />
              </div>
              <div>
                <h4 className="font-display font-bold text-[17px] mb-1">
                  Join 40,000+ traders learning for free
                </h4>
                <p className="text-[14px] text-[#93a0b4]">New breakdown every week — gold, forex &amp; crypto.</p>
              </div>
            </div>
            <a href={youtubeLink} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full flex-shrink-0
                bg-gradient-to-r from-[#ff5050] to-[#e62e2e] text-white
                font-display font-bold text-sm shadow-yt hover:-translate-y-0.5 transition-all duration-300">
              <Bell size={16} /> Subscribe Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
