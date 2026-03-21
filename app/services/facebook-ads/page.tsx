import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Facebook Ads — Targetare Precisă, Rezultate Măsurabile',
  description: 'Campanii Facebook & Instagram Ads gestionate de experți. ROAS mediu 4.8×, -71% cost per lead, audiență 8M+ utilizatori RO. Audit gratuit.',
  alternates: { canonical: 'https://antigravitydigital.ro/services/facebook-ads' },
  openGraph: {
    title: 'Facebook Ads | Antigravity Digital',
    images: ['/og/facebook-ads.jpg'],
  },
}

const faqItems = [
  {
    question: 'Care e diferența dintre Google Ads și Facebook Ads?',
    answer: 'Google Ads captează cererea existentă — oameni care caută activ un produs/serviciu. Facebook Ads creează cerere — ajungi la oameni înainte să știe că au nevoie de tine, cu creative vizuale puternice. Ideal e să le combini.',
  },
  {
    question: 'Ce buget minim recomandați pentru Facebook Ads?',
    answer: 'Minimum 1.000–1.500 lei/lună (200–300€) pentru a ieși din faza de învățare și a genera date utile. Sub această sumă, algoritmul nu are suficient volum să optimizeze eficient.',
  },
  {
    question: 'Facebook Ads funcționează și pentru B2B?',
    answer: 'Da, cu targetare corectă (job title, industrie, comportamente profesionale) și creative adaptate. Nu e la fel de precis ca LinkedIn Ads pentru B2B nișat, dar costul per lead e de obicei mult mai mic.',
  },
  {
    question: 'Cum afectează iOS14+ tracking-ul campaniilor?',
    answer: 'iOS14 a redus semnalele din pixel. Compensăm prin Conversions API (server-side tracking), agregarea evenimentelor și modelarea conversiilor. Rezultatele sunt în continuare măsurabile și optimizabile.',
  },
  {
    question: 'Cât durează faza de învățare?',
    answer: 'Algoritmul Meta are nevoie de ~50 de conversii pe set de anunțuri pentru a ieși din faza de învățare. De obicei 7–14 zile cu buget adecvat. În această perioadă costurile pot fi mai variabile.',
  },
  {
    question: 'Voi fi implicat în crearea creative-urilor?',
    answer: 'Da. Procesul nostru include un brief detaliat cu tine pentru a înțelege brandul, tonul și produsele. Tu aprobi toate creative-urile înainte de lansare. Noi producem, tu decizi.',
  },
]

export default function FacebookAdsPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Facebook Ads', 'Campanii Facebook & Instagram Ads cu ROAS mediu 4.8× și -71% cost per lead.', 'https://antigravitydigital.ro/services/facebook-ads')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />

        <section className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center mx-auto gap-8 md:gap-[60px] px-5 pt-24 pb-12 md:px-14 md:pt-28 md:pb-20" style={{ minHeight: '100dvh', maxWidth: 1300 }} aria-label="Facebook Ads hero">
          <div className="flex flex-col w-full md:w-auto" style={{ flex: '0 0 auto' }}>
            <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
              Serviciu · Meta Ads
            </div>
            <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 4.8vw, 78px)', lineHeight: 1.04 }}>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>8 milioane de</span>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s', opacity: 0 }}>români. Tu alegi</span>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s', opacity: 0 }}>
                pe care îi <span className="text-orange">targetezi.</span>
              </span>
            </h1>
            <p className="text-[#F4F0E8] mb-10 max-w-[520px]" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.78s', opacity: 0 }}>
              Facebook & Instagram Ads cu targetare demografică, comportamentală și de interes. Ajungem la publicul tău ideal — nu la toată lumea, ci la cei care cumpără.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.94s', opacity: 0 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '14px 32px', fontSize: 15.5, boxShadow: '0 0 0 0 rgba(232,88,26,0.5)' }}>
                Audit Meta Ads gratuit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(244,240,232,0.82)', padding: '14px 28px', fontSize: 15.5 }}>
                Vezi case studies
              </Link>
            </div>
            <div className="flex gap-8 mt-12" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 1.1s', opacity: 0 }}>
              {[
                { value: '4.8×', label: 'ROAS mediu' },
                { value: '-71%', label: 'cost per lead' },
                { value: '8M+', label: 'utilizatori RO' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-head font-extrabold text-[#F4F0E8]" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)' }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(244,240,232,0.5)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FB Ad Preview Card */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative" style={{ animation: 'hero-fade 1s cubic-bezier(0.16,1,0.3,1) forwards 0.5s', opacity: 0 }}>
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '100%', maxWidth: 340, background: '#fff', boxShadow: '0 32px 80px rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Ad Header */}
              <div className="flex items-center gap-3 p-4" style={{ borderBottom: '1px solid #f0f0f0' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #E8581A, #1877F2)' }}>AG</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm" style={{ color: '#050505' }}>Antigravity Digital</div>
                  <div className="text-xs flex items-center gap-1" style={{ color: '#65676B' }}>
                    Sponsorizat · <svg width="10" height="10" viewBox="0 0 16 16" fill="#65676B" aria-hidden="true"><circle cx="8" cy="8" r="7"/></svg> Publicul tău
                  </div>
                </div>
                <div style={{ color: '#65676B', fontSize: 20 }}>···</div>
              </div>
              {/* Ad Image Placeholder */}
              <div className="w-full flex items-center justify-center" style={{ height: 180, background: 'linear-gradient(135deg, #1877F2 0%, #0E2050 100%)' }}>
                <div className="text-center text-white p-6">
                  <div className="text-4xl font-bold mb-1">4.8×</div>
                  <div className="text-sm opacity-80">ROAS mediu clienți noștri</div>
                </div>
              </div>
              {/* Ad Body */}
              <div className="p-4" style={{ background: '#f0f2f5' }}>
                <div className="text-xs uppercase font-semibold mb-1" style={{ color: '#65676B', letterSpacing: '0.04em' }}>antigravitydigital.ro</div>
                <div className="font-bold text-sm mb-1" style={{ color: '#050505' }}>Campanii Meta Ads care vând</div>
                <div className="text-xs" style={{ color: '#65676B' }}>Targetare precisă. Creative care convertesc.</div>
              </div>
              {/* Ad Metrics */}
              <div className="grid grid-cols-3 divide-x" style={{ borderTop: '1px solid #e0e0e0' }}>
                {[
                  { val: '3.8×', lbl: 'ROAS' },
                  { val: '€4.20', lbl: 'CPM' },
                  { val: '2.1%', lbl: 'CTR' },
                ].map(m => (
                  <div key={m.lbl} className="flex flex-col items-center py-3">
                    <div className="font-bold text-sm" style={{ color: '#1877F2' }}>{m.val}</div>
                    <div className="text-[10px] uppercase tracking-wide" style={{ color: '#65676B' }}>{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini-cards */}
            <div className="absolute flex flex-col gap-2 text-white rounded-xl px-4 py-3" style={{ left: -28, top: '28%', background: 'rgba(20,22,35,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-a 6s ease-in-out infinite', minWidth: 130 }}>
              <div className="text-[10px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.55)' }}>Cost per Lead</div>
              <div className="font-bold text-lg text-green">-52%</div>
            </div>
            <div className="absolute flex flex-col gap-2 text-white rounded-xl px-4 py-3" style={{ right: -24, bottom: '30%', background: 'rgba(20,22,35,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-b 7s ease-in-out infinite', minWidth: 130 }}>
              <div className="text-[10px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.55)' }}>Reach</div>
              <div className="font-bold text-lg text-orange">2.4M</div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY META ADS */}
      <section style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="De ce Meta Ads">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[80px]">
            <div className="hidden md:block sticky top-24 self-start" style={{ flex: '0 0 340px' }}>
              <ScrollReveal>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">De ce Meta Ads</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-6" style={{ fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: 1.1 }}>
                  Audiența ta e pe Facebook & Instagram. Noi o găsim.
                </h2>
                <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7 }}>
                  Meta Ads nu înseamnă doar boost-uri de postări. Înseamnă campanii cu strategie, creative testată și optimizare continuă care aduce ROAS real.
                </p>
              </ScrollReveal>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: '👥',
                  title: 'Audiență 8M+',
                  desc: 'Acces la 8 milioane de utilizatori activi în România. Targetare demografică, geografică, comportamentală și de interes cu precizie chirurgicală.',
                },
                {
                  icon: '🎨',
                  title: 'Creative care vinde',
                  desc: 'Producem sau optimizăm creative-uri (imagini, video, carousel) testate A/B constant. Ce nu performează — tăiem. Ce merge — scalăm.',
                },
                {
                  icon: '🎯',
                  title: 'Retargeting precis',
                  desc: 'Reconvertim vizitatorii site-ului, abandonatorii de coș și audiențele similare clienților tăi actuali. Fiecare leu de buget contează.',
                },
                {
                  icon: '📊',
                  title: 'Raportare transparentă',
                  desc: 'Dashboard live cu ROAS, CPM, CPA, reach și frecvență. Știi exact unde merge fiecare leu și ce rezultate produce.',
                },
              ].map(item => (
                <ScrollReveal key={item.title}>
                  <div className="rounded-2xl p-7 h-full" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-head font-bold text-charcoal mb-3" style={{ fontSize: 18 }}>{item.title}</h3>
                    <p style={{ color: '#666', fontSize: 15, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AD FORMATS */}
      <section style={{ background: '#F4F0E8', padding: '100px 56px' }} aria-label="Formate anunțuri">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Ce includem</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: 1.1 }}>
                Toate formatele Meta Ads
              </h2>
              <p style={{ color: '#666', fontSize: 17, lineHeight: 1.65, maxWidth: 560, margin: '0 auto' }}>
                De la awareness la conversie. Alegem formatele potrivite pentru obiectivul și publicul tău.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap gap-5 justify-center">
            {[
              {
                title: 'Image & Carousel Ads',
                desc: 'Anunțuri vizuale cu 1–10 carduri. Ideal pentru produse multiple, beneficii cheie sau storytelling secvențial.',
                tag: 'Cel mai popular',
              },
              {
                title: 'Video Ads',
                desc: 'Video scurt (6–30s) cu hook puternic. Cel mai mare reach organic și cel mai bun CPM pentru awareness.',
                tag: 'Reach maxim',
              },
              {
                title: 'Lead Generation Ads',
                desc: 'Formulare native în Facebook care capturează lead-uri fără să scoți utilizatorul din aplicație. Conversie ridicată.',
                tag: 'B2B & servicii',
              },
              {
                title: 'Story & Reels Ads',
                desc: 'Format vertical full-screen pe Instagram și Facebook Stories. Engagement ridicat la CPM mic.',
                tag: 'Instagram first',
              },
              {
                title: 'Dynamic Product Ads',
                desc: 'Catalog de produse afișat automat utilizatorilor care au vizitat produse similare. Perfect pentru eCommerce.',
                tag: 'eCommerce',
              },
              {
                title: 'Messenger Ads',
                desc: 'Anunțuri care deschid conversații directe pe Messenger. Ideal pentru servicii cu ciclu de vânzare consultativ.',
                tag: 'High-intent',
              },
            ].map(format => (
              <ScrollReveal key={format.title}>
                <div className="rounded-2xl p-7" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', width: '100%', maxWidth: 340, minHeight: 190 }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-head font-bold text-charcoal" style={{ fontSize: 17 }}>{format.title}</h3>
                    <span className="text-[11px] font-semibold rounded-full px-3 py-1 ml-3 flex-shrink-0" style={{ background: '#FFF0E8', color: '#E8581A', border: '1px solid rgba(232,88,26,0.2)' }}>{format.tag}</span>
                  </div>
                  <p style={{ color: '#666', fontSize: 14.5, lineHeight: 1.65 }}>{format.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: '#1A1B25', padding: '100px 56px' }} aria-label="Case study BeautyBox">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Case Study</p>
              <h2 className="font-head font-extrabold tracking-tight text-[#F4F0E8] mb-4" style={{ fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: 1.1 }}>
                BeautyBox.ro — de la 1.2× la 4.8× ROAS în 90 de zile
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
            <ScrollReveal>
              <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th className="text-left pb-3 text-sm font-semibold" style={{ color: 'rgba(244,240,232,0.45)' }}>Metrică</th>
                      <th className="text-right pb-3 text-sm font-semibold" style={{ color: 'rgba(244,240,232,0.45)' }}>Înainte</th>
                      <th className="text-right pb-3 text-sm font-semibold" style={{ color: 'rgba(244,240,232,0.45)' }}>După</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'ROAS', before: '1.2×', after: '4.8×' },
                      { metric: 'Cost per achiziție', before: '€38', after: '€11' },
                      { metric: 'Reach lunar', before: '42K', after: '840K' },
                      { metric: 'Vânzări / lună', before: '€8,200', after: '€47,600' },
                    ].map(row => (
                      <tr key={row.metric} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td className="py-4 text-sm" style={{ color: 'rgba(244,240,232,0.7)' }}>{row.metric}</td>
                        <td className="py-4 text-right text-sm font-medium" style={{ color: 'rgba(244,240,232,0.45)' }}>{row.before}</td>
                        <td className="py-4 text-right text-sm font-bold text-green">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ background: 'linear-gradient(135deg, #E8581A, #1877F2)' }}>A</div>
                  <div>
                    <div className="font-semibold" style={{ color: '#F4F0E8', fontSize: 17 }}>Andreea M.</div>
                    <div style={{ color: 'rgba(244,240,232,0.5)', fontSize: 14 }}>Fondator, BeautyBox.ro</div>
                  </div>
                </div>
                <blockquote className="italic" style={{ color: 'rgba(244,240,232,0.8)', fontSize: 18, lineHeight: 1.7, borderLeft: '3px solid #E8581A', paddingLeft: 20 }}>
                  "Am avut senzația că aruncăm bani pe Facebook fără rezultat. Antigravity a restructurat totul — de la audiențe la creative — și în 3 luni ne-am triplat vânzările din Meta."
                </blockquote>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { val: '+480%', lbl: 'vânzări / lună' },
                    { val: '×20', lbl: 'reach față de înainte' },
                  ].map(s => (
                    <div key={s.lbl} className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="font-head font-extrabold text-2xl text-orange mb-1">{s.val}</div>
                      <div style={{ color: 'rgba(244,240,232,0.55)', fontSize: 13 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AUDIENCE TARGETING */}
      <section style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="Targetare audiență">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[80px] items-start md:items-center">
            <ScrollReveal className="w-full md:w-[48%] md:flex-none">
              <div>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Targetare</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-6" style={{ fontSize: 'clamp(28px, 2.5vw, 42px)', lineHeight: 1.1 }}>
                  Ajungem la oamenii care cumpără, nu la toată lumea
                </h2>
                <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                  Targetare prin interese, comportamente, date demografice și audiențe personalizate (lookalike, remarketing). Fiecare campanie e construită pe date, nu pe intuiție.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Lookalike audiences din clienții tăi actuali',
                    'Retargeting pe 3 niveluri de temperatură',
                    'Excluderi inteligente pentru CPM optim',
                    'Testare A/B continuă pe audiențe și creative',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3" style={{ color: '#555', fontSize: 15 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="9" cy="9" r="9" fill="#E8581A" opacity="0.15"/>
                        <path d="M5 9l3 3 5-5" stroke="#E8581A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full md:flex-1">
              <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
                <div className="text-sm font-semibold mb-4" style={{ color: '#65676B' }}>Estimare audiență — Femei 25–44, București, Interes: Fashion</div>
                <div className="rounded-xl p-5 mb-4" style={{ background: '#f0f2f5' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium" style={{ color: '#050505' }}>Reach estimat</span>
                    <span className="font-bold" style={{ color: '#1877F2', fontSize: 18 }}>180K – 340K</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: 8, background: '#dde1e9' }}>
                    <div className="h-full rounded-full" style={{ width: '62%', background: 'linear-gradient(90deg, #1877F2, #E8581A)' }} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs" style={{ color: '#65676B' }}>
                    <span>Prea specific</span>
                    <span style={{ color: '#1877F2', fontWeight: 600 }}>Bun</span>
                    <span>Prea larg</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { lbl: 'Vârstă', val: '25–44' },
                    { lbl: 'Gen', val: 'Femei' },
                    { lbl: 'Locație', val: 'București' },
                  ].map(f => (
                    <div key={f.lbl} className="rounded-lg p-3 text-center" style={{ background: '#f0f2f5' }}>
                      <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: '#65676B' }}>{f.lbl}</div>
                      <div className="font-semibold text-sm" style={{ color: '#050505' }}>{f.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#FDFAF5', padding: '0 56px 100px' }} aria-label="Proces de lucru">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Cum lucrăm</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal" style={{ fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: 1.1 }}>
                De la zero la campanie profitabilă
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Audit & Audiență', desc: 'Analizăm contul existent (sau pornim de la zero), definim personas, audiențele sursă și obiectivele de conversie.', tag: 'Săptămâna 1' },
              { num: '02', title: 'Creative Development', desc: 'Producem sau optimizăm imaginile și video-urile. Scriem copy-ul cu hook, body și CTA testate. Configurăm pixel + CAPI.', tag: 'Săptămânile 1–2' },
              { num: '03', title: 'Lansare & Faza de Învățare', desc: 'Lansăm campaniile, monitorizăm daily, ajustăm bid-uri și audiențe pentru a ieși din learning phase cât mai repede.', tag: 'Săptămânile 2–4' },
              { num: '04', title: 'Scale & Optimizare', desc: 'Ce performează — scalăm. Ce nu — tăiem. Introducem formate noi, testăm creative-uri noi, raportăm lunar.', tag: 'Ongoing' },
            ].map(step => (
              <ScrollReveal key={step.num}>
                <div className="flex flex-col h-full rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                  <div className="font-head font-extrabold mb-4" style={{ fontSize: 48, color: 'rgba(232,88,26,0.12)', lineHeight: 1 }}>{step.num}</div>
                  <h3 className="font-head font-bold text-charcoal mb-3" style={{ fontSize: 18 }}>{step.title}</h3>
                  <p style={{ color: '#666', fontSize: 14.5, lineHeight: 1.65, flex: 1 }}>{step.desc}</p>
                  <div className="mt-5 inline-block text-[11px] font-semibold rounded-full px-3 py-1" style={{ background: '#FFF0E8', color: '#E8581A', border: '1px solid rgba(232,88,26,0.2)' }}>{step.tag}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F4F0E8', padding: '100px 56px' }} aria-label="Întrebări frecvente">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[80px]">
            <div className="hidden md:block sticky top-24 self-start" style={{ flex: '0 0 340px' }}>
              <ScrollReveal>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">FAQ</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)', lineHeight: 1.1 }}>
                  Întrebări frecvente despre Meta Ads
                </h2>
                <p style={{ color: '#666', fontSize: 15, lineHeight: 1.7 }}>
                  Nu găsești răspunsul?{' '}
                  <Link href="/contact" className="text-orange underline underline-offset-2">Scrie-ne direct.</Link>
                </p>
              </ScrollReveal>
            </div>
            <div className="flex-1">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0E1E50', padding: '100px 56px' }} aria-label="Call to action">
        <div className="mx-auto text-center" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-4">Începe azi</p>
            <h2 className="font-head font-extrabold tracking-tight text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.1 }}>
              Testează Facebook Ads cu un audit gratuit
            </h2>
            <p style={{ color: 'rgba(244,240,232,0.65)', fontSize: 18, lineHeight: 1.65, marginBottom: 40 }}>
              Analizăm contul tău actual (sau situația de la zero) și îți spunem exact ce oportunități există. Fără costuri ascunse.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '16px 40px', fontSize: 16.5, boxShadow: '0 8px 32px rgba(232,88,26,0.35)' }}>
              Vreau audit gratuit
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3.5 9h11M10 5l4.5 4L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
