'use client'
import { useEffect } from 'react'

export default function DarkModeInit() {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      const hour = new Date().getHours()
      const prefersDark = hour >= 20 || hour < 6
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])
  return null
}
