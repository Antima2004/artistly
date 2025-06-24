'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import Footer from '@/components/Footer';
import Image from 'next/image';


const categories = [
  { title: 'Singers', img: '/images/singer.jpg' },
  { title: 'Dancers', img: '/images/dancer.jpg' },
  { title: 'Speakers', img: '/images/speaker.jpg' },
  { title: 'DJs', img: '/images/dj.jpg' },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      {/* Overview Section */}
<section className="py-16 px-6 bg-background text-foreground relative overflow-hidden">
  {/* Glow Effects */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Text Left */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4 leading-tight">What is Artistly?</h2>
      <p className="text-lg text-white/80 mb-6">
        <span className="font-semibold text-accent">Artistly.com</span> is a modern, user-friendly platform that empowers 
        <span className="italic text-white"> event planners </span> to connect with the best performing artists across the country.
      </p>
      <p className="text-white/60 text-base">
        Whether it’s a wedding, corporate gala, music festival, or private party — 
        <span className="text-white font-medium"> we make discovering and booking talent seamless and stress-free.</span>
      </p>
    </div>

    {/* Image Right */}
    <div className="w-full md:w-1/2">
      <Image
        src="/images/showcase.jpg"
        alt="Artistly Visual"
        width={500}
        height={400}
        className="rounded-xl shadow-lg w-full h-auto object-cover"
        unoptimized
      />
    </div>
  </div>
</section>

      {/* Category Cards Section */}
      <section className="py-12 px-6 bg-background text-foreground">
        <h2 className="text-2xl font-bold mb-6 text-center">Browse by Artist Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} img={category.img} />
          ))}
        </div>
      </section>
      <Footer />
      </>

  );
}
