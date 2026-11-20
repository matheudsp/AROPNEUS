import type { Metadata } from 'next';
import '@fontsource-variable/montserrat/wght.css';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Aro Pneus | Pneus, Troca de Óleo e Coding em Floriano–PI',
  description:
    'Pneus, troca de óleo e coding Volkswagen e Audi em Floriano, PI. Peça seu orçamento na Aro Pneus pelo WhatsApp.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className='font-site maxContainer'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
