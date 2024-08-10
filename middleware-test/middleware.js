import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const cookie = req.cookies['ab-test-group'];

  if (!cookie) {
    // Randomly assigning user to group 'A' or 'B'
    const group = Math.random() < 0.5 ? 'A' : 'B';
    url.pathname = `/${group}${url.pathname}`;
    const response = NextResponse.rewrite(url);
    return response;
  }
  
  url.pathname = `/${cookie}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/test-page'],
};
