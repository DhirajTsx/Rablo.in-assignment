import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = req.cookies.get("userID")?.value;
  const acc = req.cookies.get("accCreated")?.value;

  // if (!user && req.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // if (user && acc === "0" && req.nextUrl.pathname !== "/create-profile") {
  //   return NextResponse.redirect(new URL("/create-profile", req.url));
  // }

  // if (user && acc === "1" && req.nextUrl.pathname !== "/dashboard") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/create-profile/:path*"],
};
