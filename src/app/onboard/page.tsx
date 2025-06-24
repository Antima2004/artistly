'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnboardForm from '@/components/OnboardForm';

export default function OnboardPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-10 bg-background text-foreground min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Onboard as an Artist</h1>
        <div className="max-w-3xl mx-auto">
          <OnboardForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
