import { intlMiddleware } from '@/i18n/i18n-configs'
import { getCurrentUser } from '@/lib/supabase/server'
import { NextResponse, type NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const localeUrl = pathname.split('/')

  if (localeUrl.length < 2 || !localeUrl[1]) {
    const defaultLocale = 'en'
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url))
  }

  const locale = localeUrl[1]
  const {
    data: { user },
  } = await getCurrentUser()
  const url = req.nextUrl
  const role = user?.user_metadata.role

  if (
    (!user && url.pathname.startsWith(`/${locale}/dashboard/parent`)) ||
    url.pathname.startsWith(`/${locale}/dashboard/babysitter`)
  ) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url))
  }

  if (role) {
    if (
      (user && url.pathname.startsWith(`/${locale}/signin`)) ||
      url.pathname.startsWith(`/${locale}/signup`)
    ) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard/${role}`, req.url))
    }
  }

  if (user && role && url.pathname === `/${locale}`) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard/${role}`, req.url))
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/', '/(fa|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
