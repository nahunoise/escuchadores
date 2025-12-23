import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['es', 'en']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Revisa si el pathname ya tiene el idioma (es o en)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Si no tiene idioma, redirigimos a español por defecto
  request.nextUrl.pathname = `/es${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Evita que el middleware actúe sobre imágenes, api y archivos estáticos
 matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)'],
}