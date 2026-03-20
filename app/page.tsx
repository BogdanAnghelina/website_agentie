import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Counter from '@/components/ui/Counter'
import FaqAccordion from '@/components/ui/FaqAccordion'
import TabReEngagement from '@/components/ui/TabReEngagement'
import ExitIntent from '@/components/ui/ExitIntent'
import { JsonLd } from '@/components/seo/JsonLd'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import HeroClient from '@/components/sections/HeroClient'
import dynamic from 'next/dynamic'

const HorizontalScroll = dynamic(() => import('@/components/sections/HorizontalScroll'))

export const metadata: Metadata = {
  title: 'Antigravity Digital — Agenție de Marketing',
  description: 'Creștem afaceri românești prin Google Ads, SEO și Web Development. Strategii bazate pe date, rezultate măsurabile.',
  alternates: { canonical: 'https://antigravitydigital.ro' },
  openGraph: {
    title: 'Antigravity Digital — Agenție de Marketing',
    images: ['/og/home.jpg'],
  },
}

const faqItems = [
  {
    question: 'Cât de repede văd rezultate de la Google Ads?',
    answer: 'Primele rezultate (click-uri, trafic calificat) apar din prima zi în care campania e live. Optimizarea și scalarea iau 2–4 săptămâni pentru a acumula date suficiente. ROAS-ul stabil se construiește de obicei în 60–90 de zile.',
  },
  {
    question: 'Lucrați cu orice tip de afacere?',
    answer: 'Lucrăm cu afaceri locale, e-commerce, B2B și servicii profesionale. Nu avem restricții de industrie, dar suntem cei mai eficienți pentru afaceri cu un buget lunar de minimum 1.500–2.000 lei dedicate publicității.',
  },
  {
    question: 'Cât costă serviciile voastre?',
    answer: 'Prețurile variază în funcție de servicii și complexitate. Contactează-ne pentru o ofertă personalizată. Primul audit și consultația de 30 de minute sunt complet gratuite.',
  },
  {
    question: 'Cum raportați rezultatele?',
    answer: 'Ai acces live la un dashboard personalizat unde poți vedea toate metricile în timp real. Plus un raport lunar detaliat și un apel de 30–60 de minute cu echipa noastră.',
  },
  {
    question: 'Există un contract pe termen lung?',
    answer: 'Nu impunem contracte pe termen lung. Lucrăm pe bază de mandat lunar, cu o perioadă minimă de 3 luni pentru servicii de SEO. Google Ads și alte servicii pot fi ajustate sau oprite lunar.',
  },
]

function StarIcon() {
  return (
    <svg className="text-orange" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l1.85 3.75 4.14.6-3 2.92.7 4.12L8 10.27l-3.7 1.92.71-4.12-3-2.92 4.14-.6z"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqItems)} />
      <TabReEngagement />
      <ExitIntent />

      {/* HERO */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -120, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.16) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: 0, left: -80, background: 'radial-gradient(circle, rgba(14,32,80,0.6) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 18s ease-in-out infinite reverse 3s' }} aria-hidden="true" />

        <section
          className="relative z-10 flex items-center mx-auto gap-[60px]"
          style={{ minHeight: '100dvh', padding: '112px 56px 64px', maxWidth: 1300 }}
          aria-label="Hero"
        >
          <div className="flex flex-col" style={{ flex: '0 0 54%' }}>
            <div
              className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}
            >
              <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
              Agenție de Marketing Digital
            </div>

            <HeroClient />

            <div
              className="flex items-center gap-7"
              style={{ animation: 'hero-up 0.7s ease forwards 1.06s', opacity: 0 }}
            >
              {[
                { val: '+', hi: '247', suf: '%', lbl: 'ROI mediu clienți' },
                { val: '', hi: '84', suf: '+', lbl: 'Clienți activi' },
                { val: '', hi: '6', suf: ' ani', lbl: 'Experiență' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-7">
                  {i > 0 && <div className="w-px h-9 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} aria-hidden="true" />}
                  <div className="flex flex-col gap-1">
                    <span className="font-head text-[27px] font-extrabold text-[#F4F0E8] tracking-[-0.03em]">
                      {s.val}<span className="text-orange">{s.hi}</span>{s.suf}
                    </span>
                    <span className="text-[11px] tracking-[0.05em] uppercase" style={{ color: 'rgba(244,240,232,0.30)' }}>{s.lbl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div
            className="flex-1 flex items-center justify-center relative"
            style={{ height: 490, animation: 'hero-fade 1s ease forwards 0.38s', opacity: 0 }}
            aria-hidden="true"
          >
            {/* Mini card A */}
            <div
              className="absolute rounded-[18px] z-[3]"
              style={{ top: 14, left: -56, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.07)', animation: 'mini-a 7.5s ease-in-out infinite', willChange: 'transform' }}
            >
              <div className="text-[9.5px] font-medium tracking-[0.05em] uppercase mb-1" style={{ color: 'rgba(244,240,232,0.30)' }}>Google Ads CTR</div>
              <div className="font-head text-[22px] font-extrabold text-[#F4F0E8] tracking-[-0.03em] leading-none">8.4%</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold mt-[5px]" style={{ color: '#10b981' }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                +1.9% față de medie
              </div>
            </div>

            {/* Main card */}
            <div
              className="relative z-[2] rounded-[28px]"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', padding: 26, width: 298, boxShadow: '0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.09)', animation: 'card-float 6.5s ease-in-out infinite', willChange: 'transform' }}
            >
              <div className="flex items-center justify-between mb-[18px]">
                <span className="text-[11px] font-medium tracking-[0.06em] uppercase" style={{ color: 'rgba(244,240,232,0.30)' }}>Trafic organic SEO</span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-[9px] py-[3px] rounded-full" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)', color: '#10b981' }}>
                  <span className="w-[5px] h-[5px] rounded-full" style={{ background: '#10b981', animation: 'blink 1.6s ease-in-out infinite' }} />
                  Live
                </span>
              </div>
              <div className="font-head text-[40px] font-extrabold text-[#F4F0E8] tracking-[-0.04em] leading-none mb-1">+3,847</div>
              <div className="text-[12.5px] mb-5" style={{ color: 'rgba(244,240,232,0.58)' }}>vizitatori / lună</div>
              <div className="flex items-end gap-[5px] mb-2" style={{ height: 72 }}>
                {[33,44,38,58,52,68,64,82,76,100].map((h, i) => (
                  <div key={i} className="flex-1 h-full rounded-t-[5px] relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="absolute bottom-0 left-0 right-0 rounded-t-[5px]" style={{ height: `${h}%`, background: 'linear-gradient(to top, #E8581A 0%, rgba(232,88,26,0.35) 100%)' }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-[5px] mb-[18px]">
                {['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct'].map(m => (
                  <span key={m} className="flex-1 text-[9px] text-center" style={{ color: 'rgba(244,240,232,0.30)' }}>{m}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-[5px] pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {['Google Ads','SEO','Web Dev','Design','Facebook Ads','Newsletter'].map((c, i) => (
                  <span key={c} className="text-[10.5px] font-medium rounded-full px-[10px] py-[4px] border" style={{ color: i < 3 ? '#E8581A' : 'rgba(244,240,232,0.58)', borderColor: i < 3 ? 'rgba(232,88,26,0.3)' : 'rgba(255,255,255,0.09)', background: i < 3 ? 'rgba(232,88,26,0.08)' : 'rgba(255,255,255,0.04)' }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini card B */}
            <div
              className="absolute rounded-[18px] z-[3]"
              style={{ bottom: 22, right: -50, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', boxShadow: '0 20px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.07)', animation: 'mini-b 6.8s ease-in-out infinite 1.2s', willChange: 'transform' }}
            >
              <div className="text-[9.5px] font-medium tracking-[0.05em] uppercase mb-1" style={{ color: 'rgba(244,240,232,0.30)' }}>Conversii lunare</div>
              <div className="font-head text-[22px] font-extrabold text-[#F4F0E8] tracking-[-0.03em] leading-none">2,319</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold mt-[5px]" style={{ color: '#10b981' }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="1,10 4,5 7,7.5 11,2"/></svg>
                +38% trim. anterior
              </div>
            </div>
          </div>
        </section>

        {/* Wave divider */}
        <div className="relative z-[2]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,64 Q360,0 720,32 Q1080,64 1440,8 L1440,64 Z" fill="#F5F1E8"/>
          </svg>
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-cream py-24 px-14" id="servicii">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="flex items-end justify-between mb-12 gap-10 flex-wrap">
            <div style={{ maxWidth: 540 }}>
              <ScrollReveal>
                <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                  <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                  Ce facem cel mai bine
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1]" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)' }}>
                  Servicii care<br />mișcă acul.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[17px] text-text-2 leading-[1.7] mt-3.5">
                  Nu vindem pachete. Construim strategii personalizate, bazate pe ce funcționează pentru afacerea ta — nu pe template-uri.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.25}>
              <Link href="/contact" className="inline-flex items-center gap-[7px] font-body text-[14px] font-medium text-text-1 no-underline rounded-full transition-all hover:-translate-y-px" style={{ border: '1px solid rgba(23,23,32,0.15)', background: 'transparent', padding: '11px 22px' }}>
                Consultație gratuită
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/>
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Row 1 */}
          <div className="flex gap-3.5 mb-3.5 flex-wrap">
            {[
              { flex: 40, href: '/services/google-ads', badge: 'Serviciu Principal', name: 'Google Ads', desc: 'Campanii de publicitate plătită care îți aduc clienți exact când aceștia caută ce oferi. Optimizăm fiecare leu investit pentru ROI maxim.' },
              { flex: 34, href: '/services/seo', badge: 'Serviciu Principal', name: 'SEO', desc: 'Vizibilitate organică durabilă în Google. Trafic calificat, fără să plătești per click — cu fiecare lună care trece.' },
              { flex: 26, href: '/services/web-development', badge: 'Serviciu Principal', name: 'Web Development', desc: 'Site-uri și landing pages rapide, clare și construite să convertească vizitatorul în client.' },
            ].map((svc, i) => (
              <ScrollReveal key={svc.href} delay={i * 0.05} className="flex-1 min-w-[220px]">
                <div className="group bg-warm-white rounded-[22px] p-8 flex flex-col h-full transition-all hover:-translate-y-0.5 hover:border-navy" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-[22px] transition-all group-hover:bg-navy group-hover:[border-color:theme(colors.navy)] group-hover:text-white" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)', color: '#171720' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5.5"/></svg>
                  </div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.06em] uppercase rounded-full px-[9px] py-[3px] mb-2.5 w-fit" style={{ background: 'rgba(232,88,26,0.1)', color: '#E8581A', border: '1px solid rgba(232,88,26,0.2)' }}>{svc.badge}</span>
                  <div className="font-head text-[19px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{svc.name}</div>
                  <div className="text-[14.5px] text-text-2 leading-[1.65] flex-1 mb-6">{svc.desc}</div>
                  <Link href={svc.href} className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy no-underline transition-all hover:gap-2.5 hover:text-orange">
                    Află mai mult
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-3.5 flex-wrap">
            {[
              { href: '/services/design', name: 'Design', desc: 'Identitate vizuală, materiale grafice și creatives care îți diferențiază brandul de concurență.' },
              { href: '/services/facebook-ads', name: 'Facebook & Instagram Ads', desc: 'Campanii social media targetate precis pe audiența ta ideală. Retargeting, lookalike audiences, funnel complet de conversie.' },
              { href: '/services/newsletter', name: 'Email Marketing', desc: 'Newslettere și secvențe automatizate care transformă lista de emailuri în vânzări repetate.' },
            ].map((svc, i) => (
              <ScrollReveal key={svc.href} delay={0.2 + i * 0.05} className="flex-1 min-w-[200px]">
                <div className="group bg-warm-white rounded-[22px] p-8 flex flex-col h-full transition-all hover:-translate-y-0.5" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                  <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-[22px] transition-all group-hover:bg-navy group-hover:text-white" style={{ background: '#F5F1E8', border: '1px solid rgba(23,23,32,0.09)', color: '#171720' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,6 12,13 22,6"/></svg>
                  </div>
                  <div className="font-head text-[19px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{svc.name}</div>
                  <div className="text-[14.5px] text-text-2 leading-[1.65] flex-1 mb-6">{svc.desc}</div>
                  <Link href={svc.href} className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy no-underline transition-all hover:gap-2.5 hover:text-orange">
                    Află mai mult
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-24 px-14" style={{ background: '#171720' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} aria-hidden="true" />
        <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 600, marginBottom: 72 }}>
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Cifrele vorbesc
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-[#F4F0E8] leading-[1.1]" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)' }}>
                Rezultate reale,<br />clienți mulțumiți.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-[1.7] mt-3.5" style={{ color: 'rgba(244,240,232,0.58)', maxWidth: 520 }}>
                Nu promitem. Demonstrăm. Fiecare cifră de mai jos vine din rapoartele clienților noștri activi.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="scale" delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-[24px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {[
                { prefix: '+', target: 247, suffix: '%', label: 'ROI mediu pe Google Ads', desc: 'față de bugetul investit' },
                { prefix: '', target: 84, suffix: '+', label: 'Clienți activi', desc: 'în 12 industrii diferite' },
                { prefix: '€', target: 3, suffix: '.2M', label: 'Bugete gestionate', desc: 'în ultimele 12 luni' },
                { prefix: '', target: 6, suffix: ' ani', label: 'Pe piața digitală', desc: 'cu experiență dovedită' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col" style={{ background: '#1F1E2A', padding: '44px 36px' }}>
                  <div className="font-head font-extrabold tracking-[-0.04em] text-[#F4F0E8] leading-none mb-2" style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}>
                    {stat.prefix && <span className="text-orange">{stat.prefix}</span>}
                    <Counter target={stat.target} />
                    {stat.suffix && <span className="text-orange">{stat.suffix}</span>}
                  </div>
                  <div className="text-[14.5px] font-medium leading-[1.5]" style={{ color: 'rgba(244,240,232,0.58)' }}>{stat.label}</div>
                  <div className="text-[13px] mt-1.5" style={{ color: 'rgba(244,240,232,0.30)' }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HORIZONTAL SCROLL — Services */}
      <HorizontalScroll />

      {/* PROCESS */}
      <section className="bg-warm-white py-24 px-14" id="proces">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center" style={{ maxWidth: 560, margin: '0 auto 72px' }}>
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4 justify-center">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Cum lucrăm
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1]" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)' }}>
                Un proces clar,<br />fără surprize.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] text-text-2 leading-[1.7]" style={{ marginTop: 16 }}>
                De la primul apel până la rapoartele lunare, știi exact ce se întâmplă cu bugetul și cu campania ta.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Audit & Strategie', desc: 'Analizăm afacerea ta, competitorii și prezența digitală actuală. Identificăm oportunitățile cu cel mai mare potențial.' },
              { num: '02', title: 'Planificare & Setup', desc: 'Construim strategia și setăm toate canalele: conturi, pixel, tracking, audiențe și structura campaniei.' },
              { num: '03', title: 'Execuție & Lansare', desc: 'Lansăm campania cu precizie. Primele rezultate apar rapid — testăm și ajustăm continuu din prima zi.' },
              { num: '04', title: 'Optimizare & Scalare', desc: 'Ce funcționează, scalăm. Ce nu, corectăm imediat. Raport lunar detaliat, apel lunar cu echipa ta.' },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="px-5 flex flex-col">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-head text-[14px] font-bold flex-shrink-0 mb-7" style={{ background: '#FDFBF7', border: '2px solid rgba(23,23,32,0.15)', color: '#A8A4B4' }}>
                  {step.num}
                </div>
                <div className="font-head text-[18px] font-bold text-text-1 tracking-[-0.02em] mb-2.5">{step.title}</div>
                <div className="text-[14.5px] text-text-2 leading-[1.7]">{step.desc}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-24 px-14" id="recenzii">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 580, marginBottom: 56 }}>
            <ScrollReveal>
              <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                Ce spun clienții
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1]" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)' }}>
                Rezultatele vorbesc<br />mai tare decât noi.
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
            <ScrollReveal delay={0.05}>
              <div className="bg-warm-white rounded-[22px] p-8 flex flex-col gap-5 transition-all hover:-translate-y-0.5" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                <p className="text-[18px] text-text-1 leading-[1.7] italic">„Am lucrat cu câteva agenții înainte de Antigravity și niciuna nu ne-a livrat transparența și rezultatele pe care le vedem acum. În 4 luni de Google Ads, costul per lead a scăzut cu 61% iar volumul de cereri s-a triplat. Nu mai schimb nimic."</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-head text-[14px] font-bold text-white flex-shrink-0" style={{ background: '#0E2050' }}>RM</div>
                  <div>
                    <div className="text-[14px] font-semibold text-text-1">Radu Munteanu</div>
                    <div className="text-[12.5px] text-text-3 mt-px">CEO, Munteanu Construct SRL</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-4">
              {[
                { initials: 'AI', bg: '#162B6A', name: 'Andreea Ionescu', role: 'Marketing Manager, Clinica Vita', quote: '„SEO-ul a început să dea roade după luna 3. Acum 70% din traficul nostru vine organic și nu mai depindem exclusiv de reclame plătite. Exact ce ne-am dorit."' },
                { initials: 'MP', bg: '#2d6a4f', name: 'Mihai Popa', role: 'Fondator, EcoShop.ro', quote: '„Noul site livrat de echipa Antigravity a crescut rata de conversie cu 38% față de varianta veche. Simplu, rapid, profesional."' },
              ].map((t, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                  <div className="bg-warm-white rounded-[22px] p-8 flex flex-col gap-5 transition-all hover:-translate-y-0.5" style={{ border: '1px solid rgba(23,23,32,0.09)' }}>
                    <div className="flex gap-1">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                    <p className="text-[16px] text-text-1 leading-[1.7] italic">{t.quote}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-head text-[14px] font-bold text-white flex-shrink-0" style={{ background: t.bg }}>{t.initials}</div>
                      <div>
                        <div className="text-[14px] font-semibold text-text-1">{t.name}</div>
                        <div className="text-[12.5px] text-text-3 mt-px">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal delay={0.1} className="mt-14">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[12px] text-text-3 mr-2">Câțiva dintre clienții cu care am lucrat</span>
              {['Munteanu Construct','Clinica Vita','EcoShop.ro','FastLogistic','UrbanDent','ProFit Academy'].map(c => (
                <span key={c} className="text-[13px] font-medium text-text-2 rounded-full px-3 py-1.5" style={{ background: '#FDFBF7', border: '1px solid rgba(23,23,32,0.09)' }}>{c}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TOOLS */}
      <section className="relative py-[72px] px-14" style={{ background: '#1F1E2A', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="flex items-center justify-between gap-8 mb-11 flex-wrap">
            <div>
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(244,240,232,0.30)' }}>Stack profesional</div>
              <div className="font-head text-[18px] font-bold text-[#F4F0E8] tracking-[-0.01em]">Instrumentele pe care le folosim zilnic</div>
            </div>
            <p className="text-[14px] text-right leading-[1.6]" style={{ color: 'rgba(244,240,232,0.30)', maxWidth: 360 }}>
              Certificări Google, Meta și HubSpot. Acces premium la SEMrush, Ahrefs și suite-ul Google Marketing Platform.
            </p>
          </div>
          <ScrollReveal delay={0.05}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {['Google Ads','Google Analytics 4','SEMrush','Ahrefs','Meta Business','Mailchimp','Google Tag Manager','Looker Studio','Search Console','Hotjar','Klaviyo','Notion + Slack'].map(tool => (
                <div key={tool} className="rounded-[14px] py-[18px] px-3.5 flex flex-col items-center gap-2.5 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,232,0.58)" strokeWidth="1.8"><circle cx="12" cy="12" r="5"/></svg>
                  </div>
                  <span className="text-[12px] font-medium text-center leading-[1.3]" style={{ color: 'rgba(244,240,232,0.58)' }}>{tool}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-14">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1.6fr', alignItems: 'start' }}>
            <div className="sticky top-[120px]">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase text-orange mb-4">
                  <span className="block w-5 h-0.5 bg-orange rounded-sm" />
                  Întrebări frecvente
                </div>
                <h2 className="font-head font-extrabold tracking-[-0.03em] text-text-1 leading-[1.1] mt-5 mb-7" style={{ fontSize: 'clamp(30px, 3.2vw, 50px)' }}>
                  Ai întrebări?<br />Avem răspunsuri.
                </h2>
                <p className="text-[17px] text-text-2 leading-[1.7]">
                  Dacă nu găsești răspunsul la ce cauți, suntem la un mesaj distanță.
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-1 no-underline rounded-full transition-all hover:-translate-y-px" style={{ border: '1px solid rgba(23,23,32,0.15)', background: 'transparent', padding: '11px 22px' }}>
                    Contactează-ne
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="12" x2="12" y2="2"/><polyline points="3,2 12,2 12,11"/></svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <FaqAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-center py-[110px] px-14" style={{ background: '#0E2050' }} id="contact">
        <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', filter: 'blur(120px)', background: 'radial-gradient(circle, rgba(232,88,26,.18) 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <div className="inline-flex items-center gap-[7px] text-[11.5px] font-semibold tracking-[0.07em] uppercase mb-6" style={{ color: 'rgba(232,88,26,0.85)' }}>
              <span className="block w-5 h-0.5 rounded-sm" style={{ background: 'rgba(232,88,26,0.85)' }} />
              Hai să începem
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)' }}>
              Afacerea ta merită<br />mai mult trafic.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[17px] leading-[1.7] mb-11" style={{ color: 'rgba(244,240,232,0.58)' }}>
              O consultație gratuită de 30 de minute. Fără angajamente, fără pitch agresiv — doar o discuție sinceră despre ce poți câștiga.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <a href="mailto:hello@antigravity.ro" className="inline-flex items-center gap-2 font-body text-[15px] font-semibold no-underline rounded-full transition-all hover:-translate-y-0.5" style={{ background: '#E8581A', color: '#1c0800', padding: '15px 32px' }}>
                Programează consultația
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </a>
              <a href="tel:+40700000000" className="inline-flex items-center gap-2 font-body text-[15px] font-medium no-underline rounded-full transition-all hover:-translate-y-px" style={{ background: 'transparent', color: '#F4F0E8', border: '1px solid rgba(255,255,255,0.20)', padding: '15px 32px' }}>
                Sună acum
              </a>
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
