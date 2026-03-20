import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import JsonLd from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'SEO — Vizibilitate Organică Durabilă',
  description: 'Servicii SEO profesionale în România. Creștem traficul organic, îmbunătățim pozițiile în Google și construim autoritate de durată. Audit SEO gratuit.',
}

const faqItems = [
  { q: 'Cât durează SEO să dea rezultate?', a: 'Primele mișcări de poziție se văd după 6-10 săptămâni. Rezultate semnificative de trafic — între 3 și 6 luni, în funcție de competitivitatea nișei și starea actuală a site-ului. SEO nu e o soluție rapidă — e o investiție pe termen lung cu returns compuse.' },
  { q: 'De câți bani am nevoie pentru SEO?', a: 'SEO nu are "buget publicitar" ca Google Ads. Plătești serviciul de management/optimizare. Prețul variază în funcție de complexitate: un site local mic vs. un magazin online cu mii de produse sunt cu totul diferite. Îți spunem un număr concret după audit.' },
  { q: 'Pot face SEO și Google Ads simultan?', a: 'Nu doar că poți — e recomandat. Google Ads îți aduc trafic instant în timp ce SEO se construiește. Datele din Google Ads (ce cuvinte cheie convertesc) informează strategia SEO. Le construim să funcționeze împreună.' },
  { q: 'Ce se întâmplă cu pozițiile dacă oprim SEO?', a: 'Pozițiile se deteriorează treptat în 3-6 luni dacă competitorii continuă să lucreze la SEO. Spre deosebire de Google Ads care se opresc instant, SEO are un "momentum" care te protejează pe termen scurt. Dar pe termen lung, trebuie menținut.' },
  { q: 'Aveți garanție de rezultate?', a: 'Nu. Nicio agenție serioasă nu garantează poziții Google — pentru că Google, nu noi, decide. Ce garantăm: implementare corectă, transparență completă și o strategie bazată pe date. Orice agenție care "garantează #1 în Google" minte.' },
  { q: 'Funcționează SEO în orice industrie?', a: 'Da, cu mențiunea că competitivitatea diferă enorm. Un avocat specializat sau o clinică dentară dintr-un oraș mic poate ranka relativ rapid. E-commerce sau servicii financiare naționale cer mult mai mult timp și resurse. Îți spunem sincer dacă SEO e potrivit și rentabil pentru tine.' },
]

export default function SeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema('SEO', 'Optimizare pentru motoarele de căutare care construiește vizibilitate organică durabilă.', 'https://antigravity.ro/services/seo')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, top: -100, right: -60, borderRadius: '50%', filter: 'blur(100px)', background: 'radial-gradient(circle, rgba(16,185,129,0.13) 0%, transparent 70%)', animation: 'blob-drift 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 360, height: 360, bottom: 40, left: -80, borderRadius: '50%', filter: 'blur(100px)', background: 'radial-gradient(circle, rgba(14,32,80,0.55) 0%, transparent 70%)', animation: 'blob-drift 18s ease-in-out infinite reverse 3s' }} />

        <div style={{ position: 'relative', zIndex: 1, minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '112px 56px 80px', maxWidth: 1300, margin: '0 auto', gap: 60 }} className="hero-layout">
          <div style={{ flex: '0 0 52%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, padding: '5px 14px 5px 8px', fontSize: 11.5, fontWeight: 500, color: 'rgba(244,240,232,0.58)', letterSpacing: '0.05em', textTransform: 'uppercase', width: 'fit-content', marginBottom: 32, animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span style={{ width: 7, height: 7, background: '#10b981', borderRadius: '50%', flexShrink: 0, animation: 'pulse-ring 2.4s ease-in-out infinite' }} />
              Serviciu Principal · SEO
            </div>
            <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(42px, 4.8vw, 78px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em', color: '#F4F0E8', marginBottom: 24 }}>
              <span style={{ display: 'block', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s' }}>Fii găsit de clienți</span>
              <span style={{ display: 'block', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s' }}>înainte să audă</span>
              <span style={{ display: 'block', color: '#10b981', opacity: 0, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s' }}>de competitori.</span>
            </h1>
            <p style={{ fontSize: 17, fontWeight: 400, color: 'rgba(244,240,232,0.58)', lineHeight: 1.72, maxWidth: 440, marginBottom: 40, opacity: 0, animation: 'hero-up 0.7s ease forwards 0.78s' }}>
              Optimizare pentru motoarele de căutare care construiește vizibilitate organică durabilă. Trafic calificat, fără să plătești per click — cu fiecare lună mai mult.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 52, opacity: 0, animation: 'hero-up 0.7s ease forwards 0.92s' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8581A', color: '#1c0800', fontSize: 14.5, fontWeight: 600, padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}>
                Audit SEO gratuit
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="14" x2="14" y2="2"/><polyline points="4,2 14,2 14,12"/></svg>
              </Link>
              <a href="#cum-lucram" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F4F0E8', fontSize: 14.5, fontWeight: 500, padding: '13px 26px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)' }}>
                Cum lucrăm
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, opacity: 0, animation: 'hero-up 0.7s ease forwards 1.06s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>+<span style={{ color: '#10b981' }}>318</span>%</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Trafic organic mediu</span>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}><span style={{ color: '#10b981' }}>4.2</span> luni</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Timp mediu ranking</span>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 26, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}><span style={{ color: '#10b981' }}>140</span>+</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Keyword-uri în top 3</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - SEO Rankings Card */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 500, opacity: 0, animation: 'hero-fade 1s ease forwards 0.4s' }}>
            <div style={{ position: 'absolute', top: 28, left: -60, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '14px 16px', zIndex: 3, animation: 'mini-a 7.5s ease-in-out infinite' }}>
              <div style={{ fontSize: 9.5, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>Domain Authority</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>47</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#10b981', marginTop: 5 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                +12 puncte
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 24, padding: 24, width: 320, position: 'relative', zIndex: 2, boxShadow: '0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.09)', animation: 'card-float 6.5s ease-in-out infinite' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Keyword Rankings</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(16,185,129,.10)', border: '1px solid rgba(16,185,129,.22)', color: '#10b981', fontSize: 10.5, fontWeight: 600, padding: '3px 9px', borderRadius: 100 }}>
                  <span style={{ width: 5, height: 5, background: '#10b981', borderRadius: '50%', animation: 'blink 1.6s ease-in-out infinite' }} />
                  Live
                </span>
              </div>
              {[
                { kw: 'servicii constructii', before: '#34', after: '#2', up: '↑32' },
                { kw: 'instalator urgenta bucuresti', before: '#41', after: '#1', up: '↑40' },
                { kw: 'firma constructii cluj', before: '#22', after: '#4', up: '↑18' },
                { kw: 'renovari apartamente', before: '#29', after: '#3', up: '↑26' },
              ].map((row) => (
                <div key={row.kw} style={{ display: 'grid', gridTemplateColumns: '1fr 52px 52px', gap: 8, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 12.5, color: 'rgba(244,240,232,0.58)' }}>{row.kw}</span>
                  <span style={{ fontSize: 12, color: 'rgba(244,240,232,0.3)', textAlign: 'center', textDecoration: 'line-through' }}>{row.before}</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 800, color: '#F4F0E8' }}>{row.after}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#10b981' }}>{row.up}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="#10b981" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: '#10b981' }}>+318%</span>
                <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)' }}>Trafic organic față de luna 1</span>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 36, right: -52, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '14px 16px', zIndex: 3, animation: 'mini-b 6.8s ease-in-out infinite 1.2s' }}>
              <div style={{ fontSize: 9.5, fontWeight: 500, color: 'rgba(244,240,232,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>Backlink-uri</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, color: '#F4F0E8', letterSpacing: '-0.03em' }}>284</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#10b981', marginTop: 5 }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                +91 luna aceasta
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div style={{ position: 'absolute', bottom: 32, left: 56, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(244,240,232,0.3)', zIndex: 2 }}>
            <Link href="/" style={{ color: 'rgba(244,240,232,0.3)', textDecoration: 'none' }}>Acasă</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/#servicii" style={{ color: 'rgba(244,240,232,0.3)', textDecoration: 'none' }}>Servicii</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: '#E8581A' }}>SEO</span>
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ lineHeight: 0, position: 'relative', zIndex: 2 }}>
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,64 Q360,0 720,32 Q1080,64 1440,8 L1440,64 Z" fill="#FDFBF7"/>
          </svg>
        </div>
      </div>

      {/* WHY SEO */}
      <section style={{ background: '#FDFBF7', padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
            <ScrollReveal direction="left" style={{ position: 'sticky', top: 120 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                De ce SEO
              </div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.025em', color: '#171720', marginTop: 20, marginBottom: 28 }}>
                Oamenii care caută pe Google sunt deja la jumătatea drumului spre decizia de cumpărare. <strong style={{ color: '#0E2050' }}>Tu ești acolo?</strong>
              </h2>
              <p style={{ fontSize: 15.5, color: '#6E6A7C', lineHeight: 1.7 }}>
                SEO nu e o cheltuială — e infrastructura de marketing care funcționează 24/7, fără să plătești per click. Odată construită, te aduce clienți lună de lună.
              </p>
            </ScrollReveal>

            <div>
              {[
                { n: '01', t: 'Trafic fără cost per click', d: 'Odată ce ești pe prima pagină Google, fiecare vizitator vine gratuit. Nu există cost per click, nu depinzi de bugete, nu te oprești când banii se termină. SEO e investiția care se plătește singură.' },
                { n: '02', t: 'Credibilitate organică', d: 'Utilizatorii au mai multă încredere în rezultatele organice decât în reclame. A fi în top 3 organic spune că Google te consideră relevant și de autoritate — nu că ți-ai plătit locul.' },
                { n: '03', t: 'Trafic compus, nu linear', d: 'Spre deosebire de reclame plătite care se opresc imediat, SEO funcționează exponențial. Fiecare articol, fiecare backlink, fiecare optimizare adaugă la un total care crește lunar.' },
                { n: '04', t: 'Targetare intenție, nu demografie', d: 'Targetezi exact ce caută oamenii, nu cine sunt. „Avocat dreptul muncii București" e un client mult mai calificat decât oricine din București, 25-45 ani, interesat de „probleme la muncă".' },
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
      <section style={{ background: '#F5F1E8', padding: '96px 56px' }} id="servicii">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 52 }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Ce includem
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Componente SEO<br />care fac diferența.</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p style={{ fontSize: 17, color: '#6E6A7C', lineHeight: 1.7, marginTop: 14, maxWidth: 520 }}>SEO eficient nu e o singură tehnică — e un sistem integrat. Fiecare componentă susține celelalte și împreună construiesc autoritate durabilă.</p>
            </ScrollReveal>
          </div>

          <div style={{ display: 'flex', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
            {[
              { tag: 'Fundație', name: 'SEO On-Page', desc: 'Optimizarea elementelor de pe site pentru relevanță maximă. Title tags, meta descriptions, structură heading, optimizare imagini, internal linking strategic. Baza oricărei strategii SEO serioase.', pills: ['Title tags', 'Meta', 'H1-H6', 'Schema markup', 'Imagini'], feat: true, flex: '44%' },
              { tag: '', name: 'SEO Tehnic', desc: 'Asigurăm că site-ul tău poate fi crawlat și indexat corect de Google. Viteza de încărcare, structura URL, sitemap, robots.txt, Core Web Vitals. Fără o bază tehnică solidă, orice altceva e inutil.', pills: ['Core Web Vitals', 'Crawlability', 'Indexare', 'PageSpeed'], feat: false, flex: '32%' },
              { tag: '', name: 'Cercetare Cuvinte Cheie', desc: 'Identificăm exact ce caută clienții tăi și cu ce intenție. Volumul de căutare, dificultatea, oportunitatea. Construim harta cuvintelor cheie care ghidează întreaga strategie.', pills: ['Volum', 'Intenție', 'Gap analysis'], feat: false, flex: '1' },
            ].map((card) => (
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

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {[
              { tag: 'Impact maxim', name: 'Link Building', desc: 'Obținerea de backlink-uri de calitate de pe site-uri cu autoritate ridicată. Cel mai dificil și cel mai valoros aspect al SEO. Fiecare link relevant e un vot de încredere în fața Google.', pills: ['Guest posting', 'Outreach', 'PR digital', 'Nișă relevantă'], feat: true, flex: '38%' },
              { tag: '', name: 'Content SEO', desc: 'Creăm și optimizăm conținut care răspunde la exact ceea ce caută audiența ta. Articole, pagini de servicii, studii de caz — toate optimizate pentru a ranka și a converti.', pills: ['Blogging', 'Pagini servicii', 'Ghiduri', 'FAQs'], feat: false, flex: '1' },
            ].map((card) => (
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
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#171720', padding: '96px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', width: 500, height: 400, top: -100, right: -80, background: 'radial-gradient(circle, rgba(16,185,129,.18) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 56 }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#E8581A', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 20, height: 2, background: '#E8581A', borderRadius: 2 }} />
                Studiu de caz
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#F4F0E8' }}>De la pagina 4 la<br />#1 în Google. 5 luni.</h2>
            </ScrollReveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <blockquote style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(20px, 2.2vw, 30px)', fontWeight: 700, color: '#F4F0E8', lineHeight: 1.35, letterSpacing: '-0.02em', marginBottom: 28, fontStyle: 'italic' }}>
                „Căutam un partener care să ne înțeleagă industria. Antigravity nu a venit cu template-uri — a venit cu o strategie personalizată. În 5 luni, traficul organic s-a triplat."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#162B6A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, color: 'white' }}>AI</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#F4F0E8' }}>Andreea Ionescu</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(244,240,232,0.3)', marginTop: 1 }}>Marketing Manager · Clinica Vita</div>
                </div>
              </div>
              <div style={{ fontSize: 14.5, color: 'rgba(244,240,232,0.58)', lineHeight: 1.7, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                <strong style={{ color: '#F4F0E8' }}>Contextul:</strong> Clinică medicală privată din Cluj-Napoca. Site vechi, fără structură SEO, zero backlink-uri relevante. Principala problemă: competitorii dominau toate căutările locale importante.<br /><br />
                <strong style={{ color: '#F4F0E8' }}>Ce am făcut:</strong> Am implementat SEO tehnic, restructurare completă a paginilor de servicii și o campanie de content targeting 40+ cuvinte cheie locale.
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 32px 64px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.08)' }}>
                <div style={{ padding: '22px 28px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, color: '#F4F0E8' }}>Clinica Vita · SEO Organic</span>
                  <span style={{ fontSize: 11, color: 'rgba(244,240,232,0.3)', fontWeight: 500, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', padding: '4px 10px', borderRadius: 100 }}>Ian → Iun 2024 · 5 luni</span>
                </div>
                <div style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.025)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  {['Indicator', 'Înainte', 'După 5 luni'].map((h, i) => (
                    <span key={h} style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color: 'rgba(244,240,232,0.3)', textAlign: (i === 0 ? 'left' : i === 2 ? 'right' : 'center') as 'left' | 'right' | 'center' }}>{h}</span>
                  ))}
                </div>
                {[
                  { name: 'Poziție medie', before: '#34', after: '#3.2', delta: '+91%' },
                  { name: 'Trafic organic/lună', before: '1,240', after: '5,180', delta: '+318%' },
                  { name: 'Cuvinte cheie top 10', before: '8', after: '67', delta: '+738%' },
                  { name: 'Rata conversie', before: '1.4%', after: '3.8%', delta: '+171%' },
                  { name: 'Leaduri din organic', before: '12', after: '89', delta: '+642%' },
                  { name: 'Domain Authority', before: '18', after: '34', delta: '+89%' },
                ].map((row) => (
                  <div key={row.name} style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(244,240,232,0.58)' }}>{row.name}</span>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: 'rgba(244,240,232,0.3)', textAlign: 'center' }}>{row.before}</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 700, color: '#F4F0E8' }}>{row.after}</span>
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
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Cum construim<br />strategia ta SEO.</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p style={{ fontSize: 17, color: '#6E6A7C', lineHeight: 1.7, marginTop: 14 }}>Fiecare pas e documentat, transparent și cu obiective măsurabile atașate. Nu lucrăm cu template-uri — adaptăm la industria și obiectivele tale.</p>
            </ScrollReveal>
          </div>

          {[
            { n: '01', t: 'Audit SEO Complet', d: 'Analizăm starea curentă: indexare, viteza, structura, backlink-uri toxice, keyword gaps. Obținem o imagine completă a punctelor slabe și a oportunităților cu potențial rapid.', tags: ['Site audit', 'Competitor gap', 'Keyword map', 'Technical check'] },
            { n: '02', t: 'Strategie & Prioritizare', d: 'Pe baza auditului, construim o roadmap clară: ce optimizăm mai întâi pentru impact rapid, ce construim pe termen mediu și lung. Fiecare acțiune are un obiectiv măsurabil atașat.', tags: ['Roadmap 90 zile', 'Quick wins', 'Keyword clustering'] },
            { n: '03', t: 'Implementare & Content', d: 'Optimizări on-page, corectări tehnice, producție de conținut optimizat, campanie de link building. Lucrăm direct în CMS sau cu echipa ta tech.', tags: ['On-page', 'Link building', 'Content creation', 'Technical fixes'] },
            { n: '04', t: 'Monitorizare & Raportare', d: 'Track al pozițiilor, traficului și conversiilor. Raport lunar cu ce s-a schimbat, de ce, și ce urmează. Ajustăm strategia în funcție de date, nu de presupuneri.', tags: ['Rank tracking', 'Traffic analysis', 'Monthly report', 'Strategy update'] },
          ].map((item, i) => (
            <ScrollReveal key={item.n} direction="up" delay={i * 0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', borderTop: '1px solid rgba(23,23,32,0.09)', padding: '32px 0', ...(i === 3 ? { borderBottom: '1px solid rgba(23,23,32,0.09)' } : {}) }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 36, fontWeight: 800, color: '#EDE8DE', letterSpacing: '-0.04em', lineHeight: 1, paddingTop: 4 }}>{item.n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, color: '#171720', letterSpacing: '-0.02em', marginBottom: 10 }}>{item.t}</div>
                  <p style={{ fontSize: 15, color: '#6E6A7C', lineHeight: 1.7, maxWidth: 660 }}>{item.d}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {item.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11.5, fontWeight: 500, color: '#0E2050', background: 'rgba(14,32,80,0.06)', border: '1px solid rgba(14,32,80,0.12)', borderRadius: 100, padding: '4px 12px' }}>{tag}</span>
                    ))}
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
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(30px, 3.2vw, 50px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#171720' }}>Totul ce vrei<br />să știi despre<br />SEO.</h2>
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
        <div style={{ position: 'absolute', width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(16,185,129,.14) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: 'rgba(232,88,26,.85)', marginBottom: 24 }}>
              <span style={{ display: 'block', width: 20, height: 2, background: 'rgba(232,88,26,.85)', borderRadius: 2 }} />
              Gata să urcăm?
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(34px, 4.2vw, 60px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08, color: '#F4F0E8', marginBottom: 20 }}>Audit SEO gratuit<br />pentru site-ul tău.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ fontSize: 17, color: 'rgba(244,240,232,0.58)', lineHeight: 1.7, marginBottom: 44 }}>30 de minute. Îți arătăm exact unde ești acum, unde poți ajunge și ce strategie îți recomandăm.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8581A', color: '#1c0800', fontSize: 15, fontWeight: 600, padding: '15px 32px', borderRadius: 100, textDecoration: 'none' }}>
                Vreau auditul gratuit
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </Link>
              <a href="tel:+40700000000" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F4F0E8', fontSize: 15, fontWeight: 500, padding: '15px 32px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Sună acum
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontSize: 13, color: 'rgba(244,240,232,0.3)', marginTop: 24 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
              Fără obligații · Audit 100% gratuit · Răspuns în 24h
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
