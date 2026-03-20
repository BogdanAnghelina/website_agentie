import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Cookies | Antigravity Digital',
  description: 'Informații despre utilizarea cookies pe website-ul Antigravity Digital.',
  alternates: { canonical: 'https://antigravitydigital.ro/cookies' },
}

export default function CookiesPage() {
  return (
    <section className="bg-cream py-24 px-14">
      <div className="mx-auto" style={{ maxWidth: 800 }}>
        <h1 className="font-head font-extrabold text-text-1 mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>Politica de Cookies</h1>
        <p className="text-text-3 text-sm mb-10">Ultima actualizare: Martie 2025</p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>Ce sunt cookies?</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Cookies sunt fișiere text de mici dimensiuni stocate pe dispozitivul tău atunci când vizitezi un website. Ele permit site-ului să rețină preferințele tale sau să colecteze date anonime de utilizare.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>Tipuri de cookies utilizate</h2>
        <div className="flex flex-col gap-4 mb-8">
          {[
            { name: 'Cookies strict necesare', desc: 'Esențiale pentru funcționarea corectă a website-ului (ex: sesiunea utilizatorului, preferința dark/light mode). Nu pot fi dezactivate.' },
            { name: 'Cookies analitice', desc: 'Ne ajută să înțelegem cum interacționezi cu site-ul (pagini vizitate, timp pe site). Datele sunt anonimizate.' },
            { name: 'Cookies de marketing', desc: 'Utilizate pentru a afișa reclame relevante pe alte platforme (Google Ads remarketing, Meta Pixel). Pot fi dezactivate.' },
          ].map((type) => (
            <div key={type.name} className="rounded-2xl p-6" style={{ background: '#FDFBF7', border: '1px solid rgba(23,23,32,0.09)' }}>
              <div className="font-head font-bold text-text-1 mb-2" style={{ fontSize: 15 }}>{type.name}</div>
              <p className="text-text-2 text-[14.5px] leading-[1.7]">{type.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>Cum controlezi cookies?</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Poți configura browserul tău să refuze cookies sau să te avertizeze când sunt utilizate. Totuși, dezactivarea anumitor cookies poate afecta funcționalitatea website-ului.
        </p>
        <p className="text-text-2 text-[15px] leading-[1.8]">
          Pentru întrebări, contactează-ne la <a href="mailto:hello@antigravitydigital.ro" className="text-orange">hello@antigravitydigital.ro</a>.
        </p>
      </div>
    </section>
  )
}
