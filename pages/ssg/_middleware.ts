import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  console.log(`middleware ${new Date()}`);
  const { isLoggedIn } = req.cookies;
  console.log(`SSG is logged in details: ${isLoggedIn}`);
  if (!isLoggedIn) {
    console.log('SSG not logged in');
    const url = req.nextUrl.clone();
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
    // return new Response("Auth required", {
    //   status: 401,
    // });
  }
  return NextResponse.next();
};
