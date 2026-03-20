import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import DarkModeInit from '@/components/providers/DarkModeInit'

const plusJakarta = localFont({
  src: './fonts/PlusJakartaSans.woff2',
  variable: '--font-head',
  display: 'swap',
  weight: '400 800', // Variable font weight range
})

const dmSans = localFont({
  src: './fonts/DMSans.woff2',
  variable: '--font-body',
  display: 'swap',
  weight: '300 600', // Variable font weight range
})

export const metadata: Metadata = {
  title: {
    default: 'Antigravity Digital — Agenție de Marketing',
    template: '%s | Antigravity Digital',
  },
  description: 'Creștem afaceri românești prin Google Ads, SEO și Web Development. Strategii bazate pe date, rezultate măsurabile.',
  metadataBase: new URL('https://antigravitydigital.ro'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${dmSans.variable} font-body bg-cream text-text-1`}>
        <DarkModeInit />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
