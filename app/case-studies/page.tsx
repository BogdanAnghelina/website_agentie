import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Studii de Caz — Rezultate Reale | Antigravity Digital',
  description: 'Rezultate concrete: de la Google Ads cu ROAS 4.7× la SEO cu +318% trafic organic. Cazuri reale, cifre reale.',
  alternates: { canonical: 'https://antigravitydigital.ro/case-studies' },
  openGraph: {
    title: 'Studii de Caz | Antigravity Digital',
    images: ['/og/home.jpg'],
  },
}

const cases = [
  {
    client: 'Munteanu Construct',
    industry: 'Construcții & Renovări',
    service: 'Google Ads',
    serviceColor: '#E8581A',
    result: '-64% cost/lead',
    resultDesc: 'De la 145 lei la 52 lei per lead.',
    period: '90 zile',
    stats: [
      { label: 'ROAS', before: '1.8×', after: '4.7×', delta: '+161%' },
      { label: 'CTR', before: '2.1%', after: '8.4%', delta: '+300%' },
      { label: 'Cost/Lead', before: '145 lei', after: '52 lei', delta: '-64%' },
    ],
    quote: '„Antigravity ne-a arătat prima dată ce înseamnă o campanie optimizată cu adevărat."',
    author: 'Radu Munteanu, CEO',
  },
  {
    client: 'Clinica Vita',
    industry: 'Medicină & Sănătate',
    service: 'SEO',
    serviceColor: '#10b981',
    result: '+318% trafic organic',
    resultDesc: '70% din trafic — organic, în 6 luni.',
    period: '6 luni',
    stats: [
      { label: 'Trafic organic', before: '1,200/lună', after: '5,016/lună', delta: '+318%' },
      { label: 'Keyword top 3', before: '8', after: '94', delta: '+1075%' },
      { label: 'Cost achiziție', before: '—', after: '0€', delta: 'organic' },
    ],
    quote: '„SEO-ul a început să dea roade după luna 3. Acum nu mai depindem exclusiv de reclame plătite."',
    author: 'Andreea Ionescu, Marketing Manager',
  },
  {
    client: 'EcoShop.ro',
    industry: 'eCommerce',
    service: 'Web Development',
    serviceColor: '#6366f1',
    result: '+38% conversii',
    resultDesc: 'Site nou livrat în 4 săptămâni.',
    period: '4 săptămâni',
    stats: [
      { label: 'Rată conversie', before: '0.9%', after: '1.24%', delta: '+38%' },
      { label: 'Timp încărcare', before: '4.2s', after: '0.9s', delta: '-79%' },
      { label: 'Bounce rate', before: '68%', after: '41%', delta: '-40%' },
    ],
    quote: '„Noul site livrat de echipa Antigravity a crescut rata de conversie cu 38% față de varianta veche."',
    author: 'Mihai Popa, Fondator',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <section className="relative z-10 mx-auto text-center" style={{ padding: '140px 56px 100px', maxWidth: 800 }}>
          <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase mx-auto" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
            <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
            Rezultate reale
          </div>
          <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 1.04, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>
            Studii de caz.<br /><span className="text-orange">Cifre, nu promisiuni.</span>
          </h1>
          <p className="text-[#F4F0E8] mx-auto" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, maxWidth: 540, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.5s' }}>
            Fiecare cifră provine din rapoartele reale ale clienților noștri. Fără estimări, fără înfrumusețări.
          </p>
        </section>
      </div>

      {/* CASE STUDIES */}
      <section className="bg-cream py-16 px-5 md:py-24 md:px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="flex flex-col gap-6">
            {cases.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-warm-white rounded-[28px] p-10 grid gap-14 items-start" style={{ border: '1px solid rgba(23,23,32,0.09)', gridTemplateColumns: '1fr 1.4fr' }}>
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.06em] uppercase rounded-full px-3 py-1.5 mb-5" style={{ background: `${cs.serviceColor}18`, border: `1px solid ${cs.serviceColor}30`, color: cs.serviceColor }}>
                      {cs.service}
                    </div>
                    <h2 className="font-head text-[24px] font-bold text-text-1 tracking-[-0.02em] mb-1">{cs.client}</h2>
                    <div className="text-[13px] text-text-3 mb-6">{cs.industry} · {cs.period}</div>
                    <p className="text-[40px] font-head font-extrabold tracking-[-0.03em] leading-none mb-2" style={{ color: cs.serviceColor }}>{cs.result}</p>
                    <p className="text-[15px] text-text-2 mb-8">{cs.resultDesc}</p>
                    <blockquote className="italic text-[15px] text-text-2 leading-[1.7] border-l-2 border-orange pl-4 mb-3">
                      {cs.quote}
                    </blockquote>
                    <div className="text-[13px] text-text-3">{cs.author}</div>
                  </div>
                  <div className="rounded-[20px] overflow-hidden" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)' }}>
                    <div className="grid px-7 py-4" style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(23,23,32,0.03)' }}>
                      {['Indicator', 'Înainte', 'După'].map((h, j) => (
                        <span key={h} className="text-[10.5px] font-bold tracking-[0.06em] uppercase text-text-3" style={{ textAlign: j === 0 ? 'left' : j === 2 ? 'right' : 'center' }}>{h}</span>
                      ))}
                    </div>
                    {cs.stats.map((row, j) => (
                      <div key={j} className="grid px-7 py-5 items-center" style={{ gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(23,23,32,0.07)' }}>
                        <span className="text-[13px] font-medium text-text-2">{row.label}</span>
                        <span className="font-head text-[16px] font-bold text-center text-text-3">{row.before}</span>
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-head text-[16px] font-bold text-text-1">{row.after}</span>
                          <span className="text-[11px] font-bold px-2 py-[3px] rounded-full" style={{ background: cs.serviceColor + '18', color: cs.serviceColor }}>{row.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-center py-20 px-5 md:py-[110px] md:px-14" style={{ background: '#0E2050' }}>
        <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', background: 'radial-gradient(circle, rgba(232,88,26,.18) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 640 }}>
          <ScrollReveal>
            <h2 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] leading-[1.08] mb-5" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              Vrei rezultate similare?
            </h2>
            <p className="text-[17px] leading-[1.7] mb-10" style={{ color: 'rgba(244,240,232,0.58)' }}>
              Programează o consultație gratuită și discutăm despre potențialul real al afacerii tale.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold no-underline rounded-full transition-all hover:-translate-y-0.5" style={{ background: '#E8581A', color: '#1c0800', padding: '15px 32px', fontSize: 15 }}>
              Consultație gratuită
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
