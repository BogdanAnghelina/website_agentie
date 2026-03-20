'use client'
import { useEffect } from 'react'

const AWAY_TITLE = '👀 Încă te gândești? Revino!'

export default function TabReEngagement({ title = 'Antigravity Digital — Agenție de Marketing' }: { title?: string }) {
  useEffect(() => {
    const handle = () => {
      document.title = document.hidden ? AWAY_TITLE : title
    }
    document.addEventListener('visibilitychange', handle)
    return () => document.removeEventListener('visibilitychange', handle)
  }, [title])
  return null
}
