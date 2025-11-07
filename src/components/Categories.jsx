import React from 'react';

const categories = [
  { key: 'All', color: 'from-zinc-100 to-zinc-50' },
  { key: 'Audio', color: 'from-emerald-50 to-emerald-100' },
  { key: 'Wearables', color: 'from-sky-50 to-sky-100' },
  { key: 'Office', color: 'from-amber-50 to-amber-100' },
  { key: 'Displays', color: 'from-purple-50 to-purple-100' },
  { key: 'Peripherals', color: 'from-rose-50 to-rose-100' },
  { key: 'Storage', color: 'from-indigo-50 to-indigo-100' },
];

function Categories({ active, onSelect }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex gap-3 overflow-auto no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => onSelect(c.key)}
            className={`px-3 py-1.5 rounded-md text-sm border ${
              active === c.key
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            {c.key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
