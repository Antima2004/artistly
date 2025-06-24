'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-foreground px-6 py-4 flex justify-between items-center border-b border-white/10">
      <h1 className="text-2xl font-bold">🎭 Artistly</h1>
      <nav className="space-x-4 text-sm">
        <Link href="/" className="hover:text-accent transition">Home</Link>
        <Link href="/artists" className="hover:text-accent transition">Artists</Link>
        <Link href="/onboard" className="hover:text-accent transition">Onboard</Link>
        <Link href="/dashboard" className="hover:text-accent transition">Dashboard</Link>
      </nav>
    </header>
  );
}
