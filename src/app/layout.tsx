import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artistly',
  description: 'Find and book performing artists',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}
