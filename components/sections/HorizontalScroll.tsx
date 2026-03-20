'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const services = [
  {
    href: '/services/google-ads',
    name: 'Google Ads',
    tag: 'PPC',
    tagline: 'Fii primul când clienții tăi caută.',
    stat: '4.7× ROAS',
    color: '#E8581A',
  },
  {
    href: '/services/seo',
    name: 'SEO',
    tag: 'Organic',
    tagline: 'Vizibilitate durabilă, fără costuri per click.',
    stat: '+318% trafic',
    color: '#10b981',
  },
  {
    href: '/services/web-development',
    name: 'Web Development',
    tag: 'Dev',
    tagline: 'Site-uri rapide, clare, construite să convertească.',
    stat: '0.9s load',
    color: '#6366f1',
  },
  {
    href: '/services/facebook-ads',
    name: 'Facebook & Instagram Ads',
    tag: 'Social',
    tagline: 'Audiențe precise, funnel complet de conversie.',
    stat: '4.8× ROAS',
    color: '#3b82f6',
  },
  {
    href: '/services/design',
    name: 'Design & Branding',
    tag: 'Brand',
    tagline: 'Identitate vizuală care diferențiază și convertește.',
    stat: '+23% CVR',
    color: '#f59e0b',
  },
  {
    href: '/services/newsletter',
    name: 'Email Marketing',
    tag: 'Email',
    tagline: 'Lista ta de emailuri transformată în vânzări repetate.',
    stat: '€36 / €1 inv.',
    color: '#ec4899',
  },
]

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const totalWidth = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])


  return (
    <div className="bg-charcoal">
      <section
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ background: '#0E2050' }}
        aria-label="Servicii — scroll orizontal"
      >
        {/* Section header */}
        <div
          className="relative z-10 px-14 pt-20 pb-10"
          style={{ maxWidth: 1300, margin: '0 auto' }}
        >
          <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase mb-4" style={{ color: 'rgba(232,88,26,0.85)' }}>
            <span className="block w-5 h-0.5 rounded-sm" style={{ background: 'rgba(232,88,26,0.85)' }} />
            Toate serviciile
          </div>
          <h2
            className="font-head font-extrabold tracking-[-0.03em] text-[#F4F0E8] leading-[1.1]"
            style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}
          >
            Scroll pentru a explora.
          </h2>
          <p className="text-[16px] mt-3" style={{ color: 'rgba(244,240,232,0.45)' }}>
            Fiecare serviciu, construit să aducă rezultate măsurabile.
          </p>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-5 px-14 pb-20"
          style={{ width: 'max-content' }}
        >
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="flex-shrink-0 rounded-[28px] flex flex-col no-underline group transition-all hover:-translate-y-1"
              style={{
                width: 340,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                padding: '36px 32px',
                backdropFilter: 'blur(14px)',
              }}
            >
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.06em] uppercase rounded-full px-3 py-1.5 mb-6 w-fit"
                style={{
                  background: `${svc.color}18`,
                  border: `1px solid ${svc.color}30`,
                  color: svc.color,
                }}
              >
                {svc.tag}
              </div>
              <h3
                className="font-head text-[22px] font-extrabold text-[#F4F0E8] tracking-[-0.02em] mb-3"
              >
                {svc.name}
              </h3>
              <p
                className="text-[15px] leading-[1.7] flex-1"
                style={{ color: 'rgba(244,240,232,0.50)' }}
              >
                {svc.tagline}
              </p>
              <div
                className="flex items-center justify-between mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="font-head text-[18px] font-bold" style={{ color: svc.color }}>
                  {svc.stat}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F4F0E8] group-hover:gap-2.5 transition-all">
                  Află mai mult
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}

          {/* End card CTA */}
          <div
            className="flex-shrink-0 rounded-[28px] flex flex-col items-center justify-center"
            style={{
              width: 300,
              background: 'rgba(232,88,26,0.08)',
              border: '1px solid rgba(232,88,26,0.20)',
              padding: '36px 32px',
            }}
          >
            <p className="font-head text-[20px] font-bold text-[#F4F0E8] text-center mb-6 leading-[1.3]">
              Hai să discutăm ce funcționează pentru tine.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold no-underline rounded-full px-6 py-3.5 transition-all hover:-translate-y-0.5"
              style={{ background: '#E8581A', color: '#1c0800', fontSize: 14 }}
            >
              Consultație gratuită
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
