'use client'
import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

interface Props {
  text: string
  className?: string
  trigger?: boolean
}

export default function TextScramble({ text, className, trigger = true }: Props) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!trigger) return
    let frame = 0
    const totalFrames = 20
    cancelAnimationFrame(frameRef.current)
    function update() {
      const progress = frame / totalFrames
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i / text.length < progress) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      frame++
      if (frame <= totalFrames) {
        frameRef.current = requestAnimationFrame(update)
      } else {
        setDisplay(text)
      }
    }
    update()
    return () => cancelAnimationFrame(frameRef.current)
  }, [text, trigger])

  return <span className={className}>{display}</span>
}
