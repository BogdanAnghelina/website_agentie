'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

// Uses native IntersectionObserver instead of framer-motion's useInView
export default function Counter({ target, suffix = '', prefix = '', duration = 1500 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()
          const start = performance.now()
          function update(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}
