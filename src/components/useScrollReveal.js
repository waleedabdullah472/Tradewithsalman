import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it becomes permanently visible.
 */
export default function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}
