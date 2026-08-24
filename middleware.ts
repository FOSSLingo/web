import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.has('gems')) {
    response.cookies.set('gems', '100', { path: '/' })
  }

  return response
}

export const config = {
  matcher: '/dash/:path*',
}
