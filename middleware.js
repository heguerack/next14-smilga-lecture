import { NextResponse } from 'next/server'

//with just the following funtion, the middleware runs in everyt single route
export default function middleware(request) {
  // console.log('Hello from middleware file')
  //instead of console.logginh we cann rerun something
  // return Response.json({ msg: 'Hello from middleware' })
  // or we could just redirect!

  console.log('Hello from middleware')
  return NextResponse.redirect(new URL('/', request.url))
}

//with this code, we say jut in the about route the middleware runs
export const config = {
  // matcher: '/about',
  // this will restrict evry route after about and task
  matcher: ['/about/:path*'],
}
