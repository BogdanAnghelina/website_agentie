'use client'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const services = [
  {
    href: '/services/google-ads',
    name: 'Google Ads',
    desc: 'Campanii PPC cu ROI maxim',
    feat: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '/services/seo',
    name: 'SEO',
    desc: 'Vizibilitate organică durabilă',
    feat: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="4,18 8,12 12,15 17,7 20,10"/><polyline points="18,4 22,4 22,8"/>
      </svg>
    ),
  },
  {
    href: '/services/web-development',
    name: 'Web Development',
    desc: 'Site-uri care convertesc',
    feat: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
  },
  {
    href: '/services/design',
    name: 'Design',
    desc: 'Identitate vizuală memorabilă',
    feat: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/>
      </svg>
    ),
  },
  {
    href: '/services/facebook-ads',
    name: 'Facebook Ads',
    desc: 'Social advertising performant',
    feat: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    href: '/services/newsletter',
    name: 'Newsletter',
    desc: 'Email marketing automatizat',
    feat: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,6 12,13 22,6"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : new Date().getHours() >= 20 || new Date().getHours() < 6
    setDark(isDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[900] px-5 py-[14px] flex justify-center pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center rounded-full w-full max-w-[900px] transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(23,23,32,0.90)' : 'rgba(23,23,32,0.72)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.10)',
            padding: '7px 7px 7px 22px',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)'
              : 'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.18)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="font-head text-[17px] font-extrabold text-[#F4F0E8] no-underline tracking-[-0.02em] flex-shrink-0 mr-auto">
            Anti<em className="text-orange not-italic">gravity</em>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none mr-3">
            <li>
              <Link href="/" className={`flex items-center gap-1 text-[13.5px] font-medium text-[rgba(244,240,232,0.58)] no-underline px-[13px] py-[7px] rounded-full transition-all hover:text-[#F4F0E8] hover:bg-white/5 ${pathname === '/' ? 'text-[#F4F0E8] bg-white/5' : ''}`}>
                Acasă
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="relative group">
              <a href="#" className="flex items-center gap-1 text-[13.5px] font-medium text-[rgba(244,240,232,0.58)] no-underline px-[13px] py-[7px] rounded-full transition-all hover:text-[#F4F0E8] hover:bg-white/5 whitespace-nowrap">
                Servicii
                <svg className="w-[11px] h-[11px] opacity-50 transition-transform duration-200 group-hover:rotate-180 group-hover:opacity-90" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <polyline points="2,4 6,8 10,4"/>
                </svg>
              </a>

              {/* Dropdown */}
              <div
                className="absolute top-[calc(100%+14px)] left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[260px] p-2 rounded-[22px] z-50"
                style={{
                  transform: 'translateX(-50%)',
                  background: 'rgba(18,18,26,0.97)',
                  backdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 28px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                {services.slice(0, 3).map(svc => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className={`flex items-center gap-[11px] px-3 py-[9px] rounded-[13px] no-underline text-[13.5px] transition-all hover:bg-white/5 ${pathname === svc.href ? 'text-orange bg-[rgba(232,88,26,0.07)]' : 'text-[rgba(244,240,232,0.58)] hover:text-[#F4F0E8]'}`}
                    style={svc.feat ? { color: '#F4F0E8' } : undefined}
                  >
                    <div
                      className="w-[34px] h-[34px] border rounded-[9px] flex items-center justify-center flex-shrink-0"
                      style={{
                        background: pathname === svc.href ? 'rgba(232,88,26,0.10)' : svc.feat ? 'rgba(232,88,26,0.10)' : 'rgba(255,255,255,0.05)',
                        borderColor: pathname === svc.href ? 'rgba(232,88,26,0.22)' : svc.feat ? 'rgba(232,88,26,0.22)' : 'rgba(255,255,255,0.09)',
                        color: pathname === svc.href || svc.feat ? '#E8581A' : 'rgba(244,240,232,0.58)',
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <span className="text-[13.5px] font-semibold">{svc.name}</span>
                      <span className="text-[11px]" style={{ color: pathname === svc.href || svc.feat ? 'rgba(232,88,26,0.50)' : 'rgba(244,240,232,0.30)' }}>{svc.desc}</span>
                    </div>
                  </Link>
                ))}
                <div className="h-px bg-[rgba(255,255,255,0.09)] mx-2 my-1.5" />
                {services.slice(3).map(svc => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className={`flex items-center gap-[11px] px-3 py-[9px] rounded-[13px] no-underline text-[13.5px] transition-all hover:text-[#F4F0E8] hover:bg-white/5 ${pathname === svc.href ? 'text-orange bg-[rgba(232,88,26,0.07)]' : 'text-[rgba(244,240,232,0.58)]'}`}
                  >
                    <div
                      className="w-[34px] h-[34px] border rounded-[9px] flex items-center justify-center flex-shrink-0"
                      style={{
                        background: pathname === svc.href ? 'rgba(232,88,26,0.10)' : 'rgba(255,255,255,0.05)',
                        borderColor: pathname === svc.href ? 'rgba(232,88,26,0.22)' : 'rgba(255,255,255,0.09)',
                        color: pathname === svc.href ? '#E8581A' : 'rgba(244,240,232,0.58)',
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <span className="text-[13.5px] font-semibold">{svc.name}</span>
                      <span className="text-[11px] text-[rgba(244,240,232,0.30)]">{svc.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/#proces" className="flex items-center gap-1 text-[13.5px] font-medium text-[rgba(244,240,232,0.58)] no-underline px-[13px] py-[7px] rounded-full transition-all hover:text-[#F4F0E8] hover:bg-white/5 whitespace-nowrap">
                Proces
              </Link>
            </li>
            <li>
              <Link href="/#recenzii" className="flex items-center gap-1 text-[13.5px] font-medium text-[rgba(244,240,232,0.58)] no-underline px-[13px] py-[7px] rounded-full transition-all hover:text-[#F4F0E8] hover:bg-white/5 whitespace-nowrap">
                Recenzii
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-1 text-[13.5px] font-medium text-[rgba(244,240,232,0.58)] no-underline px-[13px] py-[7px] rounded-full transition-all hover:text-[#F4F0E8] hover:bg-white/5 whitespace-nowrap">
                Contact
              </Link>
            </li>
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full transition-all hover:bg-white/10 mr-1 flex-shrink-0"
            aria-label={dark ? 'Activează modul luminos' : 'Activează modul întunecat'}
            style={{ color: 'rgba(244,240,232,0.58)' }}
          >
            {dark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 relative overflow-hidden text-[13.5px] font-semibold no-underline flex-shrink-0 transition-all hover:-translate-y-px"
            style={{
              background: '#E8581A',
              color: '#1c0800',
              padding: '9px 18px',
              borderRadius: '100px',
            }}
          >
            Hai să vorbim
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <line x1="2" y1="10" x2="10" y2="2"/><polyline points="3,2 10,2 10,9"/>
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden bg-transparent border-0 cursor-pointer p-2 text-[#F4F0E8] rounded-full transition-all hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Deschide meniu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <line x1="3" y1="7" x2="17" y2="7"/><line x1="3" y1="13" x2="17" y2="13"/>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[800] flex flex-col overflow-y-auto transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(23,23,32,0.98)', backdropFilter: 'blur(20px)', padding: '100px 36px 48px' }}
        role="dialog"
        aria-label="Meniu mobil"
      >
        <nav className="flex flex-col mb-9">
          {[
            { href: '/', label: 'Acasă' },
            { href: '/services/google-ads', label: 'Google Ads' },
            { href: '/services/seo', label: 'SEO' },
            { href: '/services/web-development', label: 'Web Development' },
            { href: '/services/design', label: 'Design' },
            { href: '/services/facebook-ads', label: 'Facebook Ads' },
            { href: '/services/newsletter', label: 'Newsletter' },
            { href: '/#proces', label: 'Proces' },
            { href: '/#recenzii', label: 'Recenzii' },
          ].map((item, i, arr) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-head font-extrabold text-[clamp(22px,5.5vw,30px)] no-underline py-3 tracking-[-0.02em] transition-colors border-b border-[rgba(255,255,255,0.07)] ${i === arr.length - 1 ? 'border-b-0' : ''} ${pathname === item.href ? 'text-[#F4F0E8]' : 'text-[rgba(244,240,232,0.5)] hover:text-[#F4F0E8]'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="block text-center no-underline font-semibold text-base transition-colors"
          style={{ background: '#E8581A', color: '#1c0800', padding: '16px 32px', borderRadius: '100px' }}
        >
          Hai să vorbim →
        </Link>
      </div>
    </>
  )
}
