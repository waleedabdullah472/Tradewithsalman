import React from 'react'
import ScrollProgress  from './components/ScrollProgress.jsx'
import Navbar          from './components/Navbar.jsx'
import Hero            from './components/Hero.jsx'
import TickerStrip     from './components/TickerStrip.jsx'
import About           from './components/About.jsx'
import Services        from './components/Services.jsx'
import StatsBand       from './components/StatsBand.jsx'
import TradingGallery  from './components/TradingGallery.jsx'
import YouTubeSection  from './components/YouTubeSection.jsx'
import Testimonials    from './components/Testimonials.jsx'
import CTAContact      from './components/CTAContact.jsx'
import Footer          from './components/Footer.jsx'
import WhatsAppFloat   from './components/WhatsAppFloat.jsx'

/* ─────────────────────────────────────────────────────────────
   EDIT THESE TWO VALUES with your real number/channel link
   WhatsApp: include country code, no + sign, no spaces
   YouTube:  your full channel URL
───────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '+92 302 8814801'
const YOUTUBE_LINK    = 'https://www.youtube.com/@trader_tws'

const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Salman! I found you on your website and want to know more about your signals and mentorship.'
)}`

export default function App() {
  return (
    <div className="font-body bg-[#0a0e14] text-[#eef1f5]">
      <ScrollProgress />
      <Navbar        whatsappLink={WA_LINK} />
      <Hero          whatsappLink={WA_LINK} />
      <TickerStrip />
      <About />
      <Services />
      <StatsBand />
      <TradingGallery />
      <YouTubeSection youtubeLink={YOUTUBE_LINK} />
      <Testimonials />
      <CTAContact    whatsappLink={WA_LINK} />
      <Footer        whatsappLink={WA_LINK} youtubeLink={YOUTUBE_LINK} />
      <WhatsAppFloat whatsappLink={WA_LINK} />
    </div>
  )
}
