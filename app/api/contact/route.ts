import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, budget } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Câmpurile Nume, Email și Mesaj sunt obligatorii.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresa de email nu este validă.' },
        { status: 400 }
      )
    }

    // To enable email delivery: set RESEND_API_KEY in Vercel env vars and install resend
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@antigravitydigital.ro',
    //   to: 'hello@antigravitydigital.ro',
    //   subject: `Mesaj nou de la ${name}`,
    //   html: `<h2>Mesaj nou</h2><p><strong>Nume:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Telefon:</strong> ${phone || '—'}</p><p><strong>Serviciu:</strong> ${service || '—'}</p><p><strong>Buget:</strong> ${budget || '—'}</p><p><strong>Mesaj:</strong><br>${message}</p>`,
    //   replyTo: email,
    // })

    console.log('[Contact Form]', { name, email, phone, service, budget, message, ts: new Date().toISOString() })

    return NextResponse.json(
      { success: true, message: 'Mesajul tău a fost trimis cu succes. Te contactăm în 24 de ore.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json(
      { error: 'A apărut o eroare. Încearcă din nou sau contactează-ne direct.' },
      { status: 500 }
    )
  }
}
