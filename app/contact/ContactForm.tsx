'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'

const services = [
  'Google Ads',
  'SEO',
  'Web Development',
  'Design & Branding',
  'Facebook Ads',
  'Newsletter / Email Marketing',
  'Nu știu — vreau consultanță',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-head font-bold text-charcoal mb-3" style={{ fontSize: 22 }}>Mesaj trimis cu succes!</h3>
        <p style={{ color: '#6E6A7C', fontSize: 15, lineHeight: 1.6 }}>Te contactăm în curând. Verifică și spam-ul dacă nu primești răspunsul nostru în 24h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="name">Nume *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Ion Popescu"
            className="w-full rounded-xl px-4 py-3 text-charcoal outline-none"
            style={{ border: '1.5px solid rgba(23,23,32,0.12)', fontSize: 15, background: '#FDFAF5' }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="ion@companie.ro"
            className="w-full rounded-xl px-4 py-3 text-charcoal outline-none"
            style={{ border: '1.5px solid rgba(23,23,32,0.12)', fontSize: 15, background: '#FDFAF5' }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="company">Companie</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          placeholder="Compania SRL"
          className="w-full rounded-xl px-4 py-3 text-charcoal outline-none"
          style={{ border: '1.5px solid rgba(23,23,32,0.12)', fontSize: 15, background: '#FDFAF5' }}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="service">Serviciu de interes</label>
        <select
          id="service"
          value={form.service}
          onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
          className="w-full rounded-xl px-4 py-3 text-charcoal outline-none appearance-none"
          style={{ border: '1.5px solid rgba(23,23,32,0.12)', fontSize: 15, background: '#FDFAF5' }}
        >
          <option value="">Alege un serviciu...</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="message">Mesaj *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Descrie pe scurt afacerea ta și ce îți dorești să obții..."
          className="w-full rounded-xl px-4 py-3 text-charcoal outline-none resize-none"
          style={{ border: '1.5px solid rgba(23,23,32,0.12)', fontSize: 15, background: '#FDFAF5', lineHeight: 1.6 }}
        />
      </div>

      {status === 'error' && (
        <div className="rounded-xl p-4 text-sm" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
          A apărut o eroare. Încearcă din nou sau scrie-ne direct la hello@antigravitydigital.ro.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200"
        style={{ background: status === 'loading' ? 'rgba(232,88,26,0.7)' : '#E8581A', color: '#fff', padding: '15px 32px', fontSize: 16, cursor: status === 'loading' ? 'not-allowed' : 'pointer', border: 'none' }}
      >
        {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
        {status !== 'loading' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )}
      </button>

      <p className="text-[13px] text-center" style={{ color: '#A8A4B4' }}>
        Prin trimiterea formularului, ești de acord cu{' '}
        <Link href="/privacy" className="underline underline-offset-2 text-orange">politica de confidențialitate</Link>.
      </p>
    </form>
  )
}
