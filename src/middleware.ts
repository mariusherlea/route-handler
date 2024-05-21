import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreferences = request.cookies.get('theme');
  if (!themePreferences) {
    response.cookies.set('theme', 'light');
    // if (request.nextUrl.pathname === '/profile') {
    //   return NextResponse.redirect(new URL('/hello', request.url));
    // }
  }
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
  response.headers.set('custom-header', 'custom-value');
  // export const config = { matcher: '/profile' };
  return response;
}
