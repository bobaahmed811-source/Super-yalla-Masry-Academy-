import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: {
    template: '%s | Yalla Masry Academy',
    default: 'Yalla Masry Academy - تعليم اللغة العربية للأطفال والنساء',
  },
  description: 'أكاديمية يلا مصري لتعليم اللغة العربية العامية المصرية للنساء والأطفال بأسلوب ممتع وآمن.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=El+Messiri:wght@400;700;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0d284e" />
      </head>
      <body className="antialiased">
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
