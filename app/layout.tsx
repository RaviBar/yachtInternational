import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AppPromoSection from "@/components/AppPromoSection";
import Footer from '@/components/Footer';
import { Hind_Guntur, Montserrat, Oswald } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const hindGuntur = Hind_Guntur({subsets: ['latin'],weight: ['300', '400', '500', '600', '700'],})
const oswald = Oswald({ subsets: ['latin'], weight: ['200', '400', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Yacht International Singapore',
  description: 'Your go to maritime support provider in Singapore since 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hindGuntur.className} ${montserrat.className} ${oswald.className}`}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <AppPromoSection />
        <Footer />
      </body>
    </html>
  );
}