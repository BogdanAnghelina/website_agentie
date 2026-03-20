import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Cum lucrăm — Procesul Antigravity Digital',
  description: 'Descoperă procesul nostru transparent în 4 pași: audit, strategie, execuție și optimizare continuă pentru creștere măsurabilă.',
  alternates: { canonical: 'https://antigravitydigital.ro/how-we-work' },
  openGraph: {
    title: 'Cum lucrăm | Antigravity Digital',
    images: ['/og/home.jpg'],
  },
}

const steps = [
  {
    num: '01',
    title: 'Audit & Diagnostic',
    desc: 'Analizăm în detaliu afacerea ta, piața, competitorii și prezența digitală actuală. Identificăm oportunitățile cu cel mai mare potențial de creștere și blocajele care limitează performanța actuală.',
    details: ['Audit complet al prezenței digitale', 'Analiză competitori și benchmarks', 'Identificarea oportunităților prioritare', 'Raport de diagnostic detaliat'],
  },
  {
    num: '02',
    title: 'Strategie Personalizată',
    desc: 'Nu există template-uri. Construim o strategie adaptată exact obiectivelor, bugetului și industriei tale. Fiecare decizie e bazată pe date, nu pe intuiție.',
    details: ['Plan de marketing pe 90 de zile', 'Alocare optimă a bugetului', 'KPIs și obiective clare', 'Timeline de implementare'],
  },
  {
    num: '03',
    title: 'Execuție & Lansare',
    desc: 'Implementăm cu precizie. Setăm tracking complet, structurăm campaniile corect și lansăm cu toate elementele la loc. Primele rezultate apar rapid — testăm și ajustăm din prima zi.',
    details: ['Setup tracking și analytics', 'Creare campanii și conținut', 'A/B testing de la start', 'Monitorizare 24/7 în prima săptămână'],
  },
  {
    num: '04',
    title: 'Optimizare & Scalare',
    desc: 'Ce funcționează, scalăm. Ce nu funcționează, corectăm imediat. Raport lunar detaliat, apel lunar cu echipa ta. Transparență totală în fiecare etapă.',
    details: ['Optimizare continuă bazată pe date', 'Scalare controlată a bugetelor', 'Dashboard live cu toate metricile', 'Apel lunar de review și planificare'],
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <section className="relative z-10 mx-auto text-center" style={{ padding: '140px 56px 100px', maxWidth: 800 }} aria-label="Cum lucrăm hero">
          <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase mx-auto" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
            <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
            Procesul nostru
          </div>
          <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 1.04, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>
            Un proces clar,<br /><span className="text-orange">fără surprize.</span>
          </h1>
          <p className="text-[#F4F0E8] mx-auto" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, maxWidth: 560, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.5s' }}>
            De la primul apel până la rapoartele lunare, știi exact ce se întâmplă cu bugetul și campania ta. Fără agendă ascunsă.
          </p>
        </section>
      </div>

      {/* STEPS */}
      <section className="bg-warm-white py-24 px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="grid gap-16 py-16 items-start" style={{ gridTemplateColumns: '100px 1fr 1.2fr', borderBottom: i < steps.length - 1 ? '1px solid rgba(23,23,32,0.08)' : 'none' }}>
                <span className="font-head text-[52px] font-extrabold tracking-[-0.04em] leading-none" style={{ color: '#EDE8DE' }}>{step.num}</span>
                <div>
                  <h2 className="font-head text-[26px] font-bold text-text-1 tracking-[-0.02em] mb-4">{step.title}</h2>
                  <p className="text-[16px] text-text-2 leading-[1.75]">{step.desc}</p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8581A" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
                      <span className="text-[14.5px] text-text-2">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-center py-[110px] px-14" style={{ background: '#0E2050' }}>
        <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', background: 'radial-gradient(circle, rgba(232,88,26,.18) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 640 }}>
          <ScrollReveal>
            <h2 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] leading-[1.08] mb-5" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              Gata să începem?
            </h2>
            <p className="text-[17px] leading-[1.7] mb-10" style={{ color: 'rgba(244,240,232,0.58)' }}>
              O consultație de 30 de minute, fără angajamente. Îți prezentăm onest oportunitățile tale.
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
