import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  matcher: [
    // Exclude static files and API routes
    "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
  ],
}