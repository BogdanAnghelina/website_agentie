'use client'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className, style, href, onClick }: Props) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
    style,
    onClick,
  }

  if (href) {
    return <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...sharedProps}>{children}</a>
  }
  return <button ref={ref as React.Ref<HTMLButtonElement>} {...sharedProps}>{children}</button>
}
