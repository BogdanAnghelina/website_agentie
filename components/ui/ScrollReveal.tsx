'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  className?: string
  style?: React.CSSProperties
}

// Lightweight ScrollReveal using IntersectionObserver + CSS transitions.
// Zero dependencies — replaces framer-motion to reduce JS bundle size.
export default function ScrollReveal({ children, direction = 'up', delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      el.style.opacity = '1'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0) scale(1)'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-60px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-28px)'
      case 'right': return 'translateX(28px)'
      case 'scale': return 'scale(0.93)'
      case 'fade': return 'translate(0, 0) scale(1)'
      default: return 'translateY(32px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: 0,
        transform: getInitialTransform(),
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
