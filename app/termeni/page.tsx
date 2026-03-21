import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții | Antigravity Digital',
  description: 'Termenii și condițiile de utilizare ale serviciilor Antigravity Digital SRL.',
  alternates: { canonical: 'https://antigravitydigital.ro/termeni' },
}

export default function TermeniPage() {
  return (
    <section className="bg-cream py-16 px-5 md:py-24 md:px-14">
      <div className="mx-auto prose prose-lg" style={{ maxWidth: 800 }}>
        <h1 className="font-head font-extrabold text-text-1 mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>Termeni și Condiții</h1>
        <p className="text-text-3 text-sm mb-10">Ultima actualizare: Martie 2025</p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>1. Informații generale</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Antigravity Digital SRL, cu sediul în București, România, oferă servicii de marketing digital clienților persoane fizice și juridice. Utilizarea serviciilor noastre implică acceptarea prezentelor termeni și condiții.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>2. Servicii oferite</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Oferim servicii de Google Ads, SEO, Web Development, Facebook & Instagram Ads, Design și Email Marketing. Detaliile specifice ale fiecărui serviciu sunt stipulate în contractul individual semnat cu fiecare client.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>3. Obligațiile clientului</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Clientul se obligă să furnizeze informații corecte și complete, să respecte termenele de plată convenite și să nu utilizeze serviciile noastre în scopuri ilegale sau care încalcă drepturile terților.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>4. Proprietate intelectuală</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Toate materialele create de Antigravity Digital pentru client devin proprietatea clientului după achitarea integrală a facturilor aferente. Antigravity Digital își rezervă dreptul de a prezenta proiectele ca parte a portofoliului, cu acordul clientului.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>5. Limitarea răspunderii</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Antigravity Digital nu poate garanta rezultate specifice, deoarece performanța campaniilor de marketing depinde de factori externi (piață, concurență, sezonalitate). Ne angajăm să depunem toate eforturile rezonabile pentru atingerea obiectivelor agreate.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>6. Contact</h2>
        <p className="text-text-2 text-[15px] leading-[1.8]">
          Pentru orice întrebări legate de acești termeni, ne poți contacta la <a href="mailto:hello@antigravitydigital.ro" className="text-orange">hello@antigravitydigital.ro</a>.
        </p>
      </div>
    </section>
  )
}
