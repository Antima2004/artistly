'use client';

const artistSubmissions = [
  {
    id: 1,
    name: 'Aarav Sharma',
    category: 'Singer',
    city: 'Mumbai',
    fee: '₹25,000 - ₹40,000',
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    category: 'DJ',
    city: 'Delhi',
    fee: '₹30,000 - ₹50,000',
  },
  {
    id: 3,
    name: 'Karan Mehta',
    category: 'Speaker',
    city: 'Bangalore',
    fee: '₹15,000 - ₹25,000',
  },
];

export default function Table() {
  return (
    <div className="overflow-x-auto rounded shadow bg-white text-black">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100 text-left text-sm font-medium">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">City</th>
            <th className="px-6 py-3">Fee</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {artistSubmissions.map((artist) => (
            <tr key={artist.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{artist.name}</td>
              <td className="px-6 py-4">{artist.category}</td>
              <td className="px-6 py-4">{artist.city}</td>
              <td className="px-6 py-4">{artist.fee}</td>
              <td className="px-6 py-4">
                <button className="bg-accent text-black px-4 py-2 rounded hover:opacity-90 transition text-sm">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
