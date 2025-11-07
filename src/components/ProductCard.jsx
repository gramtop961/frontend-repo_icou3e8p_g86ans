import React from 'react';
import { Star, Plus } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white overflow-hidden hover:shadow-md transition">
      <div className="aspect-square overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-zinc-900 line-clamp-1">{product.name}</h3>
          <span className="text-emerald-600 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-zinc-500 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
