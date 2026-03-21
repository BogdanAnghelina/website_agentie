import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Prețuri & Pachete — Antigravity Digital',
  description: 'Prețuri flexibile pentru Google Ads, SEO și Web Development. Fără contracte pe termen lung. Consultație și audit gratuit.',
  alternates: { canonical: 'https://antigravitydigital.ro/pricing' },
  openGraph: {
    title: 'Prețuri | Antigravity Digital',
    images: ['/og/home.jpg'],
  },
}

const packages = [
  {
    name: 'Start',
    price: '800',
    currency: '€/lună',
    desc: 'Pentru afaceri la început de drum, care vor să testeze marketingul digital cu pași siguri.',
    features: [
      '1 serviciu la alegere (Ads sau SEO)',
      'Setup complet & tracking',
      'Raport lunar standard',
      'Apel lunar de 30 min',
      'Suport email în 48h',
    ],
    cta: 'Alege Start',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '1.600',
    currency: '€/lună',
    desc: 'Cel mai ales pachet. Combină 2–3 canale pentru rezultate compuse și creștere accelerată.',
    features: [
      '2–3 servicii combinate',
      'Setup + strategie personalizată',
      'Dashboard live în timp real',
      'Raport lunar detaliat',
      'Apel lunar de 60 min',
      'Suport prioritar în 24h',
    ],
    cta: 'Alege Growth',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    currency: '',
    desc: 'Pentru companii cu bugete mari și obiective ambițioase. Strategie completă, echipă dedicată.',
    features: [
      'Toate serviciile disponibile',
      'Strategie omnichannel',
      'Account manager dedicat',
      'Raportare săptămânală',
      'Apeluri bi-săptămânale',
      'Suport prioritar 24/7',
    ],
    cta: 'Vorbim despre proiect',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <section className="relative z-10 mx-auto text-center" style={{ padding: '140px 56px 100px', maxWidth: 800 }}>
          <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase mx-auto" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
            <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
            Transparent & Clar
          </div>
          <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 1.04, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>
            Prețuri simple,<br /><span className="text-orange">fără surprize.</span>
          </h1>
          <p className="text-[#F4F0E8] mx-auto" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, maxWidth: 520, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.5s' }}>
            Fără costuri ascunse, fără contracte pe termen lung. Plătești pentru rezultate, nu pentru promisiuni.
          </p>
        </section>
      </div>

      {/* PACKAGES */}
      <section className="bg-cream py-16 px-5 md:py-24 md:px-14">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div
                  className="rounded-[28px] p-9 flex flex-col h-full relative overflow-hidden"
                  style={{
                    background: pkg.highlighted ? '#0E2050' : '#FDFBF7',
                    border: pkg.highlighted ? '1px solid rgba(232,88,26,0.3)' : '1px solid rgba(23,23,32,0.09)',
                    boxShadow: pkg.highlighted ? '0 32px 64px rgba(14,32,80,0.3)' : 'none',
                  }}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-5 right-5 text-[10.5px] font-bold tracking-[0.06em] uppercase rounded-full px-3 py-1.5" style={{ background: '#E8581A', color: '#1c0800' }}>
                      Cel mai popular
                    </div>
                  )}
                  <div className="mb-6">
                    <div className={`font-head text-[13px] font-bold uppercase tracking-[0.06em] mb-3 ${pkg.highlighted ? 'text-orange' : 'text-text-3'}`}>{pkg.name}</div>
                    <div className="flex items-end gap-1.5 mb-3">
                      {pkg.price !== 'Custom' ? (
                        <>
                          <span className={`font-head text-[46px] font-extrabold tracking-[-0.04em] leading-none ${pkg.highlighted ? 'text-[#F4F0E8]' : 'text-text-1'}`}>{pkg.price}</span>
                          <span className={`text-[14px] mb-2 ${pkg.highlighted ? 'text-[rgba(244,240,232,0.50)]' : 'text-text-2'}`}>{pkg.currency}</span>
                        </>
                      ) : (
                        <span className={`font-head text-[46px] font-extrabold tracking-[-0.04em] leading-none ${pkg.highlighted ? 'text-[#F4F0E8]' : 'text-text-1'}`}>Custom</span>
                      )}
                    </div>
                    <p className={`text-[14.5px] leading-[1.65] ${pkg.highlighted ? 'text-[rgba(244,240,232,0.58)]' : 'text-text-2'}`}>{pkg.desc}</p>
                  </div>
                  <div className="flex flex-col gap-3 mb-9 flex-1">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E8581A" strokeWidth="2.2" className="flex-shrink-0"><polyline points="20,6 9,17 4,12"/></svg>
                        <span className={`text-[14px] ${pkg.highlighted ? 'text-[rgba(244,240,232,0.72)]' : 'text-text-2'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center no-underline font-semibold rounded-full py-3.5 transition-all hover:-translate-y-0.5"
                    style={{
                      background: pkg.highlighted ? '#E8581A' : 'transparent',
                      color: pkg.highlighted ? '#1c0800' : '#171720',
                      border: pkg.highlighted ? 'none' : '1px solid rgba(23,23,32,0.2)',
                      fontSize: 14,
                    }}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3} className="mt-10 text-center">
            <p className="text-[14px] text-text-3">
              Toate prețurile sunt orientative. Oferta finală se stabilește după consultația gratuită, în funcție de obiective și complexitate.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
