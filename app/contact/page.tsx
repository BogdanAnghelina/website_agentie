import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Consultație Gratuită',
  description: 'Contactează Antigravity Digital pentru o consultație gratuită de 30 de minute. Răspundem în mai puțin de 24 de ore.',
  alternates: { canonical: 'https://antigravitydigital.ro/contact' },
  openGraph: {
    title: 'Contact | Antigravity Digital',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />

        <section className="relative z-10 mx-auto text-center px-5 pt-28 pb-20 md:pt-36 md:pb-24" style={{ maxWidth: 800 }} aria-label="Contact hero">
          <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase mx-auto" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
            <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
            Consultație gratuită
          </div>
          <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 1.04, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>
            Hai să vorbim despre<br /><span className="text-orange">afacerea ta.</span>
          </h1>
          <p className="text-[#F4F0E8] mx-auto" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, maxWidth: 560, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.5s' }}>
            O consultație de 30 de minute, fără angajamente. Îți spunem onest ce oportunități există și care e cel mai rapid drum spre rezultate.
          </p>
        </section>
      </div>

      {/* MAIN CONTENT */}
      <section className="px-5 py-16 md:px-14 md:py-24" style={{ background: '#FDFAF5' }} aria-label="Formular de contact">
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-start">

            {/* Contact Form */}
            <ScrollReveal>
              <div className="rounded-3xl p-10" style={{ background: '#fff', border: '1px solid rgba(23,23,32,0.08)', boxShadow: '0 8px 48px rgba(23,23,32,0.07)' }}>
                <h2 className="font-head font-extrabold text-charcoal mb-2" style={{ fontSize: 26, letterSpacing: '-0.025em' }}>Trimite un mesaj</h2>
                <p style={{ color: '#6E6A7C', fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>Răspundem în mai puțin de 24 de ore lucrătoare.</p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <ScrollReveal>
                <div>
                  <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Contact direct</p>
                  <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)', lineHeight: 1.1 }}>
                    Preferăm conversații reale,<br />nu formulare interminabile.
                  </h2>
                  <p style={{ color: '#6E6A7C', fontSize: 16, lineHeight: 1.7 }}>
                    Dacă preferi să vorbești direct, suntem disponibili pe email sau telefon. Răspundem în mai puțin de 24 de ore.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      iconPath: 'email',
                      label: 'Email',
                      value: 'hello@antigravitydigital.ro',
                      href: 'mailto:hello@antigravitydigital.ro',
                    },
                    {
                      iconPath: 'phone',
                      label: 'Telefon',
                      value: '+40 700 000 000',
                      href: 'tel:+40700000000',
                    },
                    {
                      iconPath: 'location',
                      label: 'Locație',
                      value: 'București, România',
                      href: undefined,
                    },
                  ].map(contact => (
                    <div key={contact.label} className="flex items-start gap-4 rounded-2xl p-5" style={{ background: '#fff', border: '1px solid rgba(23,23,32,0.08)' }}>
                      <div className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0 text-orange" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.2)' }}>
                        {contact.iconPath === 'email' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,6 12,13 22,6"/></svg>
                        )}
                        {contact.iconPath === 'phone' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        )}
                        {contact.iconPath === 'location' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        )}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.06em] mb-1" style={{ color: '#A8A4B4' }}>{contact.label}</div>
                        {contact.href ? (
                          <Link href={contact.href} className="font-semibold text-charcoal hover:text-orange transition-colors" style={{ fontSize: 15 }}>{contact.value}</Link>
                        ) : (
                          <span className="font-semibold text-charcoal" style={{ fontSize: 15 }}>{contact.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(23,23,32,0.08)' }}>
                  <h3 className="font-head font-bold text-charcoal mb-4" style={{ fontSize: 17 }}>Ce se întâmplă după ce trimiți mesajul</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { step: '01', title: 'Confirmare imediată', desc: 'Primești email de confirmare că am primit mesajul tău.' },
                      { step: '02', title: 'Analiză în 24h', desc: 'Analizăm situația ta și pregătim câteva întrebări relevante.' },
                      { step: '03', title: 'Apel de 30 minute', desc: 'Discutăm situația ta și îți prezentăm oportunitățile concrete.' },
                    ].map(item => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="font-head font-bold text-[12px] text-orange tracking-[0.04em] pt-0.5 flex-shrink-0" style={{ minWidth: 28 }}>{item.step}</div>
                        <div>
                          <div className="font-semibold text-charcoal mb-1" style={{ fontSize: 14 }}>{item.title}</div>
                          <div style={{ color: '#6E6A7C', fontSize: 13.5, lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-2xl p-6" style={{ background: 'rgba(14,32,80,0.04)', border: '1px solid rgba(14,32,80,0.1)' }}>
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true"><polyline points="20,6 9,17 4,12"/></svg>
                    <p style={{ color: '#555', fontSize: 14, lineHeight: 1.65 }}>
                      <strong>Consultația e 100% gratuită</strong> — fără obligații, fără pitch agresiv. Dacă nu suntem potriviți pentru tine, îți spunem direct și îți recomandăm ce ai nevoie.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES QUICK LINKS */}
      <section className="px-5 py-12 md:px-14 md:py-20" style={{ background: '#F4F0E8' }} aria-label="Serviciile noastre">
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Nu ești sigur de unde să începi?</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)', lineHeight: 1.1 }}>
                Explorează serviciile noastre
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 gap-5">
            {[
              { title: 'Google Ads', desc: 'Campanii PPC cu ROI mediu 4.7×', href: '/services/google-ads', stat: '4.7× ROI' },
              { title: 'SEO', desc: 'Vizibilitate organică durabilă', href: '/services/seo', stat: '+318% trafic' },
              { title: 'Web Development', desc: 'Site-uri care convertesc', href: '/services/web-development', stat: '0.9s load' },
              { title: 'Design & Branding', desc: 'Identitate vizuală memorabilă', href: '/services/design', stat: '+23% venituri' },
              { title: 'Facebook Ads', desc: 'Social advertising performant', href: '/services/facebook-ads', stat: '4.8× ROAS' },
              { title: 'Newsletter', desc: 'Email marketing cu ROI 3.800%', href: '/services/newsletter', stat: '€36 / €1 inv.' },
            ].map(service => (
              <ScrollReveal key={service.title}>
                <Link href={service.href} className="flex flex-col rounded-2xl p-6 transition-all duration-300 group" style={{ background: '#fff', border: '1px solid rgba(23,23,32,0.08)', textDecoration: 'none', display: 'flex' }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-head font-bold text-charcoal" style={{ fontSize: 17 }}>{service.title}</h3>
                    <span className="text-[11px] font-bold rounded-full px-3 py-1 flex-shrink-0 ml-3" style={{ background: '#FFF0E8', color: '#E8581A', border: '1px solid rgba(232,88,26,0.2)' }}>{service.stat}</span>
                  </div>
                  <p style={{ color: '#6E6A7C', fontSize: 14, lineHeight: 1.6, flex: 1 }}>{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-orange text-[13px] font-semibold">
                    Află mai mult
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
