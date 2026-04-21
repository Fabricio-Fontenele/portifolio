import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Fabrício Fontenele | Backend e Engenharia de Software",
  description:
    "Portfólio de Fabrício Fontenele, com foco em backend, engenharia de software, TypeScript, PostgreSQL, Supabase e arquitetura.",
  icons: {
    icon: "/favicon.svg",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
