'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ExitIntent() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const timeOnPage = useRef<number>(Date.now())
  const triggered = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem('exit_intent_shown')) return

    const handle = (e: MouseEvent) => {
      if (triggered.current) return
      const secondsOnPage = (Date.now() - timeOnPage.current) / 1000
      if (e.clientY < 20 && e.movementY < -5 && secondsOnPage >= 60) {
        triggered.current = true
        sessionStorage.setItem('exit_intent_shown', '1')
        setVisible(true)
      }
    }
    document.addEventListener('mousemove', handle)
    return () => document.removeEventListener('mousemove', handle)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-charcoal-2 border border-white/10 rounded-3xl p-10 max-w-md w-full text-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-[rgba(244,240,232,0.30)] hover:text-[#F4F0E8] transition-colors">✕</button>
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="font-head text-2xl font-bold text-[#F4F0E8] mb-3">Audit gratuit în 24h</h2>
            <p className="text-[rgba(244,240,232,0.58)] mb-6 leading-relaxed">Lasă-ne emailul și îți trimitem un audit complet al prezenței tale digitale, fără costuri.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@compania-ta.ro"
                required
                className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-[#F4F0E8] placeholder:text-[rgba(244,240,232,0.30)] outline-none focus:border-orange/50"
              />
              <button type="submit" className="bg-orange text-[#1c0800] font-semibold py-3 rounded-full hover:bg-[#f0692a] transition-colors">
                Vreau auditul gratuit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
