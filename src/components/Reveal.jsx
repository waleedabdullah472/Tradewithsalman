import React from 'react'
import useScrollReveal from './useScrollReveal.js'

/**
 * Wraps children in a scroll-reveal animation.
 * direction: 'up' | 'left' | 'right' | 'scale'
 * delay: ms integer, applied as inline style transitionDelay
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
