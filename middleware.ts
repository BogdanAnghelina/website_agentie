import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: Record<string, string> = {
  '/google-ads': '/services/google-ads',
  '/seo': '/services/seo',
  '/web-dev': '/services/web-development',
  '/fb-ads': '/services/facebook-ads',
  '/design': '/services/design',
  '/newsletter': '/services/newsletter',
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (redirects[path]) {
    return NextResponse.redirect(new URL(redirects[path], request.url), 301)
  }
}
