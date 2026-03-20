'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return
    cursor.style.opacity = '1'

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
    function animate() {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12)
      current.current.y = lerp(current.current.y, pos.current.y, 0.12)
      if (cursor) {
        cursor.style.transform = `translate(${current.current.x - 8}px, ${current.current.y - 8}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => cursor.classList.add('scale-[3]')
    const onLeave = () => cursor.classList.remove('scale-[3]')
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-orange pointer-events-none z-[9999] opacity-0 transition-transform duration-200 mix-blend-difference"
      style={{ willChange: 'transform' }}
    />
  )
}
