import React, { useEffect, useRef, useState } from 'react'

/**
 * Animates a number counting up from 0 once it enters the viewport.
 * Props: value (number), suffix (string), prefix (string),
 *        decimals (int), duration (ms)
 */
export default function CountUp({ value, suffix = '', prefix = '', decimals = 0, duration = 1500 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(value * eased)
            if (p < 1) requestAnimationFrame(tick)
            else setDisplay(value)
          }
          requestAnimationFrame(tick)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}{display.toFixed(decimals)}{suffix}
    </span>
  )
}
