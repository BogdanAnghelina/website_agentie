import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Web Development — Site-uri care convertesc',
  description: 'Web development profesional: site-uri de prezentare, landing pages și magazine online care convertesc. Performanță maximă, design curat, SEO ready.',
}

const faqItems = [
  { q: 'Cât durează să faceți un site?', a: 'Un landing page simplu: 1-2 săptămâni. Un site de prezentare complet: 3-5 săptămâni. Un magazin online: 4-8 săptămâni. Depinde de complexitate și de cât de rapid primim feedback și materiale de la tine.' },
  { q: 'Pe ce platformă construiți?', a: 'Depinde de ce are nevoie afacerea ta. WordPress pentru site-uri de conținut și flexibilitate maximă. React/Next.js pentru performanță maximă și aplicații. WooCommerce sau soluții custom pentru eCommerce. Nu avem un stack favorit — avem stack-ul potrivit pentru fiecare proiect.' },
  { q: 'Rămâne site-ul al meu după?', a: '100%. Codul, domeniul, hostingul — toate îți aparțin. Noi nu avem sisteme proprietare care te blochează. Poți lucra cu orice alt developer după noi fără probleme.' },
  { q: 'Includeți și hosting?', a: 'Nu hosting direct, dar te îndrumăm spre soluția potrivită și te ajutăm cu setup-ul. Recomandăm de obicei soluții cloud (Vercel, Netlify, AWS) sau hosting managed în funcție de stack și trafic.' },
  { q: 'Pot face singur update-uri pe site?', a: 'Da. Construim cu un CMS care să îți permită editarea conținutului fără să atingi codul. Livrăm și training video pentru echipa ta.' },
  { q: 'Ce trebuie să pregătesc eu?', a: 'Textele, fotografiile și accesul la brand assets. Dacă nu ai, putem recomanda copywriter și fotograf sau putem folosi fotografii de stoc premium. Cu cât mai clare sunt obiectivele la brief, cu atât mai rapid și mai bine livrăm.' },
]

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Web Development', 'Construim site-uri și landing pages cu focus pe un singur lucru: să transforme vizitatorul în client.', 'https://antigravity.ro/services/web-development')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, top: -100, right: -60, borderRadius: '50%', filter: 'blur(100px)', background: 'radial-gradient(circle, rgba(232,88,26,0.15) 0%, transparent 70%)', animation: 'blob-drift 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 360, height: 360, bottom: 40, left: -80, borderRadius: '50%', filter: 'blur(100px)', background: 'radial-gradient(circle, rgba(14,32,80,0.55) 0%, transparent 70%)', animation: 'blob-drift 18s ease-in-out infinite reverse 3s' }} />

        <div style={{ position: 'relative', zIndex: 1, minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '112px 56px 80px', maxWidth: 1300, margin: '0 auto', gap: 60 }}>
          <div style={{ flex: '0 0 52%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, padding: '5px 14px 5px 8px', fontSize: 11.5, fontWeight: 500, color: 'rgba(244,240,232,0.58)', letterSpacing: '0.05em', textTransform: 'uppercase', width: 'fit-content', marginBottom: 32, animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span style={{ width: 7, height: 7, background: '#E8581A', borderRadius: '50%', flexShrink: 0, animation: 'pulse-ring 2.4s ease-in-out infinite' }} />
              Serviciu Principal · Web Development
            </div>
            <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(42px, 4.8vw, 78px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em', color: '#F4F0E8', marginBottom: 24 }}>
              <span style={{ display: 'block', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s' }}>Site-ul tău ar trebui</span>
              <span style={{ display: 'block', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s' }}>să muncească</span>
              <span style={{ display: 'block', color: '#E8581A', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s' }}>cât echipa ta.</span>
            </h1>
            <p style={{ fontSize: 17, fontWeight: 400, color: 'rgba(244,240,232,0.58)', lineHeight: 1.72, maxWidth: 440, marginBottom: 40, opacity: 0, animation: 'hero-up 0.7s ease forwards 0.78s' }}>
              Construim site-uri și landing pages cu focus pe un singur lucru: să transforme vizitatorul în client. Performanță maximă, design curat, SEO ready din ziua 1.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 52, opacity: 0, animation: 'hero-up 0.7s ease forwards 0.92s' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8581A', color: '#1c0800', fontSize: 14.5, fontWeight: 600, padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}>
                Discutăm proiectul tău
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="14" x2="14" y2="2"/><polyline points="4,2 14,2 14,12"/></svg>
              </Link>
              <a href="#cum-lucram" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F4F0E8', fontSize: 14.5, fontWeight: 500, padding: '13px 26px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                Cum lucrăm
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, opacity: 0, animation: 'hero-up 0.7s ease forwards 1.06s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}><span style={{ color: '#E8581A' }}>0.9</span>s</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Timp mediu încărcare</span>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>+<span style={{ color: '#E8581A' }}>38</span>%</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Conv. rate mediu</span>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}><span style={{ color: '#E8581A' }}>28</span>+</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Site-uri lansate</span>
              </div>
            </div>
          </div>

          {/* Lighthouse Card */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 500, opacity: 0, animation: 'hero-fade 1s ease forwards 0.4s' }}>
            <div style={{ position: 'absolute', top: 28, left: -60, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '14px 16px', zIndex: 3, animation: 'mini-a 7.5s ease-in-out infinite' }}>
              <div style={{ fontSize: 9.5, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>Conv. Rate</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>+38%</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#10b981', marginTop: 5 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                față de site vechi
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 24, padding: 24, width: 320, position: 'relative', zIndex: 2, boxShadow: '0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.09)', animation: 'card-float 6.5s ease-in-out infinite' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Lighthouse Audit</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(16,185,129,.10)', border: '1px solid rgba(16,185,129,.22)', color: '#10b981', fontSize: 10.5, fontWeight: 700, padding: '3px 9px', borderRadius: 100 }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="1.5,6.5 4.5,9.5 10.5,2.5"/></svg>
                  100 / 100
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                {[
                  { score: '97', label: 'Performance', highlight: true },
                  { score: '98', label: 'Accessibility', highlight: false },
                  { score: '100', label: 'Best Practices', highlight: false },
                  { score: '100', label: 'SEO', highlight: false },
                ].map((item) => (
                  <div key={item.label} style={{ background: item.highlight ? 'rgba(232,88,26,0.08)' : 'rgba(255,255,255,0.04)', border: item.highlight ? '1px solid rgba(232,88,26,0.20)' : '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '14px 12px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: item.highlight ? 34 : 28, fontWeight: 800, lineHeight: 1, marginBottom: 4, color: item.highlight ? '#E8581A' : '#10b981' }}>{item.score}</div>
                    <div style={{ fontSize: 10, color: 'rgba(244,240,232,0.3)', fontWeight: 500 }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 14 }}>
                {[{ val: '1.2s', lbl: 'LCP' }, { val: '8ms', lbl: 'FID' }, { val: '0.02', lbl: 'CLS' }].map((cwv) => (
                  <div key={cwv.lbl} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 700, color: '#F4F0E8' }}>{cwv.val}</div>
                    <div style={{ fontSize: 9.5, color: 'rgba(244,240,232,0.3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{cwv.lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="#10b981" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: '#10b981' }}>+340%</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)' }}>mai rapid față de media web</span>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 36, right: -52, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '14px 16px', zIndex: 3, animation: 'mini-b 6.8s ease-in-out infinite 1.2s' }}>
              <div style={{ fontSize: 9.5, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>Load Time</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>0.9s</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#10b981', marginTop: 5 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                -72% față de start
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div style={{ position: 'absolute', bottom: 32, left: 56, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(244,240,232,0.3)', zIndex: 2 }}>
            <Link href="/" style={{ color: 'rgba(244,240,232,0.3)', textDecoration: 'none' }}>Acasă</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/#servicii" style={{ color: 'rgba(244,240,232,0.3)', textDecoration: 'none' }}>Servicii</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: '#E8581A' }}>Web Development</span>
          </div>
        </div>

        <div style={{ lineHeight: 0, position: 'relative', zIndex: 2 }}>
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,64 Q360,0 720,32 Q1080,64 1440,8 L1440,64 Z" fill="#FDFBF7"/>
          </svg>
        </div>
      </div>

      {/* WHY */}
      <section style={{ background: '#FDFBF7', padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
            <ScrollReveal direction="left" style={{ position: 'sticky', top: 120 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                De ce contează site-ul
              </div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.025em', color: '#171720', marginTop: 20, marginBottom: 28 }}>
                Ai 3 secunde. Dacă site-ul tău nu convinge în 3 secunde, vizitatorul pleacă. <strong style={{ color: '#0E2050' }}>La competitor.</strong>
              </h2>
              <p style={{ fontSize: 15.5, color: '#6E6A7C', lineHeight: 1.7 }}>
                Site-ul tău nu e o broșură digitală — e cel mai muncitor angajat al tău. Disponibil 24/7, fără pauze, fără erori de comunicare. Dar numai dacă e construit bine.
              </p>
            </ScrollReveal>

            <div>
              {[
                { n: '01', t: 'Prima impresie nu se repetă', d: 'Într-un mediu digital în care utilizatorii au alternative la un click distanță, site-ul tău este cartea ta de vizită. Un site lent, greu de navigat sau vizual depășit comunică direct că afacerea ta nu e de încredere.' },
                { n: '02', t: 'Performanța tehnică = bani', d: 'Fiecare secundă în plus de loading pierde 7% din conversii (Google, 2023). Un site care încarcă în 0.8s vs. 4s poate dubla câte leaduri primești la același buget de marketing.' },
                { n: '03', t: 'SEO ready din construcție', d: 'Un site construit cu structura greșită nu va ranka niciodată bine, indiferent câte articole publici. Construim cu SEO în minte de la prima linie de cod: viteză, structura heading, schema markup, sitemap.' },
                { n: '04', t: 'Conversia e inginerie, nu ghici', d: 'Nu facem site-uri frumoase ca scop în sine. Fiecare element — CTA, layout, ierarhia vizuală, copy — e ales pentru a ghida vizitatorul spre acțiunea pe care tu o vrei. Frumusețea e mijlocul. Conversia e scopul.' },
              ].map((p, i) => (
                <ScrollReveal key={p.n} direction="up" delay={i * 0.1}>
                  <div style={{ padding: '28px 0', borderBottom: '1px solid rgba(23,23,32,0.09)', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, alignItems: 'start', ...(i === 0 ? { borderTop: '1px solid rgba(23,23,32,0.09)' } : {}) }}>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, color: '#E8581A', letterSpacing: '0.04em', paddingTop: 2 }}>{p.n}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: '#171720', letterSpacing: '-0.015em', marginBottom: 8 }}>{p.t}</div>
                      <p style={{ fontSize: 14.5, color: '#6E6A7C', lineHeight: 1.68 }}>{p.d}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section style={{ background: '#F5F1E8', padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 52 }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Ce construim
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Tipuri de proiecte<br />web pe care le livrăm.</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p style={{ fontSize: 17, color: '#6E6A7C', lineHeight: 1.7, marginTop: 14, maxWidth: 520 }}>Fiecare proiect e altfel. Alegem tehnologia potrivită pentru obiectiv, nu tehnologia cu care suntem obișnuiți.</p>
            </ScrollReveal>
          </div>

          {[
            [
              { tag: 'Cel mai cerut', name: 'Site de prezentare', desc: 'Site-ul complet al afacerii tale — pagini de servicii, despre noi, contact, blog. Construit rapid, cu design premium și performanță maximă. Structură gândită pentru conversie și SEO.', pills: ['WordPress', 'Vite', 'SEO', 'Analytics'], flex: '40%' },
              { tag: '', name: 'Landing Page', desc: 'O singură pagină cu un singur scop: să convertească. Ideal pentru campanii Google Ads sau lansări de produse. A/B testabil, rapid de iterat, ROI direct măsurabil.', pills: ['CRO', 'A/B testing', 'Google Ads ready', 'Speed'], flex: '36%' },
              { tag: '', name: 'Magazine online', desc: 'eCommerce cu experiență de cumpărare fluentă. Checkout optimizat, integrare plăți, management produse, integrare Google Merchant Center.', pills: ['WooCommerce', 'Stripe', 'Merchant Center', 'Stoc'], flex: '1' },
            ],
            [
              { tag: '', name: 'Redesign & Optimizare', desc: 'Site-ul vechi nu mai convertește? Analizăm datele existente (Hotjar, Analytics) și reconstruim ce nu funcționează. Uneori e o restructurare. Uneori e doar optimizare de viteză. Mereu pe baza datelor.', pills: ['Audit', 'UX', 'PageSpeed', 'CRO'], flex: '50%' },
              { tag: '', name: 'Aplicații Web', desc: 'Dashboard-uri, portale client, tool-uri interne. Când afacerea ta are nevoie de mai mult decât un site. Construim aplicații custom care rezolvă probleme reale.', pills: ['React', 'API', 'Auth', 'Dashboard'], flex: '1' },
            ],
          ].map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
              {row.map((card) => (
                <ScrollReveal key={card.name} direction="up" style={{ flex: card.flex }}>
                  <div style={{ background: '#FDFBF7', border: '1px solid rgba(23,23,32,0.09)', borderRadius: 22, padding: '30px 28px', display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
                    {card.tag && <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 8 }}>{card.tag}</div>}
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, color: '#171720', letterSpacing: '-0.02em', marginBottom: 10 }}>{card.name}</div>
                    <p style={{ fontSize: 14, color: '#6E6A7C', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{card.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {card.pills.map((p) => (
                        <span key={p} style={{ fontSize: 11, fontWeight: 500, color: '#6E6A7C', background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)', borderRadius: 100, padding: '3px 10px' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#171720', padding: '96px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', width: 500, height: 400, top: -100, right: -80, background: 'radial-gradient(circle, rgba(14,32,80,.5) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 56 }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Studiu de caz
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#F4F0E8' }}>Rata de conversie de la 1.2% la 4.1%.<br />Aceluiași trafic.</h2>
            </ScrollReveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <blockquote style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(20px, 2.2vw, 30px)', fontWeight: 700, color: '#F4F0E8', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: 28, fontStyle: 'italic' }}>
                „Aveam trafic bun din Google Ads, dar rata de conversie era sub 2%. După ce Antigravity a reconstruit landing page-ul, am văzut rezultate în prima săptămână. Nu am schimbat bugetul — am schimbat site-ul."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#162B6A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: 'white' }}>MP</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#F4F0E8' }}>Mihai Popa</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(244,240,232,0.3)', marginTop: 1 }}>Fondator · EcoShop.ro</div>
                </div>
              </div>
              <div style={{ fontSize: 14.5, color: 'rgba(244,240,232,0.58)', lineHeight: 1.7, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                <strong style={{ color: '#F4F0E8' }}>Contextul:</strong> Magazin online de produse ecologice. Trafic decent din Google Ads (~2000 vizitatori/lună) dar conversii slabe. Problema: site lent (4.2s loading), UX confuz pe mobile, checkout în 5 pași, zero trust signals.<br /><br />
                <strong style={{ color: '#F4F0E8' }}>Ce am făcut:</strong> Am reconstruit landing page-ul cu focus pe CRO: 1 pas checkout, testimoniale vizibile, social proof, viteză sub 1s.
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 32px 64px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.08)' }}>
                <div style={{ padding: '22px 28px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, color: '#F4F0E8' }}>EcoShop.ro · Web Redesign</span>
                  <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', fontWeight: 500, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', padding: '4px 10px', borderRadius: 100 }}>Feb → Mar 2024 · 3 săptămâni</span>
                </div>
                <div style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.025)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  {['Indicator', 'Înainte', 'După redesign'].map((h, i) => (
                    <span key={h} style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color: 'rgba(244,240,232,0.3)', textAlign: (i === 0 ? 'left' : i === 2 ? 'right' : 'center') as 'left' | 'right' | 'center' }}>{h}</span>
                  ))}
                </div>
                {[
                  { name: 'Rata de conversie', before: '1.2%', after: '4.1%', delta: '+242%' },
                  { name: 'Load time', before: '4.2s', after: '0.8s', delta: '-81%' },
                  { name: 'Bounce rate', before: '72%', after: '38%', delta: '-47%' },
                  { name: 'Vânzări/lună', before: '8,400 lei', after: '29,200 lei', delta: '+248%' },
                  { name: 'Mobile conv. rate', before: '0.8%', after: '3.9%', delta: '+388%' },
                  { name: 'Lighthouse Score', before: '41', after: '97', delta: '+137%', orange: true },
                ].map((row) => (
                  <div key={row.name} style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(244,240,232,0.58)' }}>{row.name}</span>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: 'rgba(244,240,232,0.3)', textAlign: 'center' }}>{row.before}</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: row.orange ? '#E8581A' : '#F4F0E8' }}>{row.after}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 100, background: 'rgba(16,185,129,.12)', color: '#10b981' }}>{row.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#FDFBF7', padding: '96px 56px' }} id="cum-lucram">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Procesul nostru
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Cum construim<br />site-ul tău.</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p style={{ fontSize: 17, color: '#6E6A7C', lineHeight: 1.7, marginTop: 14 }}>De la brief la lansare, fiecare pas e transparent, cu livrabile clare și feedback integrat. Nu dispărem după livrare.</p>
            </ScrollReveal>
          </div>

          {[
            { n: '01', t: 'Descoperire & Strategie', d: 'Înțelegem afacerea, publicul țintă, obiectivele și competitorii. Analizăm datele existente (dacă există). Stabilim structura, user flows și KPI-uri clare pentru noul site.', tags: ['Brief', 'Competitor audit', 'User flows', 'KPIs'] },
            { n: '02', t: 'Design & Prototipare', d: 'Wireframes, design system, componente vizuale. Toate deciziile de design sunt justificate prin UX și CRO. Prototipuri interactive pentru validare înainte de cod.', tags: ['Wireframes', 'Design system', 'Figma', 'CRO review'] },
            { n: '03', t: 'Development & Testare', d: 'Construim site-ul cu focus pe performanță: cod curat, responsive perfect, integrări API, setup analytics complet. QA pe 10+ browsere și device-uri.', tags: ['Development', 'Responsive', 'Analytics setup', 'QA'] },
            { n: '04', t: 'Lansare & Optimizare', d: 'Deploy, monitoring post-lansare, A/B testing pe elementele cheie. Nu dispărem după livrare — urmărim rezultatele și iterăm pe baza datelor reale.', tags: ['Deploy', 'A/B testing', 'Monitoring', 'CRO iterations'] },
          ].map((item, i) => (
            <ScrollReveal key={item.n} direction="up" delay={i * 0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderTop: '1px solid rgba(23,23,32,0.09)', padding: '32px 0', ...(i === 3 ? { borderBottom: '1px solid rgba(23,23,32,0.09)' } : {}) }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 36, fontWeight: 800, color: '#EDE8DE', letterSpacing: '-0.04em', lineHeight: 1, paddingTop: 4 }}>{item.n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, color: '#171720', letterSpacing: '-0.02em', marginBottom: 10 }}>{item.t}</div>
                  <p style={{ fontSize: 15, color: '#6E6A7C', lineHeight: 1.7, maxWidth: 660 }}>{item.d}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {item.tags.map((tag) => <span key={tag} style={{ fontSize: 11.5, fontWeight: 500, color: '#0E2050', background: 'rgba(14,32,80,0.06)', border: '1px solid rgba(14,32,80,0.12)', borderRadius: 100, padding: '4px 12px' }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F5F1E8', padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
            <ScrollReveal direction="left" style={{ position: 'sticky', top: 120 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Întrebări frecvente
              </div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Totul ce vrei<br />să știi despre<br />Web Development.</h2>
              <p style={{ fontSize: 17, color: '#6E6A7C', lineHeight: 1.7, marginTop: 14 }}>Nu găsești răspunsul? Scrie-ne direct — răspundem în mai puțin de 24h.</p>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 500, color: '#171720', border: '1px solid rgba(23,23,32,0.15)', background: 'transparent', padding: '11px 22px', borderRadius: 100, textDecoration: 'none' }}>
                  Pune o întrebare
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <FaqAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0E2050', padding: '110px 56px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(232,88,26,.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: 'rgba(232,88,26,.85)', marginBottom: 24 }}>
              <span style={{ display: 'block', width: 20, height: 2, background: 'rgba(232,88,26,.85)', borderRadius: 2 }} />
              Construim împreună
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(34px, 4.2vw, 60px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, color: '#F4F0E8', marginBottom: 20 }}>Un site care vinde,<br />nu doar arată bine.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ fontSize: 17, color: 'rgba(244,240,232,0.58)', lineHeight: 1.7, marginBottom: 44 }}>Consultație gratuită de 30 de minute. Îți spunem direct ce are nevoie afacerea ta și cât costă.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8581A', color: '#1c0800', fontSize: 15, fontWeight: 600, padding: '15px 32px', borderRadius: 100, textDecoration: 'none' }}>
                Discutăm proiectul tău
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </Link>
              <a href="tel:+40700000000" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F4F0E8', fontSize: 15, fontWeight: 500, padding: '15px 32px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Sună acum
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
