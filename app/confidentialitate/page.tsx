import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate | Antigravity Digital',
  description: 'Politica de confidențialitate și prelucrarea datelor personale la Antigravity Digital SRL.',
  alternates: { canonical: 'https://antigravitydigital.ro/confidentialitate' },
}

export default function ConfidentialitatePage() {
  return (
    <section className="bg-cream py-24 px-14">
      <div className="mx-auto prose prose-lg" style={{ maxWidth: 800 }}>
        <h1 className="font-head font-extrabold text-text-1 mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>Politica de Confidențialitate</h1>
        <p className="text-text-3 text-sm mb-10">Ultima actualizare: Martie 2025</p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>1. Cine suntem</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Antigravity Digital SRL este operatorul datelor cu caracter personal colectate prin intermediul acestui website. Ne angajăm să protejăm confidențialitatea utilizatorilor conform Regulamentului GDPR (UE) 2016/679.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>2. Ce date colectăm</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Colectăm datele pe care ni le furnizezi voluntar prin formularul de contact: nume, adresă de email, număr de telefon (opțional) și conținutul mesajului. Nu colectăm date sensibile.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>3. Cum folosim datele</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Datele colectate sunt utilizate exclusiv pentru a răspunde solicitărilor tale și pentru a-ți furniza serviciile solicitate. Nu vindem și nu transferăm datele tale terților, cu excepția cazurilor prevăzute de lege.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>4. Cookies</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Website-ul nostru utilizează cookies funcționale și analitice. Detalii suplimentare în <a href="/cookies" className="text-orange">Politica de Cookies</a>.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>5. Drepturile tale</h2>
        <p className="text-text-2 text-[15px] leading-[1.8] mb-5">
          Conform GDPR, ai dreptul la acces, rectificare, ștergere, portabilitate a datelor și dreptul de a te opune prelucrării. Pentru exercitarea acestor drepturi, contactează-ne la <a href="mailto:hello@antigravitydigital.ro" className="text-orange">hello@antigravitydigital.ro</a>.
        </p>

        <h2 className="font-head font-bold text-text-1 mt-10 mb-4" style={{ fontSize: 20 }}>6. Retenția datelor</h2>
        <p className="text-text-2 text-[15px] leading-[1.8]">
          Datele furnizate prin formular sunt păstrate cel mult 2 ani sau până la retragerea consimțământului, oricare survine mai devreme.
        </p>
      </div>
    </section>
  )
}
