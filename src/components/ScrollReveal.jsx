import React, { useEffect, useRef, useState } from 'react'

/**
 * ScrollReveal — wraps any content and animates it into view the first
 * time it scrolls into the viewport, using Tailwind keyframe animations
 * (fade-up / fade-left / fade-right / zoom-in) defined in tailwind.config.js.
 *
 * Props:
 *  - direction: 'up' | 'left' | 'right' | 'zoom'   (default 'up')
 *  - delay: number (ms) — stagger delay before the animation starts
 *  - as: element type to render (default 'div')
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal dir-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
