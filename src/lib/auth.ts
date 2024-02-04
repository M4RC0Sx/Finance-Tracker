import NextAuth from "next-auth";
import github from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export const config: NextAuthConfig = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
