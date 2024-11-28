// app/middleware.js

import { NextResponse } from "next/server";

export function middleware(req) {
  // Use cookies.get() to retrieve the token
  const token = req.cookies.get("auth_token");

  if (!token) {
    // If token is not present, redirect to the login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If token is present, allow the request to continue
  return NextResponse.next();
}

// Using matcher to define routes
export const config = {
  matcher: ["/signin", "/signup"], // You can check against any URL here
};
