// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

console.log("monggos");
export function middleware(request: NextRequest) {
  const jwtAuthCookie = request.cookies.get("jwt_auth");

  // Check if the user has the jwt_auth cookie
  if (!jwtAuthCookie) {
    console.log(
      `Unauthenticated user attempting to access: ${request.nextUrl.pathname}`
    );
    // Optionally redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to routes that start with /admin
export const config = {
  matcher: "/", // Matches all routes starting with /admin
};
