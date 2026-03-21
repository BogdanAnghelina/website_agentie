import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Design & Branding — Identitate Vizuală Memorabilă',
  description: 'Identitate vizuală, UI/UX design și brand systems care convertesc. De la logo la brand guidelines complete. Consultație gratuită.',
  alternates: { canonical: 'https://antigravitydigital.ro/services/design' },
  openGraph: {
    title: 'Design & Branding | Antigravity Digital',
    images: ['/og/design.jpg'],
  },
}

const faqItems = [
  {
    question: 'Cât durează un proiect de identitate vizuală?',
    answer: 'Un brand complet (logo + guidelines) durează 3-4 săptămâni. Un redesign poate dura 2-3 săptămâni. UI/UX pentru un site mediu: 3-6 săptămâni, în funcție de complexitate. Termenele le stabilim clar în brieful inițial — nu avem surprize.',
  },
  {
    question: 'Livrati în ce format fișierele?',
    answer: 'Toate formatele necesare: AI (vectorial editabil), SVG, PNG (fundal transparent), PDF (print-ready). Logo în minimum 3 variante: color, monocrom, alb pe fundal închis. Brand guidelines ca PDF și Figma file.',
  },
  {
    question: 'Câte runde de revizii sunt incluse?',
    answer: '3 runde de feedback pentru fiecare etapă majoră (concept, design final). Experiența ne arată că 3 runde sunt suficiente dacă brieful e clar. Runde suplimentare se pot adăuga contra cost.',
  },
  {
    question: 'Puteți redesigna un brand existent fără să-l facem de nerecunoscut?',
    answer: 'Da, exact asta e arta redesign-ului. Analizăm ce e valoros și recunoscut în brandul actual și modernizăm restul. Evolution, nu revoluție — dacă nu e necesară o schimbare radicală, nu o facem.',
  },
  {
    question: 'Faceți și implementarea — site, social media etc.?',
    answer: 'Da. Avem servicii de Web Development și Social Media Design care se integrează natural după finalizarea brandului. Practic, poți pleca cu brand complet + site + template-uri Social Media — totul coerent.',
  },
  {
    question: 'Avem deja un logo, dar vrem doar UI/UX pentru site. Merge?',
    answer: 'Absolut. Putem porni de la identitatea vizuală existentă și construi UI-ul site-ului în acel sistem. Dacă brandingul e solid, munca merge mai repede — dacă are probleme, le semnalăm și propunem soluții.',
  },
]

export default function DesignPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Design & Branding', 'Identitate vizuală, UI/UX design și brand systems care convertesc.', 'https://antigravitydigital.ro/services/design')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 360, height: 360, bottom: 40, left: -80, background: 'radial-gradient(circle, rgba(14,32,80,0.55) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 18s ease-in-out infinite reverse 3s' }} aria-hidden="true" />

        <section className="relative z-10 flex flex-col md:flex-row items-start md:items-center mx-auto gap-8 md:gap-[60px] px-5 pt-24 pb-12 md:px-14 md:pt-28 md:pb-20" style={{ minHeight: '100dvh', maxWidth: 1300 }} aria-label="Design hero">
          <div className="flex flex-col w-full md:w-auto" style={{ flex: '0 0 auto' }}>
            <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
              Design &amp; Branding
            </div>
            <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 4.8vw, 78px)', lineHeight: 1.04 }}>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>Primul vizual</span>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s', opacity: 0 }}>vinde înainte</span>
              <span className="block text-orange" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s', opacity: 0 }}>să vorbești.</span>
            </h1>
            <p className="text-[#F4F0E8] mb-10 max-w-[520px]" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.78s' }}>
              Construim identități vizuale care comunică profesionalism, câștigă încredere și diferențiază brandul tău — de la logo la brand guidelines complete.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.94s', opacity: 0 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '14px 32px', fontSize: 15.5 }}>
                Vreau un brief gratuit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="#de-ce" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(244,240,232,0.82)', padding: '14px 28px', fontSize: 15.5 }}>
                De ce contează designul
              </Link>
            </div>
            <div className="flex gap-8 mt-12" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 1.1s', opacity: 0 }}>
              {[
                { value: '3–4 săpt.', label: 'Brand complet' },
                { value: '+23%', label: 'Venituri consistente' },
                { value: '100%', label: 'Fișiere livrate' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-head font-extrabold text-[#F4F0E8]" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)' }}>
                    <span className="text-orange">{stat.value.split(' ')[0]}</span>
                    {stat.value.includes(' ') ? ' ' + stat.value.split(' ').slice(1).join(' ') : ''}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(244,240,232,0.5)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand System Card */}
          <div className="flex-1 flex items-center justify-center relative" style={{ animation: 'hero-fade 1s cubic-bezier(0.16,1,0.3,1) forwards 0.5s', opacity: 0, height: 500 }}>
            {/* Mini card: Livrare */}
            <div className="absolute flex flex-col gap-1 text-white rounded-[18px] px-4 py-3" style={{ top: 28, left: -60, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-a 7.5s ease-in-out infinite', zIndex: 3 }}>
              <div className="text-[9.5px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.45)' }}>Livrare</div>
              <div className="font-head font-extrabold text-[17px] text-[#F4F0E8]">14 zile</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-green mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><polyline points="1,8 4,4 6,6 9,2"/></svg>
                Identitate completă
              </div>
            </div>

            {/* Brand Card */}
            <div className="relative rounded-3xl p-6" style={{ width: 340, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)', animation: 'card-float 6.5s ease-in-out infinite', zIndex: 2 }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.25)', color: '#E8581A' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                </div>
                <span className="font-head font-bold text-[13px] text-[#F4F0E8]">Brand System</span>
              </div>

              {/* Color palette */}
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.07em] mb-2" style={{ color: 'rgba(244,240,232,0.35)' }}>Paleta de culori</div>
              <div className="flex gap-2 mb-5">
                {[
                  { bg: '#171720', hex: '#171720' },
                  { bg: '#0E2050', hex: '#0E2050' },
                  { bg: '#E8581A', hex: '#E8581A' },
                  { bg: '#F5F1E8', hex: '#F5F1E8', light: true },
                  { bg: '#FDFBF7', hex: '#FDFBF7', light: true },
                ].map(sw => (
                  <div key={sw.hex} className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full" style={{ background: sw.bg, border: sw.light ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.15)' }} />
                    <div className="text-[8.5px] font-mono" style={{ color: 'rgba(244,240,232,0.35)' }}>{sw.hex}</div>
                  </div>
                ))}
              </div>

              {/* Typography */}
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.07em] mb-2" style={{ color: 'rgba(244,240,232,0.35)' }}>Tipografie</div>
              <div className="flex gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { sample: 'Aa', name: 'Plus Jakarta Sans', weight: 800 },
                  { sample: 'Ag', name: 'DM Sans', weight: 400 },
                ].map(font => (
                  <div key={font.name} className="flex-1 rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-[28px] text-[#F4F0E8] leading-none mb-1" style={{ fontWeight: font.weight }}>{font.sample}</div>
                    <div className="text-[9px] tracking-[0.04em]" style={{ color: 'rgba(244,240,232,0.35)' }}>{font.name}</div>
                  </div>
                ))}
              </div>

              {/* Logo variants */}
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.07em] mb-2" style={{ color: 'rgba(244,240,232,0.35)' }}>Variante logo</div>
              <div className="flex gap-2 mb-4">
                <div className="flex-1 h-9 rounded-[10px] flex items-center justify-center text-[10px] font-extrabold tracking-tight" style={{ background: '#E8581A', color: '#1c0800' }}>LOGO</div>
                <div className="flex-1 h-9 rounded-[10px] flex items-center justify-center text-[10px] font-extrabold tracking-tight" style={{ background: 'rgba(255,255,255,0.08)', color: '#F4F0E8' }}>LOGO</div>
                <div className="flex-1 h-9 rounded-[10px] flex items-center justify-center text-[10px] font-extrabold tracking-tight" style={{ background: '#171720', color: '#F4F0E8', border: '1px solid rgba(255,255,255,0.1)' }}>LOGO</div>
              </div>

              {/* Guidelines badge */}
              <div className="flex items-center gap-2 rounded-[10px] px-4 py-3 text-[11.5px]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(244,240,232,0.6)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8581A" strokeWidth="1.8" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Brand Guidelines PDF — 48 pagini
              </div>
            </div>

            {/* Mini card: NPS */}
            <div className="absolute flex flex-col gap-1 text-white rounded-[18px] px-4 py-3" style={{ bottom: 36, right: -52, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-b 6.8s ease-in-out infinite 1.2s', zIndex: 3 }}>
              <div className="text-[9.5px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.45)' }}>NPS Clienți</div>
              <div className="font-head font-extrabold text-[17px] text-[#F4F0E8]">94/100</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-green mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><polyline points="1,8 4,4 6,6 9,2"/></svg>
                Excepțional
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY DESIGN */}
      <section id="de-ce" style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="De ce contează designul">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex gap-[80px]">
            <div style={{ flex: '0 0 340px' }} className="sticky top-24 self-start">
              <ScrollReveal>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">De ce contează</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-6" style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.25 }}>
                  Designul nu e artă.<br /><span className="text-navy">E instrument de vânzare.</span>
                </h2>
                <p style={{ color: '#555', fontSize: 15.5, lineHeight: 1.7 }}>
                  Fiecare element vizual — de la culoare la spațiere — comunică ceva despre brandul tău. Controlezi mesajul, sau îl lași la întâmplare?
                </p>
              </ScrollReveal>
            </div>
            <div className="flex-1 flex flex-col">
              {[
                {
                  num: '01',
                  title: 'Prima impresie nu se repetă',
                  desc: '55% din utilizatori formează o opinie despre brand în mai puțin de 0.5 secunde. Un design slab pierde clienți înainte să apuci să vorbești cu ei. Nu există o a doua șansă pentru prima impresie.',
                },
                {
                  num: '02',
                  title: 'Consistență = credibilitate = vânzări',
                  desc: 'Brandurile cu identitate vizuală consistentă generează cu 23% mai mult venit. Fiecare touchpoint — site, social, print — trebuie să vorbească același limbaj vizual. Inconsistența creează confuzie și erodează încrederea.',
                },
                {
                  num: '03',
                  title: 'Design care convertește, nu doar arată bine',
                  desc: 'Un UI frumos care nu convertește e artă, nu business. Proiectăm cu psihologia utilizatorului în minte: ierarhie vizuală, contrast, CTA placement, flow de atenție. Frumusețea și funcționalitatea nu se exclud.',
                },
                {
                  num: '04',
                  title: 'Livrabil complet, nu patchwork',
                  desc: 'Nu facem "un logo și un header". Livrăm sistem complet: logo, paleta de culori, tipografie, iconografie, componente UI, brand guidelines. Totul gata de folosit, documentat, în toate formatele necesare.',
                },
              ].map((point, i) => (
                <ScrollReveal key={point.num}>
                  <div className="grid gap-5 py-7" style={{ gridTemplateColumns: '52px 1fr', borderTop: '1px solid rgba(23,23,32,0.09)', ...(i === 3 ? { borderBottom: '1px solid rgba(23,23,32,0.09)' } : {}) }}>
                    <div className="font-head font-bold text-[13px] text-orange tracking-[0.04em] pt-0.5">{point.num}</div>
                    <div>
                      <div className="font-head font-bold text-charcoal mb-2" style={{ fontSize: 17 }}>{point.title}</div>
                      <div style={{ color: '#6E6A7C', fontSize: 14.5, lineHeight: 1.68 }}>{point.desc}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section style={{ background: '#F4F0E8', padding: '100px 56px' }} aria-label="Servicii de design">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="mb-14">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Ce facem</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal" style={{ fontSize: 'clamp(30px, 3vw, 48px)', lineHeight: 1.1 }}>
                Servicii de design<br />pentru fiecare nevoie.
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 1 */}
          <div className="flex gap-4 mb-4">
            {[
              {
                tag: 'Core service',
                title: 'Identitate Vizuală',
                desc: 'Logo design, brand guidelines complete, paleta de culori, tipografie, iconografie. Sistemul vizual care definește brandul și îl face recognoscibil peste tot.',
                pills: ['Logo', 'Color system', 'Typography', 'Brand book'],
                flex: '0 0 38%',
              },
              {
                tag: 'Digital',
                title: 'UI/UX Design',
                desc: 'Design de interfețe pentru site-uri și aplicații. Wireframes, mockup-uri, prototipuri interactive. Optimizat pentru conversii, nu doar pentru estetică.',
                pills: ['Wireframes', 'Mockups', 'Prototyping', 'UX audit'],
                flex: '0 0 34%',
              },
              {
                tag: 'Social',
                title: 'Social Media Templates',
                desc: 'Set complet de template-uri: feed Instagram, Stories, Facebook cover, LinkedIn banner. Editabile în Canva sau Figma.',
                pills: ['Instagram', 'Stories', 'LinkedIn'],
                flex: '1',
              },
            ].map(card => (
              <ScrollReveal key={card.title} style={{ flex: card.flex }}>
                <div className="flex flex-col h-full rounded-[22px] p-8 transition-all duration-300" style={{ background: '#FDFAF5', border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="text-[10px] font-bold tracking-[0.06em] uppercase text-orange mb-2">{card.tag}</div>
                  <h3 className="font-head font-bold text-charcoal mb-3" style={{ fontSize: 18 }}>{card.title}</h3>
                  <p style={{ color: '#6E6A7C', fontSize: 14, lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.pills.map(pill => (
                      <span key={pill} className="text-[11px] font-medium rounded-full px-3 py-1" style={{ background: '#F4F0E8', color: '#6E6A7C', border: '1px solid rgba(23,23,32,0.09)' }}>{pill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            {[
              {
                tag: 'Print',
                title: 'Print & Packaging',
                desc: 'Cărți de vizită, pliante, bannere, ambalaje. De la design la pregătire fișiere pentru tipar. Print-ready în orice format.',
                pills: ['Print-ready', 'Packaging', 'Signage'],
                flex: '0 0 26%',
              },
              {
                tag: 'Business',
                title: 'Pitch Decks & Prezentări',
                desc: 'Prezentări care câștigă clienți și investitori. Structura narativă + design impactant care ține audiența captivă de la primul slide la ultimul. Livrat în PowerPoint și PDF.',
                pills: ['PowerPoint', 'PDF', 'Investor deck'],
                flex: '1',
              },
              {
                tag: 'Rebranding',
                title: 'Redesign Brand',
                desc: 'Modernizăm identități vizuale îmbătrânite fără a pierde recunoașterea brandului. Analiză, strategie, execuție — evolution, nu revoluție.',
                pills: ['Brand audit', 'Evolution', 'Refresh'],
                flex: '0 0 28%',
              },
            ].map(card => (
              <ScrollReveal key={card.title} style={{ flex: card.flex }}>
                <div className="flex flex-col h-full rounded-[22px] p-8 transition-all duration-300" style={{ background: '#FDFAF5', border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="text-[10px] font-bold tracking-[0.06em] uppercase text-orange mb-2">{card.tag}</div>
                  <h3 className="font-head font-bold text-charcoal mb-3" style={{ fontSize: 18 }}>{card.title}</h3>
                  <p style={{ color: '#6E6A7C', fontSize: 14, lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.pills.map(pill => (
                      <span key={pill} className="text-[11px] font-medium rounded-full px-3 py-1" style={{ background: '#F4F0E8', color: '#6E6A7C', border: '1px solid rgba(23,23,32,0.09)' }}>{pill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#1A1B25', padding: '100px 56px', position: 'relative', overflow: 'hidden' }} aria-label="Case study TechStart">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 400, top: -100, right: -80, background: 'radial-gradient(circle, rgba(14,32,80,0.5) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden="true" />
        <div className="mx-auto relative z-10" style={{ maxWidth: 1300 }}>
          <div className="grid grid-cols-2 gap-[72px] items-center">
            <ScrollReveal>
              <div>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-6">Studiu de caz</p>
                <blockquote className="font-head font-bold italic text-[#F4F0E8] mb-7" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}>
                  <span style={{ color: '#E8581A' }}>"</span>Identitatea vizuală a transformat complet percepția brandului nostru. Rata de conversie pe landing page a crescut cu 67% după redesign.<span style={{ color: '#E8581A' }}>"</span>
                </blockquote>
                <div className="flex items-center gap-3 mb-9">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-head font-bold text-sm text-white" style={{ background: '#162B6A' }}>MC</div>
                  <div>
                    <div className="font-semibold text-sm text-[#F4F0E8]">Mihai C.</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(244,240,232,0.4)' }}>CEO, TechStart.ro</div>
                  </div>
                </div>
                <p className="text-sm leading-7 pt-6" style={{ color: 'rgba(244,240,232,0.65)', borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                  TechStart.ro — startup SaaS cu brand îmbătrânit și inconsistent pe toate canalele. Am redesenat identitatea completă: logo, UI kit, pitch deck, social templates. Rezultatele s-au văzut imediat în metrici.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[28px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-head font-bold text-[13px] text-[#F4F0E8]">TechStart.ro — Redesign Impact</span>
                  <span className="text-[11px] font-medium rounded-full px-3 py-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.45)' }}>Sep–Nov 2025</span>
                </div>
                <div className="grid px-7 py-3" style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.025)' }}>
                  {['Metrică', 'Înainte', 'După'].map((lbl, i) => (
                    <div key={lbl} className="text-[10.5px] font-semibold uppercase tracking-[0.05em]" style={{ color: 'rgba(244,240,232,0.35)', textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right' }}>{lbl}</div>
                  ))}
                </div>
                {[
                  { metric: 'Rată conversie LP', before: '1.8%', after: '3.0%', delta: '+67%' },
                  { metric: 'Time on page', before: '1:12', after: '2:48', delta: '+133%' },
                  { metric: 'Brand recall survey', before: '34%', after: '78%', delta: '+129%' },
                  { metric: 'Leads calificați/lună', before: '28', after: '89', delta: '+218%' },
                ].map(row => (
                  <div key={row.metric} className="grid items-center px-7 py-5" style={{ gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-[13px] font-medium" style={{ color: 'rgba(244,240,232,0.7)' }}>{row.metric}</div>
                    <div className="font-head font-bold text-[17px] text-center" style={{ color: 'rgba(244,240,232,0.35)' }}>{row.before}</div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-head font-bold text-[17px] text-[#F4F0E8]">{row.after}</span>
                      <span className="text-[11px] font-bold rounded-full px-2 py-1" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>{row.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BRAND SHOWCASE */}
      <section style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="Ce livrăm">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="grid grid-cols-2 gap-[80px] items-center">
            <ScrollReveal>
              <div>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Ce livrăm</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(30px, 3vw, 48px)', lineHeight: 1.1 }}>
                  Un brand complet,<br />de la zero la lansare.
                </h2>
                <p style={{ color: '#6E6A7C', fontSize: 17, lineHeight: 1.7, marginBottom: 28 }}>
                  Nu livrăm un fișier PNG și ne considerăm gata. Livrăm un sistem — tot ce ai nevoie ca să folosești brandul corect pe orice canal.
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { title: 'Logo + toate variantele', desc: 'Color, monocrom, alb pe fond închis — în AI, SVG, PNG, PDF.' },
                    { title: 'Sistem de culori + tipografie', desc: 'Paleta primară și secundară, scale tipografică, reguli de utilizare.' },
                    { title: 'Brand Guidelines PDF', desc: 'Document complet cu reguli de utilizare, exemple corecte și incorecte.' },
                    { title: 'Figma file + Component library', desc: 'Tot sistemul în Figma, gata de folosit de orice designer sau developer.' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.2)', color: '#E8581A' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                      </div>
                      <div>
                        <div className="font-head font-bold text-charcoal mb-1" style={{ fontSize: 15 }}>{item.title}</div>
                        <div style={{ color: '#6E6A7C', fontSize: 13.5, lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(23,23,32,0.09)', boxShadow: '0 20px 60px rgba(23,23,32,0.1)' }}>
                {/* Style Guide Header */}
                <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(23,23,32,0.09)', background: 'rgba(23,23,32,0.025)' }}>
                  <span className="font-head font-bold text-[12px] text-charcoal">Style Guide — v1.0</span>
                  <span className="text-[10px] font-semibold rounded-full px-3 py-1" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.2)', color: '#E8581A' }}>Final</span>
                </div>
                {/* Logo variants */}
                <div className="px-6 py-5" style={{ borderBottom: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.07em] mb-3" style={{ color: '#A8A4B4' }}>Logo variante</div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 rounded-[10px] flex items-center justify-center text-[11px] font-extrabold" style={{ background: '#E8581A', color: '#1c0800' }}>BRAND</div>
                    <div className="flex-1 h-10 rounded-[10px] flex items-center justify-center text-[11px] font-extrabold text-white" style={{ background: '#171720' }}>BRAND</div>
                    <div className="flex-1 h-10 rounded-[10px] flex items-center justify-center text-[11px] font-extrabold text-charcoal" style={{ background: '#F4F0E8', border: '1px solid rgba(23,23,32,0.09)' }}>BRAND</div>
                  </div>
                </div>
                {/* Colors */}
                <div className="px-6 py-5" style={{ borderBottom: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.07em] mb-3" style={{ color: '#A8A4B4' }}>Culori primare</div>
                  <div className="flex gap-2">
                    {[
                      { bg: '#171720', name: 'Charcoal' },
                      { bg: '#0E2050', name: 'Navy' },
                      { bg: '#E8581A', name: 'Orange' },
                      { bg: '#F5F1E8', name: 'Cream', border: true },
                    ].map(c => (
                      <div key={c.name} className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full" style={{ background: c.bg, border: c.border ? '1px solid #ddd' : undefined }} />
                        <div className="text-[9px]" style={{ color: '#A8A4B4' }}>{c.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Typography */}
                <div className="px-6 py-5" style={{ borderBottom: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.07em] mb-3" style={{ color: '#A8A4B4' }}>Tipografie</div>
                  <div className="flex gap-4">
                    <div>
                      <div className="font-head font-extrabold text-[22px] text-charcoal leading-none mb-1">Heading</div>
                      <div className="text-[9px] tracking-[0.04em]" style={{ color: '#A8A4B4' }}>Plus Jakarta Sans 800</div>
                    </div>
                    <div>
                      <div className="text-[16px] text-charcoal leading-none mb-1">Body text</div>
                      <div className="text-[9px] tracking-[0.04em]" style={{ color: '#A8A4B4' }}>DM Sans 400</div>
                    </div>
                  </div>
                </div>
                {/* Tone of voice */}
                <div className="px-6 py-5">
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.07em] mb-3" style={{ color: '#A8A4B4' }}>Tone of voice</div>
                  <div className="flex gap-2 flex-wrap">
                    {['Profesional', 'Direct', 'Memorabil'].map(tag => (
                      <span key={tag} className="text-[12px] font-semibold rounded-full px-4 py-1 text-navy" style={{ background: 'rgba(14,32,80,0.07)', border: '1px solid rgba(14,32,80,0.12)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="Procesul nostru">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="mb-16" style={{ maxWidth: 560 }}>
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Procesul nostru</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(30px, 3vw, 48px)', lineHeight: 1.1 }}>
                Cum creăm un brand<br />care rezistă în timp.
              </h2>
              <p style={{ color: '#6E6A7C', fontSize: 17, lineHeight: 1.7 }}>
                Un brief clar elimină iterații inutile. Procesul nostru e structurat — nu un ping-pong infinit de revizii.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-col">
            {[
              {
                num: '01',
                title: 'Discovery & Strategie de Brand',
                desc: 'Workshop de 2 ore cu echipa ta. Înțelegem valorile, publicul, competitorii, aspirațiile. Definim poziționarea înainte să desenăm orice pixel. Fundamentul greșit face tot restul inutil.',
                tags: ['Brand workshop', 'Competitor audit', 'Positioning', 'Moodboard'],
              },
              {
                num: '02',
                title: 'Concepte & Iterații',
                desc: 'Prezentăm 3 direcții vizuale distincte. Tu alegi direcția, noi o dezvoltăm. Maxim 3 runde de feedback incluse — procesul e structurat, nu un ping-pong infinit de micro-ajustări.',
                tags: ['Logo concepts', 'Brand directions', 'Feedback rounds'],
              },
              {
                num: '03',
                title: 'Design System Complet',
                desc: 'Construim întregul sistem: logo final + variante, paleta de culori, tipografie, iconografie, pattern-uri, componente UI. Totul în Figma cu documentație completă și reguli de utilizare.',
                tags: ['Figma delivery', 'Component library', 'Brand guidelines'],
              },
              {
                num: '04',
                title: 'Handoff & Suport',
                desc: 'Livrăm toate fișierele (AI, SVG, PNG, PDF). Brand guidelines complete. Apel de handoff cu echipa ta. 30 zile suport post-livrare — te ajutăm să implementezi corect pe toate canalele.',
                tags: ['Asset delivery', 'Brand book PDF', '30 days support'],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num}>
                <div className="grid py-8" style={{ gridTemplateColumns: '72px 1fr', borderTop: '1px solid rgba(23,23,32,0.09)', ...(i === 3 ? { borderBottom: '1px solid rgba(23,23,32,0.09)' } : {}) }}>
                  <div className="font-head font-extrabold text-[36px] leading-none pt-1" style={{ color: '#EDE8DE', letterSpacing: '-0.04em' }}>{step.num}</div>
                  <div>
                    <h3 className="font-head font-bold text-charcoal mb-2" style={{ fontSize: 20, letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ color: '#6E6A7C', fontSize: 15, lineHeight: 1.7, maxWidth: 660 }}>{step.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {step.tags.map(tag => (
                        <span key={tag} className="text-[11.5px] font-medium rounded-full px-3 py-1 text-navy" style={{ background: 'rgba(14,32,80,0.06)', border: '1px solid rgba(14,32,80,0.12)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F4F0E8', padding: '100px 56px' }} aria-label="Întrebări frecvente">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex gap-[80px]">
            <div style={{ flex: '0 0 340px' }} className="sticky top-24 self-start">
              <ScrollReveal>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Întrebări frecvente</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)', lineHeight: 1.1 }}>
                  Totul ce vrei<br />să știi despre<br />design &amp; brand.
                </h2>
                <p style={{ color: '#6E6A7C', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                  Nu găsești răspunsul? Scrie-ne direct — răspundem în mai puțin de 24h.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 text-charcoal" style={{ border: '1px solid rgba(23,23,32,0.15)', background: 'transparent', padding: '11px 22px', fontSize: 14 }}>
                  Pune o întrebare
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                </Link>
              </ScrollReveal>
            </div>
            <div className="flex-1">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0E1E50', padding: '110px 56px', position: 'relative', overflow: 'hidden' }} aria-label="Call to action">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(232,88,26,0.18) 0%, transparent 70%)', filter: 'blur(120px)' }} aria-hidden="true" />
        <div className="mx-auto text-center relative z-10" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-6">Hai să construim</p>
            <h2 className="font-head font-extrabold tracking-tight text-[#F4F0E8] mb-5" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)', lineHeight: 1.08 }}>
              Hai să construim un<br />brand memorabil.
            </h2>
            <p style={{ color: 'rgba(244,240,232,0.65)', fontSize: 17, lineHeight: 1.7, marginBottom: 44 }}>
              O consultație gratuită de 30 de minute. Îți spunem onest dacă ai nevoie de un brand nou sau dacă ce ai poate fi salvat și modernizat.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '15px 32px', fontSize: 15, boxShadow: '0 12px 32px rgba(232,88,26,0.35)' }}>
                Vreau consultația gratuită
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </Link>
              <Link href="tel:+40700000000" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 text-[#F4F0E8]" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', padding: '15px 32px', fontSize: 15 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Sună acum
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-[13px]" style={{ color: 'rgba(244,240,232,0.35)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" aria-hidden="true"><polyline points="20,6 9,17 4,12"/></svg>
              Fără obligații · Brief gratuit · 30 zile suport post-livrare
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
