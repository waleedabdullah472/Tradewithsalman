import React, { useState } from 'react'

export default function WhatsAppFloat({ whatsappLink }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-7 right-7 z-[300] w-16 h-16 rounded-full
        bg-[#1ed9a7] text-[#06241c] flex items-center justify-center
        shadow-bull float-1 wa-ring
        hover:scale-110 transition-transform duration-300"
    >
      {/* Tooltip */}
      <span
        className={`absolute right-[74px] top-1/2 -translate-y-1/2
          bg-[#131a24] border border-[#d4af37]/15 text-white
          text-[13px] font-semibold px-4 py-2 rounded-xl whitespace-nowrap
          shadow-xl transition-all duration-200
          ${hover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
        Chat with Salman
      </span>
      {/* WhatsApp icon SVG */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.95.557 3.768 1.519 5.307L2 22l4.838-1.481A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.16 8.16 0 0 1-4.262-1.196l-.305-.183-3.02.926.953-2.94-.198-.31A8.166 8.166 0 0 1 3.8 12c0-4.522 3.679-8.2 8.201-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z"/>
      </svg>
    </a>
  )
}
