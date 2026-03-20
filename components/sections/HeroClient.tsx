'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'
import TextScramble from '@/components/ui/TextScramble'

function getDynamicCta(): string {
  const hour = new Date().getHours()
  return hour >= 9 && hour < 17
    ? 'Cere o strategie gratuită'
    : 'Cere o strategie pentru mâine'
}

export default function HeroClient() {
  const [ctaLabel, setCtaLabel] = useState('Cere o strategie gratuită')

  useEffect(() => {
    setCtaLabel(getDynamicCta())
  }, [])

  return (
    <>
      {/* Hero H1 with TextScramble on the orange line */}
      <h1
        className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6"
        style={{ fontSize: 'clamp(46px, 5vw, 82px)', lineHeight: 1.03 }}
      >
        <span className="block" style={{ animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards' }}>Marketing care</span>
        <span className="block" style={{ animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>aduce clienți,</span>
        <span className="block text-orange" style={{ animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.25s', opacity: 0 }}>
          <TextScramble text="nu doar click-uri." />
        </span>
      </h1>

      <p
        className="font-body text-[17px] leading-[1.72] mb-10"
        style={{ color: 'rgba(244,240,232,0.58)', maxWidth: 440, animation: 'hero-up 0.6s ease forwards 0.4s', opacity: 0 }}
      >
        Creștem afaceri românești prin Google Ads, SEO și Web Development.
        Strategii construite pe date reale, rezultate pe care le poți măsura.
      </p>

      {/* CTA buttons */}
      <div
        className="flex items-center gap-3.5 mb-14 flex-wrap"
        style={{ animation: 'hero-up 0.6s ease forwards 0.5s', opacity: 0 }}
      >
        <MagneticButton
          href="/contact"
          className="inline-flex items-center gap-2 font-body text-[14.5px] font-semibold rounded-full no-underline transition-all hover:-translate-y-0.5"
          style={{ background: '#E8581A', color: '#1c0800', padding: '13px 26px' }}
        >
          {ctaLabel}
          <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <line x1="2" y1="14" x2="14" y2="2"/><polyline points="4,2 14,2 14,12"/>
          </svg>
        </MagneticButton>
        <Link
          href="/#servicii"
          className="inline-flex items-center gap-2 font-body text-[14.5px] font-medium rounded-full no-underline transition-all hover:-translate-y-px"
          style={{ background: 'transparent', color: '#F4F0E8', border: '1px solid rgba(255,255,255,0.18)', padding: '13px 26px' }}
        >
          Descoperă serviciile
          <svg className="w-[15px] h-[15px] flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <line x1="8" y1="2" x2="8" y2="14"/><polyline points="3,9 8,14 13,9"/>
          </svg>
        </Link>
      </div>
    </>
  )
}
