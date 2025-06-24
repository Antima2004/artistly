'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtistCard from '@/components/ArtistCard';
import FilterBlock from '@/components/FilterBlock';

const artists = [
  {
    id: 1,
    name: 'Aarav Sharma',
    category: 'Singer',
    location: 'Mumbai',
    price: '₹25,000 - ₹40,000',
    image: '/images/singer.jpg',
  },
  {
    id: 2,
    name: 'Ishita Rao',
    category: 'Dancer',
    location: 'Delhi',
    price: '₹20,000 - ₹35,000',
    image: '/images/dancer.jpg',
  },
  {
    id: 3,
    name: 'Karan Mehta',
    category: 'Speaker',
    location: 'Bangalore',
    price: '₹15,000 - ₹30,000',
    image: '/images/speaker.jpg',
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    category: 'DJ',
    location: 'Pune',
    price: '₹30,000 - ₹50,000',
    image: '/images/dj.jpg',
  },
];

export default function ArtistsPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-10 bg-background text-foreground min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Artists</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Block */}
          <div className="md:w-1/4">
            <FilterBlock />
          </div>

          {/* Artist Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
