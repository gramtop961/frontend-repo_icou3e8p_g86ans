import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  const handleCheckout = () => {
    alert('This is a demo checkout. Add your backend to process orders.');
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header
        query={query}
        onSearchChange={setQuery}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        <Categories active={category} onSelect={setCategory} />
        <ProductGrid query={query} category={category} onAdd={handleAdd} />
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        Built as a simple product app demo. Refine categories, add filters, or wire real checkout next.
      </footer>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
