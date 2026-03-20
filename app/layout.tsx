import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import SmoothScroll from '@/components/providers/SmoothScroll'
import DarkModeInit from '@/components/providers/DarkModeInit'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-head',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Antigravity Digital — Agenție de Marketing',
    template: '%s | Antigravity Digital',
  },
  description: 'Creștem afaceri românești prin Google Ads, SEO și Web Development. Strategii bazate pe date, rezultate măsurabile.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${dmSans.variable} font-body bg-cream text-text-1`}>
        <DarkModeInit />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
