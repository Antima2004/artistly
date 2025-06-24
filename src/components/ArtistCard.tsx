import Image from 'next/image';

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white text-black rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src={artist.image}
        alt={artist.name}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        unoptimized // safe if using public/ path
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{artist.name}</h3>
        <p className="text-sm text-gray-600">{artist.category}</p>
        <p className="text-sm text-gray-600">{artist.location}</p>
        <p className="text-sm font-medium text-gray-800 mt-2">{artist.price}</p>
        <button className="mt-4 w-full bg-accent text-black py-2 rounded hover:opacity-90 transition">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
