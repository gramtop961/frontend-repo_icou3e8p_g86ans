import React from 'react';
import { X, Trash2 } from 'lucide-react';

function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className={`fixed inset-0 z-30 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl border-l border-zinc-200 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          <h2 className="font-semibold">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-zinc-100">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[calc(100%-160px)] overflow-auto">
          {items.length === 0 ? (
            <p className="text-sm text-zinc-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover bg-zinc-50" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <p className="text-xs text-zinc-500">Qty: {item.qty}</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="p-2 rounded-md hover:bg-zinc-100">
                  <Trash2 size={16} className="text-zinc-500" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 p-4 space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
