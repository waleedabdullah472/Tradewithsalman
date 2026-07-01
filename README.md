# TradeWithSalman — React + Tailwind CSS Website v2

## 🚀 Setup

```bash
npm install
npm run dev         # local dev server
npm run build       # production build → dist/
```

---

## 🖼️ How to add YOUR photos (IMPORTANT)

All images are loaded from the `public/images/` folder.
Copy your photos there with exactly these filenames:

| File | Used for |
|------|----------|
| `public/images/logo.png`         | Navbar logo & footer logo |
| `public/images/trader.jpg`       | Hero section portrait (main) |
| `public/images/trader-about.jpg` | About section portrait (can be same as above) |
| `public/images/chart1.jpg`       | Gallery — XAU/USD setup |
| `public/images/chart2.jpg`       | Gallery — EUR/USD setup |
| `public/images/chart3.jpg`       | Gallery — BTC/USD setup |
| `public/images/chart4.jpg`       | Gallery — GBP/JPY setup |
| `public/images/chart5.jpg`       | Gallery — NAS100 setup |
| `public/images/chart6.jpg`       | Gallery — XAG/USD setup |
| `public/images/yt-thumb1.jpg`    | YouTube section — video 1 thumbnail |
| `public/images/yt-thumb2.jpg`    | YouTube section — video 2 thumbnail |
| `public/images/yt-thumb3.jpg`    | YouTube section — video 3 thumbnail |

> **If a file is missing**, a styled placeholder shows automatically —
> the site will never break, just replace placeholders with real files.

---

## ⚙️ Key customizations in `src/App.jsx`

```js
const WHATSAPP_NUMBER = '923001234567'   // ← your number, country code, no + sign
const YOUTUBE_LINK    = 'https://youtube.com/@tradewithsalman'  // ← your channel
```

---

## 📁 File structure

```
tws/
├── public/
│   └── images/          ← PUT ALL YOUR PHOTOS HERE
│       ├── logo.png
│       ├── trader.jpg
│       ├── trader-about.jpg
│       ├── chart1.jpg … chart6.jpg
│       └── yt-thumb1.jpg … yt-thumb3.jpg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── useScrollReveal.js   ← IntersectionObserver hook
│       ├── Reveal.jsx           ← scroll-reveal wrapper
│       ├── CountUp.jsx          ← animated number counter
│       ├── ScrollProgress.jsx   ← gold progress bar at top
│       ├── Navbar.jsx
│       ├── Hero.jsx             ← particle canvas + local trader.jpg
│       ├── TickerStrip.jsx      ← animated live price ticker
│       ├── About.jsx            ← local trader-about.jpg
│       ├── Services.jsx
│       ├── StatsBand.jsx        ← count-up stats
│       ├── TradingGallery.jsx   ← local chart1-6.jpg
│       ├── YouTubeSection.jsx   ← local yt-thumb1-3.jpg
│       ├── Testimonials.jsx
│       ├── CTAContact.jsx
│       ├── WhatsAppFloat.jsx    ← floating WhatsApp button
│       └── Footer.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Animations included

| Animation | What it does |
|-----------|-------------|
| Scroll progress bar | Gold → teal gradient bar at top of page |
| ScrollReveal (up/left/right) | Sections fade + slide in as you scroll |
| CountUp | Stats count from 0 to final number on scroll |
| Particle canvas | Floating gold particle network in hero |
| Ticker strip | Infinite scrolling price marquee |
| Float chips | Hero badge chips bob up and down |
| Pulse ring | WhatsApp floating button pulsing ring |
| Hero entrance | Page-load fade-up animation |
| Card hover lift | All cards lift and glow on hover |

---

## 🌐 Deploy

Upload the `dist/` folder to any static host:
Vercel, Netlify, GitHub Pages, Hostinger, cPanel public_html.
