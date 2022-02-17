import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  console.log(`middleware ${new Date()}`);
  const { isLoggedIn } = req.cookies;
  console.log(`API is logged in details: ${isLoggedIn}`);
  if (!isLoggedIn) {
    return new Response("Auth required", {
      status: 401,
    });
  }
  return NextResponse.next();
};
