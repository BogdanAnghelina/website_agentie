import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1F1E2A', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 56px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }} className="footer-top-grid">
          {/* Brand column */}
          <div>
            <Link href="/" className="font-head text-[18px] font-extrabold text-[#F4F0E8] no-underline tracking-[-0.02em] inline-block mb-3.5">
              Anti<em className="text-orange not-italic">gravity</em>
            </Link>
            <p className="text-[14px] text-[rgba(244,240,232,0.30)] leading-[1.65] max-w-[260px] mb-7">
              Creștem afaceri românești prin marketing digital bazat pe date și rezultate măsurabile.
            </p>
            <div className="flex gap-2.5">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-all hover:-translate-y-px" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.58)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-all hover:-translate-y-px" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.58)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-all hover:-translate-y-px" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.58)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-all hover:-translate-y-px" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.58)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-head text-[13px] font-bold text-[#F4F0E8] tracking-[0.02em] uppercase mb-[18px]">Servicii</div>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: '/services/google-ads', label: 'Google Ads' },
                { href: '/services/seo', label: 'SEO' },
                { href: '/services/web-development', label: 'Web Development' },
                { href: '/services/facebook-ads', label: 'Facebook Ads' },
                { href: '/services/design', label: 'Design' },
                { href: '/services/newsletter', label: 'Newsletter' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-[rgba(244,240,232,0.58)] no-underline transition-colors hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-head text-[13px] font-bold text-[#F4F0E8] tracking-[0.02em] uppercase mb-[18px]">Companie</div>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: '/#despre', label: 'Despre noi' },
                { href: '/#recenzii', label: 'Recenzii' },
                { href: '/#proces', label: 'Procesul nostru' },
                { href: '/contact', label: 'Contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-[rgba(244,240,232,0.58)] no-underline transition-colors hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-head text-[13px] font-bold text-[#F4F0E8] tracking-[0.02em] uppercase mb-[18px]">Resurse</div>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/ghid-google-ads', label: 'Ghid Google Ads' },
                { href: '/ghid-seo', label: 'Ghid SEO' },
                { href: '/calculator-roi', label: 'Calculator ROI' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-[rgba(244,240,232,0.58)] no-underline transition-colors hover:text-[#F4F0E8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[13px] text-[rgba(244,240,232,0.30)]">
            © {new Date().getFullYear()} Antigravity Digital SRL. Toate drepturile rezervate.
          </p>
          <div className="flex gap-5">
            {[
              { href: '/termeni', label: 'Termeni' },
              { href: '/confidentialitate', label: 'Confidențialitate' },
              { href: '/cookies', label: 'Cookies' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="text-[13px] text-[rgba(244,240,232,0.30)] no-underline transition-colors hover:text-[rgba(244,240,232,0.58)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}
