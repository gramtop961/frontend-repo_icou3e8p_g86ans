import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    description: 'Immersive sound with active noise cancellation and 30h battery life.',
    price: 149.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MjQ4MjkwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Audio',
  },
  {
    id: 'p2',
    name: 'Smartwatch Pro',
    description: 'Health tracking, GPS, and 5-day battery with fast charging.',
    price: 199.0,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    category: 'Wearables',
  },
  {
    id: 'p3',
    name: 'Ergonomic Chair',
    description: 'Lumbar support, breathable mesh, and dynamic recline for long sessions.',
    price: 289.5,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    category: 'Office',
  },
  {
    id: 'p4',
    name: '4K Monitor 27"',
    description: 'Ultra sharp IPS panel with HDR10 and 99% sRGB color accuracy.',
    price: 329.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Displays',
  },
  {
    id: 'p5',
    name: 'Mechanical Keyboard',
    description: 'Hot-swappable switches, RGB backlight, and aluminum case.',
    price: 119.0,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    category: 'Peripherals',
  },
  {
    id: 'p6',
    name: 'Portable SSD 1TB',
    description: 'NVMe speed up to 1,050 MB/s in a compact, durable shell.',
    price: 139.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Storage',
  },
];

function ProductGrid({ query, category = 'All', onAdd }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sampleProducts.filter((p) => {
      const matchesQuery = !q || [p.name, p.description, p.category].some((f) => f.toLowerCase().includes(q));
      const matchesCategory = category === 'All' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="text-sm text-zinc-500">High quality picks curated for productivity.</p>
        </div>
        <p className="text-sm text-zinc-500">{filtered.length} results</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
