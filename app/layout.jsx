import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Fabrício Fontenele | Backend e Engenharia de Software",
  description:
    "Portfólio de Fabrício Fontenele, com foco em backend, engenharia de software, TypeScript, PostgreSQL, Supabase e arquitetura.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
