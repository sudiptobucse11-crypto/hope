import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'স্পিকার আঃ জব্বার খান স্মৃতি পাবলিক লাইব্রেরি',
  description: 'জ্ঞানই শক্তি — বই হোক সকলের বন্ধু',
  keywords: 'library, digital library, public library, Bangladesh, Barishal, books',
  authors: [{ name: 'Speaker A. Jabbar Khan Memorial Public Library' }],
  openGraph: {
    title: 'স্পিকার আঃ জব্বার খান স্মৃতি পাবলিক লাইব্রেরি',
    description: 'জ্ঞানই শক্তি — বই হোক সকলের বন্ধু',
    url: 'https://library.example.com',
    siteName: 'Digital Public Library',
    images: [
      {
        url: 'https://library.example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansBengali.variable} font-sans`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
