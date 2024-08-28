import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Example: Redirect if not authenticated
  if (!req.url.includes('/login') && !req.cookies.get('token')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
