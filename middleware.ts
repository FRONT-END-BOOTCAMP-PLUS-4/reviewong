import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req });

  // 로그인된 사용자가 /login 또는 /signup 페이지에 접근하는 경우
  if ((pathname === '/login' || pathname === '/signup') && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // (member) 그룹 내의 페이지들 체크
  // 예: /profile, /settings, /dashboard 등
  const memberPages = ['/profile', '/settings', '/dashboard'];
  const isMemberPage = memberPages.some((page) => pathname.startsWith(page));

  if (isMemberPage && !token) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/profile/:path*',
    '/settings/:path*',
    '/dashboard/:path*',
    '/api/:path*',
  ],
};
