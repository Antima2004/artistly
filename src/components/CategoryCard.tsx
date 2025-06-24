import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  img: string;
}

export default function CategoryCard({ title, img }: CategoryCardProps) {
  return (
    <div className="bg-white text-black shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <Image
        src={img}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        unoptimized
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}


