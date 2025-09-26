import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'MAMTA HIMC - Bridge to Health & Beyond',
  description: 'Young People\'s Reproductive Sexual Health and Rights (YRSRHR) - Improving the sexual and reproductive health of youth through gender, sexuality, and rights.',
  keywords: 'health, reproductive health, sexual health, youth, rights, MAMTA, HIMC',
  openGraph: {
    title: 'MAMTA HIMC - Bridge to Health & Beyond',
    description: 'Young People\'s Reproductive Sexual Health and Rights (YRSRHR)',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-arial`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}