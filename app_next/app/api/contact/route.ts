import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, company, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // TODO: integrate with email service (Resend, SendGrid, etc.)
  console.log('Contact form submission:', { name, email, company, message })

  return NextResponse.json({ success: true })
}
