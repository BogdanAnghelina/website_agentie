import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Google Ads — Campanii PPC cu ROI Maxim',
  description: 'Campanii Google Ads gestionate de experți. ROI mediu 4.7x, tracking complet, optimizare zilnică. Consultație gratuită.',
  alternates: { canonical: 'https://antigravitydigital.ro/services/google-ads' },
  openGraph: {
    title: 'Google Ads | Antigravity Digital',
    images: ['/og/google-ads.jpg'],
  },
}

const faqItems = [
  {
    question: 'Ce buget minim am nevoie pentru Google Ads?',
    answer: 'Recomandăm un buget lunar de minimum 1.500–2.000 lei (aprox. 300–400€) pentru a genera suficiente date și a optimiza campania eficient. Sub această sumă, rezultatele sunt limitate.',
  },
  {
    question: 'Cât durează până văd rezultate?',
    answer: 'Primele lead-uri și click-uri apar din prima zi. Optimizarea completă și ROAS-ul stabil se ating de obicei în 60–90 de zile.',
  },
  {
    question: 'Gestionați contul meu existent sau creați unul nou?',
    answer: 'Putem prelua și optimiza un cont existent sau crea unul de la zero, în funcție de situație. Facem un audit complet înainte de orice decizie.',
  },
  {
    question: 'Ce tipuri de campanii Google Ads gestionați?',
    answer: 'Search, Display, Shopping, YouTube, PMAX și Remarketing. Alegem tipul potrivit pentru obiectivele și bugetul tău.',
  },
  {
    question: 'Pot opri campania când vreau?',
    answer: 'Da, ai control total. Nu există contracte pe termen lung. Poți scala, pausa sau opri campania oricând.',
  },
]

export default function GoogleAdsPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Google Ads', 'Campanii Google Ads gestionate de experți cu ROI mediu 4.7x.', 'https://antigravitydigital.ro/services/google-ads')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />

        <section className="relative z-10 flex flex-col md:flex-row items-start md:items-center mx-auto gap-8 md:gap-[60px] px-5 pt-24 pb-12 md:px-14 md:pt-28 md:pb-20" style={{ minHeight: '100dvh', maxWidth: 1300 }} aria-label="Google Ads hero">
          <div className="flex flex-col w-full md:w-auto" style={{ flex: '0 0 auto' }}>
            <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
              Serviciu Principal · Google Ads
            </div>
            <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 4.8vw, 78px)', lineHeight: 1.04 }}>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>Fii primul când</span>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s', opacity: 0 }}>clienții tăi</span>
              <span className="block text-orange" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s', opacity: 0 }}>caută în Google.</span>
            </h1>
            <p className="font-body text-[17px] leading-[1.72] mb-10" style={{ color: 'rgba(244,240,232,0.58)', maxWidth: 440, animation: 'hero-up 0.7s ease forwards 0.78s', opacity: 0 }}>
              Gestionăm campanii Google Ads pentru afaceri ambițioase. ROI mediu 4.7x, tracking complet, optimizare zilnică bazată pe date reale.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14" style={{ animation: 'hero-up 0.7s ease forwards 0.92s', opacity: 0 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 font-body text-[14.5px] font-semibold rounded-full no-underline transition-all hover:-translate-y-0.5" style={{ background: '#E8581A', color: '#1c0800', padding: '13px 26px' }}>
                Audit gratuit Google Ads
                <svg className="w-[15px] h-[15px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="2" y1="14" x2="14" y2="2"/><polyline points="4,2 14,2 14,12"/></svg>
              </Link>
              <Link href="#cum-lucram" className="inline-flex items-center gap-2 font-body text-[14.5px] font-medium rounded-full no-underline transition-all hover:-translate-y-px" style={{ background: 'transparent', color: '#F4F0E8', border: '1px solid rgba(255,255,255,0.18)', padding: '13px 26px' }}>
                Cum lucrăm
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-5 md:gap-7" style={{ animation: 'hero-up 0.7s ease forwards 1.06s', opacity: 0 }}>
              {[
                { hi: '4.7', suf: 'x', lbl: 'ROAS mediu' },
                { hi: '-38', suf: '%', lbl: 'Cost per lead' },
                { hi: '120', suf: '+', lbl: 'Campanii active' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-7">
                  {i > 0 && <div className="w-px h-9 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} aria-hidden="true" />}
                  <div className="flex flex-col gap-1">
                    <span className="font-head text-[26px] font-extrabold text-[#F4F0E8] tracking-[-0.03em]">
                      <span className="text-orange">{s.hi}</span>{s.suf}
                    </span>
                    <span className="text-[11px] tracking-[0.05em] uppercase" style={{ color: 'rgba(244,240,232,0.30)' }}>{s.lbl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual — search mockup */}
          <div className="hidden md:flex flex-1 items-center justify-center relative" style={{ height: 500, animation: 'hero-fade 1s ease forwards 0.4s', opacity: 0 }} aria-hidden="true">
            {/* Mini card A */}
            <div className="absolute rounded-[18px] z-[3]" style={{ top: 28, left: -60, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(0,0,0,.35)', animation: 'mini-a 7.5s ease-in-out infinite', willChange: 'transform' }}>
              <div className="text-[9.5px] font-medium tracking-[0.05em] uppercase mb-1" style={{ color: 'rgba(244,240,232,0.30)' }}>Quality Score</div>
              <div className="font-head text-[22px] font-extrabold text-[#F4F0E8] tracking-[-0.03em] leading-none">9.2 / 10</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold mt-[5px]" style={{ color: '#10b981' }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                +2.1 vs. luna trecută
              </div>
            </div>

            {/* Search card */}
            <div className="relative z-[2] rounded-[24px]" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', padding: 22, width: 340, boxShadow: '0 40px 80px rgba(0,0,0,0.4)', animation: 'card-float 6.5s ease-in-out infinite', willChange: 'transform' }}>
              {/* Search bar */}
              <div className="flex items-center gap-2.5 rounded-full mb-[18px]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', padding: '9px 16px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,232,0.30)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span className="text-[12.5px]" style={{ color: 'rgba(244,240,232,0.58)' }}>
                  <em className="not-italic font-medium text-[#F4F0E8]">instalator urgentă bucurești</em>
                </span>
              </div>

              {/* Your ad */}
              <div className="rounded-[14px] mb-2 p-3" style={{ background: 'rgba(232,88,26,0.06)', border: '1px solid rgba(232,88,26,0.15)' }}>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-orange tracking-[0.04em] uppercase mb-1.5">
                  <span className="w-[5px] h-[5px] bg-orange rounded-full" style={{ animation: 'blink 1.6s ease-in-out infinite' }} />
                  Anunțul tău
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[9px] font-bold tracking-[0.04em] px-[7px] py-[2px] rounded-[4px]" style={{ background: 'rgba(232,88,26,0.15)', color: '#E8581A', border: '1px solid rgba(232,88,26,0.25)' }}>Anunț</span>
                  <span className="text-[11px]" style={{ color: 'rgba(244,240,232,0.30)' }}>instalatorul-rapid.ro</span>
                </div>
                <div className="font-head text-[13.5px] font-bold text-[#F4F0E8] mb-1 leading-[1.3]">Instalator 24/7 București — Intervenție Rapidă</div>
                <div className="text-[11px] leading-[1.6]" style={{ color: 'rgba(244,240,232,0.58)' }}>Disponibili non-stop. Sosire în max 30 min. Prețuri fixe, fără surprize. Sunați acum!</div>
              </div>

              {/* Competitor (faded) */}
              <div className="rounded-[14px] p-3 mb-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[9px] font-bold tracking-[0.04em] px-[7px] py-[2px] rounded-[4px] opacity-45" style={{ background: 'rgba(232,88,26,0.15)', color: '#E8581A', border: '1px solid rgba(232,88,26,0.25)' }}>Anunț</span>
                  <span className="text-[11px]" style={{ color: 'rgba(244,240,232,0.30)' }}>competitor-instalatori.ro</span>
                </div>
                <div className="font-head text-[13.5px] font-bold mb-1 leading-[1.3] opacity-50 text-[#F4F0E8]">Instalatori București — Servicii Rapide</div>
                <div className="text-[11px] leading-[1.6] opacity-40" style={{ color: 'rgba(244,240,232,0.58)' }}>Echipă experimentată, prețuri competitive…</div>
              </div>

              {/* Metrics */}
              <div className="flex gap-0 pt-3.5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {[{ val: '8.4%', lbl: 'CTR' }, { val: '0.38€', lbl: 'CPC Mediu' }, { val: '#1', lbl: 'Poziție' }].map((m, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5 px-2" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', paddingLeft: i === 0 ? 0 : undefined }}>
                    <span className="font-head text-[16px] font-bold text-[#F4F0E8] tracking-[-0.02em]">{m.val}</span>
                    <span className="text-[9.5px] uppercase tracking-[0.04em]" style={{ color: 'rgba(244,240,232,0.30)' }}>{m.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini card B */}
            <div className="absolute rounded-[18px] z-[3]" style={{ bottom: 36, right: -52, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(0,0,0,.35)', animation: 'mini-b 6.8s ease-in-out infinite 1.2s', willChange: 'transform' }}>
              <div className="text-[9.5px] font-medium tracking-[0.05em] uppercase mb-1" style={{ color: 'rgba(244,240,232,0.30)' }}>Cost / Achiziție</div>
              <div className="font-head text-[22px] font-extrabold text-[#F4F0E8] tracking-[-0.03em] leading-none">52 lei</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold mt-[5px]" style={{ color: '#10b981' }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                -64% față de start
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="absolute bottom-8 left-5 md:left-14 flex items-center gap-2 text-[13px] z-[2]" style={{ color: 'rgba(244,240,232,0.30)' }}>
            <Link href="/" style={{ color: 'rgba(244,240,232,0.30)', textDecoration: 'none' }} className="hover:text-[rgba(244,240,232,0.58)] transition-colors">Acasă</Link>
            <span className="opacity-40">›</span>
            <Link href="/#servicii" style={{ color: 'rgba(244,240,232,0.30)', textDecoration: 'none' }} className="hover:text-[rgba(244,240,232,0.58)] transition-colors">Servicii</Link>
            <span className="opacity-40">›</span>
            <span className="text-orange">Google Ads</span>
          </div>
        </section>

        <div className="relative z-[2]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,64 Q360,0 720,32 Q1080,64 1440,8 L1440,64 Z" fill="#FDFBF7"/>
          </svg>
        </div>
      </div>

      {/* WHY GOOGLE ADS */}
      <section className="bg-warm-white py-16 px-5 md:py-24 md:px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20" style={{ alignItems: 'start' }}>
            <div className="md:sticky md:top-[120px]">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                  <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                  De ce Google Ads
                </div>
                <h2 className="font-head font-bold tracking-[-0.025em] text-text-1 leading-[1.25] mt-5 mb-7" style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}>
                  Oamenii caută deja ce vinzi tu.<br />
                  <strong className="text-navy">Întrebarea e: te găsesc pe tine sau pe competitor?</strong>
                </h2>
                <p className="text-[15.5px] text-text-2 leading-[1.7]">
                  Spre deosebire de orice alt canal de publicitate, Google Ads captează intenția de cumpărare — adică oamenii care caută activ. Nu întrerupi pe nimeni. Ești prezent exact când contează.
                </p>
              </ScrollReveal>
            </div>
            <div className="flex flex-col">
              {[
                { num: '01', title: 'Intenție de cumpărare, nu scroll pasiv', desc: 'Pe Facebook sau Instagram oamenii văd reclama întâmplător. Pe Google, ei tastează „vreau să cumpăr X" — și anunțul tău apare ca răspuns. Calitatea leadurilor e incomparabil mai bună.' },
                { num: '02', title: 'Trackezi fiecare leu investit', desc: 'Știi exact câți bani ai cheltuit, câte click-uri ai primit, câte lead-uri s-au generat și cât costă fiecare achiziție. Nicio altă formă de publicitate nu oferă această transparență.' },
                { num: '03', title: 'Scalabil și flexibil în timp real', desc: 'Campania merge bine? Mărești bugetul instant. Ai o perioadă mai slabă? O pui pe pauză. Niciun contract cu TV-ul, nicio reclamă outdoor. Control total, oricând.' },
                { num: '04', title: 'Rezultate de la primele zile', desc: 'Spre deosebire de SEO care durează luni, Google Ads aduce trafic calificat din ziua în care campania e live. Ideal pentru lansări, promoții sau perioade cu obiective rapide.' },
              ].map((point, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="py-7 grid gap-5" style={{ borderTop: i === 0 ? '1px solid rgba(23,23,32,0.09)' : undefined, borderBottom: '1px solid rgba(23,23,32,0.09)', gridTemplateColumns: '52px 1fr', alignItems: 'start' }}>
                    <span className="font-head text-[13px] font-bold text-orange tracking-[0.04em] pt-0.5">{point.num}</span>
                    <div>
                      <div className="font-head text-[17px] font-bold text-text-1 tracking-[-0.015em] mb-2">{point.title}</div>
                      <p className="text-[14.5px] text-text-2 leading-[1.68]">{point.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES */}
      <section className="bg-cream py-16 px-5 md:py-24 md:px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="mb-13">
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Ce includem
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1]" style={{ fontSize: 'clamp(30px, 3.2vw, 50px)' }}>
                Tipuri de campanii<br />pe care le gestionăm.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] text-text-2 leading-[1.7] mt-3.5">Nu rulăm campanii "out of the box". Alegem tipul potrivit pentru obiectivele tale.</p>
            </ScrollReveal>
          </div>

          <div className="flex gap-3.5 mb-3.5 flex-wrap">
            {[
              { tag: 'Cel mai popular', name: 'Search Ads', desc: 'Anunțuri text în pagina de rezultate Google. Apari exact când cineva caută produsul sau serviciul tău, cu intenție clară de cumpărare. Funnel direct, ROI excelent.', pills: ['Cuvinte cheie','Negative keywords','Ad extensions','A/B testing'] },
              { tag: '', name: 'Display Ads', desc: 'Bannere vizuale pe milioane de site-uri și aplicații din rețeaua Google. Ideal pentru awareness și remarketing.', pills: ['GDN','Targeting tematic','Responsive'] },
              { tag: '', name: 'YouTube Ads', desc: 'Video advertising cu impact vizual maxim. Skippable, non-skippable sau bumper ads în funcție de obiectiv.', pills: ['In-stream','Bumper'] },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.05} className="flex-1 min-w-[220px]">
                <div className="group bg-warm-white rounded-[22px] p-7 flex flex-col h-full transition-all hover:-translate-y-0.5 hover:border-navy" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center mb-5 transition-all group-hover:bg-navy group-hover:text-white" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)', color: '#171720' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  {card.tag && <span className="text-[10px] font-bold tracking-[0.06em] uppercase text-orange mb-2">{card.tag}</span>}
                  <div className="font-head text-[18px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{card.name}</div>
                  <div className="text-[14px] text-text-2 leading-[1.65] flex-1 mb-5">{card.desc}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.pills.map(p => <span key={p} className="text-[11px] font-medium text-text-2 rounded-full px-2.5 py-1" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)' }}>{p}</span>)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex gap-3.5 flex-wrap">
            {[
              { tag: 'eCommerce', name: 'Shopping Ads', desc: 'Produsele tale apar cu poze, prețuri și recenzii direct în Google Shopping. Ideal pentru magazine online cu cost per achiziție scăzut.', pills: ['Google Merchant Center','Product feed','Smart Shopping','PMAX'] },
              { tag: 'Conversii avansate', name: 'Remarketing & Retargeting', desc: 'Reconectezi vizitatorii care au ajuns pe site dar n-au cumpărat. Campanii segmentate pe comportament: pagini vizitate, coș abandonat, produse văzute.', pills: ['RLSA','Dynamic Remarketing','Custom audiences','Coș abandonat','Similar audiences'] },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.05} className="flex-1 min-w-[220px]">
                <div className="group bg-warm-white rounded-[22px] p-7 flex flex-col h-full transition-all hover:-translate-y-0.5 hover:border-navy" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center mb-5 transition-all group-hover:bg-navy group-hover:text-white" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)', color: '#171720' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  </div>
                  {card.tag && <span className="text-[10px] font-bold tracking-[0.06em] uppercase text-orange mb-2">{card.tag}</span>}
                  <div className="font-head text-[18px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{card.name}</div>
                  <div className="text-[14px] text-text-2 leading-[1.65] flex-1 mb-5">{card.desc}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.pills.map(p => <span key={p} className="text-[11px] font-medium text-text-2 rounded-full px-2.5 py-1" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)' }}>{p}</span>)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="relative overflow-hidden py-16 px-5 md:py-24 md:px-14" style={{ background: '#171720' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 400, top: -100, right: -80, background: 'radial-gradient(circle, rgba(14,32,80,.5) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden="true" />
        <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="mb-14">
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Studiu de caz
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-[#F4F0E8] leading-[1.1]" style={{ fontSize: 'clamp(30px, 3.2vw, 50px)' }}>
                De la 1.8x la 4.7x ROAS<br />în 90 de zile.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-[72px] items-center" style={{ gridTemplateColumns: '1fr 1.2fr' }}>
            <ScrollReveal direction="left">
              <div>
                <p className="font-head font-bold tracking-[-0.02em] text-[#F4F0E8] leading-[1.35] mb-7 italic" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                  „Am lucrat cu câteva agenții înainte. Nimeni nu ne-a explicat vreodată ce se întâmplă cu bugetul. Antigravity ne-a arătat prima dată ce înseamnă o campanie optimizată cu adevărat."
                </p>
                <div className="flex items-center gap-3 mb-9">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-head text-[14px] font-bold text-white flex-shrink-0" style={{ background: '#162B6A' }}>RM</div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#F4F0E8]">Radu Munteanu</div>
                    <div className="text-[12.5px] mt-px" style={{ color: 'rgba(244,240,232,0.30)' }}>CEO · Munteanu Construct SRL</div>
                  </div>
                </div>
                <div className="text-[14.5px] leading-[1.7] pt-6" style={{ color: 'rgba(244,240,232,0.58)', borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                  <strong style={{ color: '#F4F0E8' }}>Contextul:</strong> Companie de construcții din București, budget inițial de 3.000 lei/lună, campanii neoptimizate de 8 luni. Cost per lead: 145 lei.
                  <br /><br />
                  <strong style={{ color: '#F4F0E8' }}>Ce am făcut:</strong> Restructurare completă a contului, segmentare pe intenție, negative keyword list 400+ termeni, A/B testing, optimizare landing page și tracking granular.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-[28px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 32px 64px rgba(0,0,0,.4)' }}>
                <div className="flex items-center justify-between px-7 py-[22px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-head text-[13px] font-bold text-[#F4F0E8]">Munteanu Construct · Google Ads</span>
                  <span className="text-[11px] font-medium px-[10px] py-1 rounded-full" style={{ color: 'rgba(244,240,232,0.30)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>Ian → Apr 2024 · 90 zile</span>
                </div>
                <div className="grid px-7 py-3.5" style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.025)' }}>
                  {['Indicator','Înainte','După 90 zile'].map((h, i) => (
                    <span key={i} className="text-[10.5px] font-semibold tracking-[0.05em] uppercase" style={{ color: 'rgba(244,240,232,0.30)', textAlign: i === 0 ? 'left' : i === 2 ? 'right' : 'center' }}>{h}</span>
                  ))}
                </div>
                {[
                  { name: 'Cost per Lead', before: '145 lei', after: '52 lei', delta: '-64%', neg: true },
                  { name: 'ROAS', before: '1.8x', after: '4.7x', delta: '+161%', neg: false },
                  { name: 'CTR mediu', before: '2.1%', after: '8.4%', delta: '+300%', neg: false },
                  { name: 'Rata conversie', before: '1.2%', after: '4.1%', delta: '+242%', neg: false },
                  { name: 'Impresii / lună', before: '12,400', after: '89,300', delta: '+620%', neg: false },
                  { name: 'Vânzări Q2', before: '—', after: '€180K', delta: 'direct', neg: false },
                ].map((row, i) => (
                  <div key={i} className="grid px-7 py-5 items-center" style={{ gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span className="text-[13px] font-medium" style={{ color: 'rgba(244,240,232,0.58)' }}>{row.name}</span>
                    <span className="font-head text-[17px] font-bold text-center" style={{ color: 'rgba(244,240,232,0.30)' }}>{row.before}</span>
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-head text-[17px] font-bold" style={{ color: row.after.startsWith('€') ? '#E8581A' : '#F4F0E8' }}>{row.after}</span>
                      <span className="text-[11px] font-bold px-2 py-[3px] rounded-full" style={{ background: row.neg ? 'rgba(232,88,26,0.12)' : 'rgba(16,185,129,0.12)', color: row.neg ? '#E8581A' : '#10b981' }}>{row.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-warm-white py-16 px-5 md:py-24 md:px-14" id="cum-lucram">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Cum lucrăm
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1]" style={{ fontSize: 'clamp(30px, 3.2vw, 50px)' }}>
                Procesul nostru Google Ads,<br />pas cu pas.
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex flex-col">
            {[
              { num: '01', title: 'Audit & Analiză', desc: 'Analizăm contul actual (sau piața dacă e cont nou), competitorii, cuvintele cheie cu potențial și structura optimă.', tags: ['Audit cont','Analiză competitori','Keyword research'] },
              { num: '02', title: 'Structurare & Setup', desc: 'Creăm structura de campanii, grupuri de anunțuri, liste de negative keywords și configurăm tracking-ul complet.', tags: ['Structură campanii','Negative keywords','Conversion tracking','GA4 setup'] },
              { num: '03', title: 'Creare reclame', desc: 'Scriem copii de reclame care convertesc, configurăm extensiile și pregătim variantele pentru A/B testing.', tags: ['Ad copywriting','Ad extensions','RSA','A/B testing'] },
              { num: '04', title: 'Optimizare continuă', desc: 'Optimizăm zilnic: bid adjustments, negative keywords noi, testare reclame, ajustări pe audiențe și schedule.', tags: ['Bid management','Optimizare zilnică','Quality Score','Landing pages'] },
              { num: '05', title: 'Raportare & Scalare', desc: 'Raport lunar detaliat, apel de review cu echipa ta și plan de scalare bazat pe datele colectate.', tags: ['Dashboard live','Raport lunar','Apel review','Plan scalare'] },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="grid gap-0 py-8 border-t border-[rgba(23,23,32,0.09)] last:border-b last:border-[rgba(23,23,32,0.09)]" style={{ gridTemplateColumns: '72px 1fr' }}>
                  <span className="font-head text-[36px] font-extrabold tracking-[-0.04em] leading-none pt-1" style={{ color: '#EDE8DE' }}>{step.num}</span>
                  <div>
                    <div className="font-head text-[20px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{step.title}</div>
                    <p className="text-[15px] text-text-2 leading-[1.7] max-w-[660px] mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tags.map(t => <span key={t} className="text-[11.5px] font-medium text-navy rounded-full px-3 py-1" style={{ background: 'rgba(14,32,80,0.06)', border: '1px solid rgba(14,32,80,0.12)' }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 px-5 md:py-24 md:px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-20" style={{ alignItems: 'start' }}>
            <div className="md:sticky md:top-[120px]">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                  <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                  FAQ Google Ads
                </div>
                <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1] mt-5 mb-7" style={{ fontSize: 'clamp(30px, 3.2vw, 50px)' }}>
                  Întrebări despre<br />Google Ads.
                </h2>
                <Link href="/contact" className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-1 no-underline rounded-full transition-all hover:-translate-y-px" style={{ border: '1px solid rgba(23,23,32,0.15)', background: 'transparent', padding: '11px 22px' }}>
                  Mai ai întrebări?
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <FaqAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-center py-20 px-5 md:py-[110px] md:px-14" style={{ background: '#0E2050' }}>
        <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', background: 'radial-gradient(circle, rgba(232,88,26,.18) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase mb-6" style={{ color: 'rgba(232,88,26,0.85)' }}>
              <span className="block w-5 h-0.5 rounded-sm" style={{ background: 'rgba(232,88,26,0.85)' }} />
              Hai să vorbim
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
              Audit gratuit Google Ads<br />în 24 de ore.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[17px] leading-[1.7] mb-11" style={{ color: 'rgba(244,240,232,0.58)' }}>
              Analizăm contul tău actual sau construim strategia de la zero. Fără costuri, fără angajamente.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 font-body text-[15px] font-semibold no-underline rounded-full transition-all hover:-translate-y-0.5" style={{ background: '#E8581A', color: '#1c0800', padding: '15px 32px' }}>
                Vreau auditul gratuit
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </Link>
              <Link href="/#servicii" className="inline-flex items-center gap-2 font-body text-[15px] font-medium no-underline rounded-full transition-all hover:-translate-y-px" style={{ background: 'transparent', color: '#F4F0E8', border: '1px solid rgba(255,255,255,0.20)', padding: '15px 32px' }}>
                Alte servicii
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex items-center justify-center gap-[7px] text-[13px] mt-6" style={{ color: 'rgba(244,240,232,0.30)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
              Fără contract pe termen lung · Fără costuri ascunse · Primul audit e gratuit
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
