"use client";

import NextAuthProvider from "@/components/providers/NextAuthProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
