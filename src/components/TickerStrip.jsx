import React from 'react'

const ITEMS = [
  { pair:'EUR/USD', val:'1.0842', up:true  },
  { pair:'GBP/JPY', val:'198.31', up:false },
  { pair:'XAU/USD', val:'2,341.6',up:true  },
  { pair:'BTC/USD', val:'67,210', up:true  },
  { pair:'ETH/USD', val:'3,512',  up:false },
  { pair:'USD/JPY', val:'156.04', up:true  },
  { pair:'NAS100',  val:'19,884', up:true  },
  { pair:'XAG/USD', val:'29.84',  up:false },
  { pair:'GBP/USD', val:'1.2718', up:true  },
  { pair:'AUD/USD', val:'0.6631', up:false },
]

export default function TickerStrip() {
  const list = [...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-[#d4af37]/10 bg-[#0f141c] py-4 overflow-hidden">
      <div className="ticker-track select-none">
        {list.map((it, i) => (
          <span key={i}
            className="flex items-center gap-2 font-display text-sm font-semibold text-[#93a0b4] whitespace-nowrap">
            <span className="text-[#5c6a7e]">◆</span>
            {it.pair}
            <span className={it.up ? 'text-[#1ed9a7]' : 'text-[#ff5c6c]'}>
              {it.up ? '▲' : '▼'} {it.val}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
