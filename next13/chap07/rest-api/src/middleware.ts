import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  // use IF-statement or matchers!
  // if(request.url.includes('/api/')){}

  //   Or we can use the Regex combined within conditionals
  //   const regex = new RegExp('/api/*');

  //   if (regex.test(request.url)) {
  //   }

  //   console.log('Middleware!');
  //   console.log(request.method);
  //   console.log(request.url);
  //   console.log(request.headers.get('origin'));

  const whiteListOrigins =
    process.env.NODE_ENV === 'production'
      ? ['https://www.yourwebsite.com', 'https://yourwebsite.com']
      : ['localhost:3000', 'http://localhost:3000', 'http://127.0.1:3000'];
  // 'https://www.google.com/',

  if (origin && !origin.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
