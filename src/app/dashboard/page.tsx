'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Table from '@/components/Table';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-10 bg-background text-foreground min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Dashboard</h1>
        <div className="max-w-6xl mx-auto">
          <Table />
        </div>
      </main>
      <Footer />
    </>
  );
}
