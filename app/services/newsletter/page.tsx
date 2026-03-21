import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Newsletter & Email Marketing — ROI 3.800%',
  description: 'Automatizări și campanii de email care generează venituri recurente. ROI mediu 3.800% — €36 la fiecare €1 investit. Audit gratuit.',
  alternates: { canonical: 'https://antigravitydigital.ro/services/newsletter' },
  openGraph: {
    title: 'Newsletter & Email Marketing | Antigravity Digital',
    images: ['/og/newsletter.jpg'],
  },
}

const faqItems = [
  {
    question: 'Ce platformă de email marketing folosiți?',
    answer: 'Depinde de obiective și buget. Pentru eCommerce (Shopify/WooCommerce): Klaviyo — cel mai puternic pentru segmentare și revenue tracking. Pentru servicii și B2B: ActiveCampaign sau Mailchimp. Configurăm și migrăm indiferent de platformă.',
  },
  {
    question: 'Avem o listă veche de câțiva ani. Cum procedăm?',
    answer: 'Înainte de orice campanie, facem list cleaning: eliminăm adresele invalide, inactivii cronici, duplicatele. O listă mică și angajată bate una mare și rece. Ne ocupăm noi de tot procesul — te protejăm de penalizări de deliverability.',
  },
  {
    question: 'Cât de repede putem lansa primul flow?',
    answer: 'Depinde de complexitate. Un welcome series simplu: 1-2 săptămâni de la briefing. Un sistem complet de automatizare (5+ flows): 4-6 săptămâni. Prioritizăm flows-urile cu cel mai mare impact pe venituri — de obicei abandoned cart e primul.',
  },
  {
    question: 'GDPR — cum gestionați consimțămintele?',
    answer: 'Implementăm double opt-in, stocare consimțăminte cu timestamp, unsubscribe cu un singur click, politica de confidențialitate conformă. Nu trimitem la liste cumpărate — niciodată. Conformitatea GDPR e inclusă în orice pachet.',
  },
  {
    question: 'Puteți lucra cu platforma pe care o avem deja?',
    answer: 'Da. Dacă aveți Klaviyo, Mailchimp, ActiveCampaign, Brevo, ConvertKit — lucrăm cu ce aveți. Dacă nu aveți nimic sau vreți să migrați, recomandăm platforma potrivită și ne ocupăm de migrare fără pierderi de date.',
  },
  {
    question: 'Ce înseamnă "domain warming" și de ce contează?',
    answer: 'Dacă aveți un domeniu nou sau o platformă nouă, ISP-urile (Gmail, Yahoo etc.) nu vă cunosc reputația. Domain warming = trimiți volume mici și crești treptat în 4-6 săptămâni, astfel că algoritmii de spam te clasifică drept sender legitim. Săriți peste acest pas și 60% din emailuri ajung în spam.',
  },
]

export default function NewsletterPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Newsletter & Email Marketing', 'Automatizări și campanii de email care generează venituri recurente. ROI mediu 3.800%.', 'https://antigravitydigital.ro/services/newsletter')} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #171720 0%, #0E2050 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -60, background: 'radial-gradient(circle, rgba(232,88,26,0.17) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 14s ease-in-out infinite' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 360, height: 360, bottom: 40, left: -80, background: 'radial-gradient(circle, rgba(14,32,80,0.55) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'blob-drift 18s ease-in-out infinite reverse 3s' }} aria-hidden="true" />

        <section className="relative z-10 flex flex-col md:flex-row items-start md:items-center mx-auto gap-8 md:gap-[60px] px-5 pt-24 pb-12 md:px-14 md:pt-28 md:pb-20" style={{ minHeight: '100dvh', maxWidth: 1300 }} aria-label="Newsletter hero">
          <div className="flex flex-col w-full md:w-auto" style={{ flex: '0 0 auto' }}>
            <div className="inline-flex items-center gap-2 rounded-full w-fit mb-8 text-[11.5px] font-medium tracking-[0.05em] uppercase" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '5px 14px 5px 8px', color: 'rgba(244,240,232,0.58)', animation: 'hero-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards 0.15s', opacity: 0 }}>
              <span className="w-[7px] h-[7px] bg-orange rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2.4s ease-in-out infinite' }} aria-hidden="true" />
              Newsletter &amp; Email Marketing
            </div>
            <h1 className="font-head font-extrabold tracking-[-0.035em] text-[#F4F0E8] mb-6" style={{ fontSize: 'clamp(42px, 4.8vw, 78px)', lineHeight: 1.04 }}>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.3s', opacity: 0 }}>Email-ul lucrează</span>
              <span className="block" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.46s', opacity: 0 }}>și când</span>
              <span className="block text-orange" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.62s', opacity: 0 }}>dormi.</span>
            </h1>
            <p className="text-[#F4F0E8] mb-10 max-w-[520px]" style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, opacity: 0.72, animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.78s' }}>
              Automatizări și campanii de email care generează venituri recurente. ROI mediu 3.800% — niciun alt canal nu se apropie de această eficiență.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 0.94s', opacity: 0 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '14px 32px', fontSize: 15.5 }}>
                Audit email gratuit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="#de-ce" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(244,240,232,0.82)', padding: '14px 28px', fontSize: 15.5 }}>
                De ce email marketing
              </Link>
            </div>
            <div className="flex gap-8 mt-12" style={{ animation: 'hero-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards 1.1s', opacity: 0 }}>
              {[
                { value: '3.800%', label: 'ROI mediu email' },
                { value: '42%', label: 'Open rate mediu' },
                { value: '€36', label: 'La fiecare €1 investit' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-head font-extrabold text-[#F4F0E8]" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)' }}>
                    <span className="text-orange">{stat.value}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(244,240,232,0.5)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Campaign Dashboard Card */}
          <div className="flex-1 flex items-center justify-center relative" style={{ animation: 'hero-fade 1s cubic-bezier(0.16,1,0.3,1) forwards 0.5s', opacity: 0, height: 500 }}>
            {/* Mini card: ROI */}
            <div className="absolute flex flex-col gap-1 text-white rounded-[18px] px-4 py-3" style={{ top: 28, left: -60, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-a 7.5s ease-in-out infinite', zIndex: 3 }}>
              <div className="text-[9.5px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.45)' }}>ROI Email</div>
              <div className="font-head font-extrabold text-[17px] text-[#F4F0E8]">3,800%</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-green mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><polyline points="1,8 4,4 6,6 9,2"/></svg>
                vs. orice alt canal
              </div>
            </div>

            {/* Campaign Dashboard Card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ width: 340, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)', animation: 'card-float 6.5s ease-in-out infinite', zIndex: 2 }}>
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-7 h-7 rounded-[9px] flex items-center justify-center" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.25)', color: '#E8581A' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,6 12,13 22,6"/></svg>
                </div>
                <span className="font-head font-bold text-[13px] text-[#F4F0E8]">Campaign Dashboard</span>
              </div>

              {/* Email preview */}
              <div className="mx-5 my-4 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="px-4 pt-3 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-[11px] mb-1" style={{ color: 'rgba(244,240,232,0.4)' }}>De la: Antigravity &lt;hello@antigravity.ro&gt;</div>
                  <div className="text-[13px] font-semibold text-[#F4F0E8]">Ofertă exclusivă — 24 ore</div>
                </div>
                <div className="flex items-center justify-center py-6" style={{ background: 'linear-gradient(135deg, #0E2050, #162B6A)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
                </div>
                <div className="mx-4 my-3 py-2 text-center text-[12px] font-semibold rounded-full" style={{ background: '#E8581A', color: '#fff' }}>Descoperă oferta →</div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 divide-x mx-5 mb-4 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.08)' }}>
                {[
                  { val: '42.3%', lbl: 'Open Rate', green: true },
                  { val: '8.7%', lbl: 'Click Rate' },
                  { val: '€12.4K', lbl: 'Revenue', green: true },
                ].map(m => (
                  <div key={m.lbl} className="flex flex-col items-center py-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                    <div className="font-head font-bold text-[14px]" style={{ color: m.green ? '#10b981' : '#F4F0E8' }}>{m.val}</div>
                    <div className="text-[10px] mt-1" style={{ color: 'rgba(244,240,232,0.4)' }}>{m.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Automation flows */}
              <div className="flex flex-col gap-2 mx-5 mb-5">
                {[
                  { name: 'Welcome series', active: true },
                  { name: 'Abandoned cart', active: true },
                  { name: 'Win-back flow', active: true },
                ].map(flow => (
                  <div key={flow.name} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#10b981' }} />
                      <span className="text-[12px]" style={{ color: 'rgba(244,240,232,0.7)' }}>{flow.name}</span>
                    </div>
                    <span className="text-[10px] font-semibold rounded-full px-2 py-0.5" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>Activ</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini card: Unsub Rate */}
            <div className="absolute flex flex-col gap-1 text-white rounded-[18px] px-4 py-3" style={{ bottom: 36, right: -52, background: 'rgba(15,15,25,0.85)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'mini-b 6.8s ease-in-out infinite 1.2s', zIndex: 3 }}>
              <div className="text-[9.5px] font-medium uppercase tracking-wide" style={{ color: 'rgba(244,240,232,0.45)' }}>Unsub Rate</div>
              <div className="font-head font-extrabold text-[17px] text-[#F4F0E8]">0.3%</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-green mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><polyline points="1,8 4,4 6,6 9,2"/></svg>
                Sub media industriei
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY EMAIL MARKETING */}
      <section id="de-ce" style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="De ce email marketing">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="flex gap-[80px]">
            <div style={{ flex: '0 0 340px' }} className="sticky top-24 self-start">
              <ScrollReveal>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">De ce email</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-6" style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.25 }}>
                  Singurul canal pe care<br /><span className="text-navy">îl deții 100%.</span>
                </h2>
                <p style={{ color: '#555', fontSize: 15.5, lineHeight: 1.7 }}>
                  Algoritmii se schimbă. CPC-urile cresc. Lista ta de emailuri e un asset permanent — nu poți fi "demonetizat" de o actualizare de platformă.
                </p>
              </ScrollReveal>
            </div>
            <div className="flex-1 flex flex-col">
              {[
                {
                  num: '01',
                  title: 'ROI-ul cel mai mare din marketing digital',
                  desc: 'Fiecare €1 investit în email marketing returnează în medie €36. Nu e opinie — e medie din 2024. Niciun alt canal nu se apropie de această eficiență: Google Ads returnează ~2x, Facebook Ads ~3x. Email returnează 36x.',
                },
                {
                  num: '02',
                  title: 'Tu deții lista, nu algoritmii',
                  desc: 'Facebook îți poate tăia reach-ul. Google îți poate schimba CPC-ul. Lista ta de emailuri e un asset 100% al tău. Dacă mâine toate platformele dispar, clienții tăi tot primesc newsletter-ul.',
                },
                {
                  num: '03',
                  title: 'Automatizare care lucrează 24/7',
                  desc: 'Welcome series, abandoned cart, win-back campaigns, birthday emails. Configurate o singură dată, generează venituri recurente. Cel mai bun angajat pe care nu trebuie să îl plătești lunar.',
                },
                {
                  num: '04',
                  title: 'Personalizare la scară',
                  desc: 'Un email personalizat are rate de deschidere cu 26% mai mari. Segmentăm lista după comportament, achiziții, locație, interese. Fiecare subscriber primește mesajul potrivit, la momentul potrivit.',
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
      <section style={{ background: '#F4F0E8', padding: '100px 56px' }} aria-label="Servicii email marketing">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="mb-14">
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Ce facem</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal" style={{ fontSize: 'clamp(30px, 3vw, 48px)', lineHeight: 1.1 }}>
                Servicii de email marketing<br />pentru fiecare obiectiv.
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 1 */}
          <div className="flex gap-4 mb-4">
            {[
              {
                tag: 'Strategie',
                title: 'Email Marketing Strategy',
                desc: 'Audit lista existentă, definim segmentele, construim calendarul editorial și map-ul de automatizări prioritare. Strategia completă înainte de primul email.',
                pills: ['List audit', 'Segmentation', 'Content calendar', 'Automation map'],
                flex: '0 0 40%',
              },
              {
                tag: 'Campanii',
                title: 'Campanii Newsletters',
                desc: 'Design + copy + configurare pentru campanii lunare sau săptămânale. Template-uri responsive, A/B testing pe subiecte și preheader-e.',
                pills: ['HTML templates', 'A/B testing', 'Deliverability'],
                flex: '0 0 32%',
              },
              {
                tag: 'Automatizare',
                title: 'Automation Flows',
                desc: 'Welcome series, abandoned cart, post-purchase, win-back, birthday. Fiecare flow e o mașinărie de venituri recurente configurată o dată.',
                pills: ['Klaviyo', 'Mailchimp', 'ActiveCampaign'],
                flex: '1',
              },
            ].map(card => (
              <ScrollReveal key={card.title} style={{ flex: card.flex }}>
                <div className="flex flex-col h-full rounded-[22px] p-8" style={{ background: '#FDFAF5', border: '1px solid rgba(23,23,32,0.09)' }}>
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
                tag: 'Creștere',
                title: 'List Building',
                desc: 'Pop-ups, embedded forms, lead magnets (ghiduri PDF, discounturi, webinare). Creștem lista cu subscriberi calificați.',
                pills: ['Pop-ups', 'Lead magnets', 'GDPR'],
                flex: '0 0 27%',
              },
              {
                tag: 'eCommerce',
                title: 'eCommerce Email (Klaviyo)',
                desc: 'Specializați în Klaviyo pentru Shopify și WooCommerce. Product recommendations, browse abandonment, VIP flows. Mediu: 25-40% din revenue-ul total vine din email. Implementăm exact asta.',
                pills: ['Klaviyo', 'Shopify', 'Product recs', 'VIP flows'],
                flex: '1',
              },
              {
                tag: 'Tehnic',
                title: 'Audit & Deliverability',
                desc: 'Analizăm de ce emailurile ajung în spam. Rezolvăm: SPF/DKIM/DMARC, list hygiene, sender reputation recovery.',
                pills: ['Deliverability', 'DNS setup', 'List hygiene'],
                flex: '0 0 26%',
              },
            ].map(card => (
              <ScrollReveal key={card.title} style={{ flex: card.flex }}>
                <div className="flex flex-col h-full rounded-[22px] p-8" style={{ background: '#FDFAF5', border: '1px solid rgba(23,23,32,0.09)' }}>
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
      <section style={{ background: '#1A1B25', padding: '100px 56px', position: 'relative', overflow: 'hidden' }} aria-label="Case study FashionHub">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px' }} aria-hidden="true" />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 400, top: -100, right: -80, background: 'radial-gradient(circle, rgba(14,32,80,0.5) 0%, transparent 70%)', filter: 'blur(100px)' }} aria-hidden="true" />
        <div className="mx-auto relative z-10" style={{ maxWidth: 1300 }}>
          <div className="grid grid-cols-2 gap-[72px] items-center">
            <ScrollReveal>
              <div>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-6">Studiu de caz</p>
                <blockquote className="font-head font-bold italic text-[#F4F0E8] mb-7" style={{ fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.4 }}>
                  <span style={{ color: '#E8581A' }}>"</span>Email-ul a devenit al doilea canal ca venituri după Google Ads. 32% din vânzările noastre vin acum din automatizări — bani care vin și când dormim.<span style={{ color: '#E8581A' }}>"</span>
                </blockquote>
                <div className="flex items-center gap-3 mb-9">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-head font-bold text-sm text-white" style={{ background: '#162B6A' }}>RP</div>
                  <div>
                    <div className="font-semibold text-sm text-[#F4F0E8]">Raluca P.</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(244,240,232,0.4)' }}>Marketing Director, FashionHub.ro</div>
                  </div>
                </div>
                <p className="text-sm leading-7 pt-6" style={{ color: 'rgba(244,240,232,0.65)', borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                  FashionHub.ro — eCommerce fashion cu lista de emailuri complet neutilizată. Am implementat strategie completă: Klaviyo setup, segmentare, 5 automation flows, campanii lunare. Rezultatele în 9 luni vorbesc de la sine.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[28px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-head font-bold text-[13px] text-[#F4F0E8]">FashionHub.ro — Email Impact</span>
                  <span className="text-[11px] font-medium rounded-full px-3 py-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(244,240,232,0.45)' }}>Mar–Dec 2025</span>
                </div>
                <div className="grid px-7 py-3" style={{ gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.025)' }}>
                  {['Metrică', 'Înainte', 'După'].map((lbl, i) => (
                    <div key={lbl} className="text-[10.5px] font-semibold uppercase tracking-[0.05em]" style={{ color: 'rgba(244,240,232,0.35)', textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right' }}>{lbl}</div>
                  ))}
                </div>
                {[
                  { metric: 'Revenue din email', before: '4%', after: '32%', delta: '+700%' },
                  { metric: 'Open rate mediu', before: '18.2%', after: '42.7%', delta: '+135%' },
                  { metric: 'Revenue automatizări/lună', before: '€1,200', after: '€18,400', delta: '+1433%' },
                  { metric: 'Unsub rate', before: '2.1%', after: '0.28%', delta: '−87%' },
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

      {/* AUTOMATION FLOWS */}
      <section style={{ background: '#FDFAF5', padding: '100px 56px' }} aria-label="Automation flows">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <div className="grid grid-cols-2 gap-[80px] items-center">
            <ScrollReveal>
              <div>
                <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Email Flows</p>
                <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(28px, 2.8vw, 44px)', lineHeight: 1.1 }}>
                  Automatizări care generează<br />venituri cât dormi.
                </h2>
                <p style={{ color: '#6E6A7C', fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
                  Configurate o singură dată, aceste flow-uri lucrează non-stop. Fiecare trigger e o oportunitate de vânzare pe care altfel o pierzi.
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { title: 'Welcome Series — 28% conversie', desc: 'Primele 3 emailuri după înscriere construiesc relația și generează prima achiziție.' },
                    { title: 'Abandoned Cart — 18% recuperare', desc: '3 emailuri în 24h recuperează comenzile abandonate. ROI instantaneu.' },
                    { title: 'Win-back — 12% reactivare', desc: 'Clienții inactivi de 90+ zile reactivați înainte să fie pierduți definitiv.' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,88,26,0.1)', border: '1px solid rgba(232,88,26,0.2)', color: '#E8581A' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
              <div className="rounded-3xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(23,23,32,0.09)', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
                <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(23,23,32,0.09)', background: 'rgba(23,23,32,0.02)' }}>
                  <span className="font-head font-bold text-charcoal text-[13px]">Automation Flows Active</span>
                  <span className="text-[11px] font-semibold rounded-full px-3 py-1" style={{ background: 'rgba(16,185,129,0.08)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>4 flows ON</span>
                </div>
                {[
                  { trigger: 'Subscriber nou', flow: 'Welcome Series', detail: '3 emailuri · 7 zile', result: '28%', lbl: 'Conversie' },
                  { trigger: 'Vizualizare produs', flow: 'Browse Abandonment', detail: '1 email · 1h', result: '8%', lbl: 'Conversie' },
                  { trigger: 'Coș abandonat', flow: 'Abandoned Cart', detail: '3 emailuri · 24h', result: '18%', lbl: 'Recuperare' },
                  { trigger: 'Inactiv 90 zile', flow: 'Win-back', detail: '2 emailuri', result: '12%', lbl: 'Reactivare' },
                ].map(row => (
                  <div key={row.flow} className="flex items-center gap-4 px-6 py-4" style={{ borderBottom: '1px solid rgba(23,23,32,0.06)' }}>
                    <div className="rounded-lg px-3 py-2 text-center flex-shrink-0" style={{ background: '#F4F0E8', minWidth: 100 }}>
                      <div className="text-[9px] font-bold uppercase tracking-wide mb-1" style={{ color: '#A8A4B4' }}>Trigger</div>
                      <div className="text-[11px] font-semibold text-charcoal">{row.trigger}</div>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8A4B4" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    <div className="flex-1">
                      <div className="font-head font-bold text-[13px] text-charcoal">{row.flow}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: '#A8A4B4' }}>{row.detail}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-head font-bold text-[16px] text-orange">{row.result}</div>
                      <div className="text-[10px]" style={{ color: '#A8A4B4' }}>{row.lbl}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#FDFAF5', padding: '0 56px 100px' }} aria-label="Procesul nostru">
        <div className="mx-auto" style={{ maxWidth: 1300 }}>
          <ScrollReveal>
            <div className="mb-16" style={{ maxWidth: 560 }}>
              <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-3">Procesul nostru</p>
              <h2 className="font-head font-extrabold tracking-tight text-charcoal mb-4" style={{ fontSize: 'clamp(30px, 3vw, 48px)', lineHeight: 1.1 }}>
                De la zero la sistem<br />de email complet.
              </h2>
              <p style={{ color: '#6E6A7C', fontSize: 17, lineHeight: 1.7 }}>
                Setup tehnic corect de la început — evităm problemele de deliverability care blochează alte agenții luni de zile.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-col">
            {[
              {
                num: '01',
                title: 'Audit & Setup Tehnic',
                desc: 'Auditează platforma actuală (sau o configurăm de la zero). Setup SPF/DKIM/DMARC, domain warming, integrare cu site-ul și CRM-ul. Fără setup tehnic corect, emailurile ajung în spam — indiferent cât de bun e content-ul.',
                tags: ['Platform setup', 'DNS/deliverability', 'Integration', 'Domain warming'],
              },
              {
                num: '02',
                title: 'Strategie & Segmentare',
                desc: 'Definim segmentele principale (clienți activi, inactivi, leads, VIP), calendarul de campanii, prioritatea flow-urilor de automatizare. GDPR compliance inclus — consimțăminte, unsubscribe, stocare date.',
                tags: ['List segmentation', 'Content calendar', 'Automation priority', 'GDPR compliance'],
              },
              {
                num: '03',
                title: 'Design, Copy & Build',
                desc: 'Creăm template-uri responsive (testate pe 40+ clienți email), scriem copy-ul, construim flow-urile în platformă. Fiecare email are un singur obiectiv — nu umplem cu informații ca să pară "complet".',
                tags: ['Email design', 'Copywriting', 'Flow build', 'Mobile-first'],
              },
              {
                num: '04',
                title: 'Launch, Test & Optimizare',
                desc: 'Testăm pe segment mic înainte de lansare completă. A/B testing pe subject lines. Monitorizăm deliverability, open rates, click rates. Raport lunar, apel de strategie, optimizăm continuu.',
                tags: ['A/B testing', 'Deliverability monitoring', 'Monthly reporting'],
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
                  Totul ce vrei<br />să știi despre<br />email marketing.
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
            <p className="font-semibold text-orange text-sm tracking-[0.08em] uppercase mb-6">Gata să scalezi</p>
            <h2 className="font-head font-extrabold tracking-tight text-[#F4F0E8] mb-5" style={{ fontSize: 'clamp(34px, 4.2vw, 60px)', lineHeight: 1.08 }}>
              Transformă lista în<br />motor de venituri.
            </h2>
            <p style={{ color: 'rgba(244,240,232,0.65)', fontSize: 17, lineHeight: 1.7, marginBottom: 44 }}>
              Audit gratuit al strategiei de email marketing. Îți spunem ce pierde bani și ce ar trebui automatizat imediat pentru impact maxim.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200" style={{ background: '#E8581A', color: '#fff', padding: '15px 32px', fontSize: 15, boxShadow: '0 12px 32px rgba(232,88,26,0.35)' }}>
                Vreau auditul gratuit
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="2" y1="13" x2="13" y2="2"/><polyline points="3,2 13,2 13,12"/></svg>
              </Link>
              <Link href="tel:+40700000000" className="inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 text-[#F4F0E8]" style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', padding: '15px 32px', fontSize: 15 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Sună acum
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-[13px]" style={{ color: 'rgba(244,240,232,0.35)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" aria-hidden="true"><polyline points="20,6 9,17 4,12"/></svg>
              Audit 100% gratuit · GDPR inclus · Fără obligații
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
