export default function FilterBlock() {
  return (
    <div className="bg-white text-black rounded-lg p-4 shadow-md">
      <h4 className="text-lg font-semibold mb-4">Filter</h4>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Category</label>
        <select className="w-full border rounded px-3 py-2">
          <option>All</option>
          <option>Singer</option>
          <option>Dancer</option>
          <option>Speaker</option>
          <option>DJ</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Location</label>
        <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter city" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price Range</label>
        <select className="w-full border rounded px-3 py-2">
          <option>All</option>
          <option>Below ₹20,000</option>
          <option>₹20,000 - ₹40,000</option>
          <option>Above ₹40,000</option>
        </select>
      </div>
    </div>
  );
}
