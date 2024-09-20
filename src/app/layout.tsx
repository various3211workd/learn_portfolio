import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ぽーとふぉりお',
  description: '勉強用のポートフォリオ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="!scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
