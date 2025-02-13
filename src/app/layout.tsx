import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";
const montserrat = Montserrat({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "AROPNEUS | A segurança nunca foi tão fácil!",
  description:
    "Sua histórico de manutenção veicular começa na AROPNEUS. Descubra problemas e faça revisões do seu veículo aqui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} maxContainer`}>
        <UIProvider>
          {/* <DemoFlag /> */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </UIProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
