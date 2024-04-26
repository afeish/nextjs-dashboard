import '@/app/ui/global.css';
import { nunito } from '@/app/ui/fonts';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Dashboard, built with App Router',
  metadataBase: new URL('https://nextjs-dashboard-beta-ruby-62.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
