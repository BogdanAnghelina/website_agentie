'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, direction = 'up', delay = 0, className, style }: Props) {
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: shouldReduce ? { opacity: 0 } : {
      opacity: 0,
      y: direction === 'up' ? 32 : 0,
      x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
      scale: direction === 'scale' ? 0.93 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
