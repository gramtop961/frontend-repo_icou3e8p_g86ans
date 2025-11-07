import React from 'react';
import { ShoppingCart, Search, Package2 } from 'lucide-react';

function Header({ query, onSearchChange, cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow">
            <Package2 size={20} />
          </div>
          <span className="font-semibold text-zinc-900">ProductHub</span>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              value={query}
              onChange={(e) => onSearchChange(e.target.value)}
              type="text"
              placeholder="Search products, brands, categories..."
              className="w-full pl-10 pr-3 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 text-sm bg-white"
            />
          </div>
        </div>

        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            value={query}
            onChange={(e) => onSearchChange(e.target.value)}
            type="text"
            placeholder="Search products, brands, categories..."
            className="w-full pl-10 pr-3 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 text-sm bg-white"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
