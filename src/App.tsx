/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab, MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroIntro } from './components/HeroIntro';
import { MenuPage } from './components/MenuPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactOrderPage } from './components/ContactOrderPage';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('beranda');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cafe_tepi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cafe_tepi_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalCartAmount = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const cartItemIds = cart.map((ci) => ci.item.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#261E1A] font-sans">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'beranda' && (
          <HeroIntro
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'menu' && (
          <MenuPage
            onAddToCart={handleAddToCart}
            cartItemIds={cartItemIds}
            onGoToOrder={() => {
              setCurrentTab('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'galeri' && <GalleryPage />}

        {currentTab === 'kontak' && (
          <ContactOrderPage
            cart={cart}
            onOpenMenu={() => {
              setCurrentTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Floating Cart Indicator on Mobile when Cart has items */}
      {cart.length > 0 && (
        <div className="md:hidden fixed bottom-5 left-4 right-4 z-30">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#261E1A] text-[#FAF6F0] shadow-xl border border-white/20 active:scale-98 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C86D51] flex items-center justify-center text-white text-xs font-bold">
                {totalCartItems}
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold">Pesanan Kamu</div>
                <div className="text-[11px] text-[#FAF6F0]/70">
                  Rp {totalCartAmount.toLocaleString('id-ID')}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#DAA03D]">
              <span>Lihat & Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToOrder={() => {
          setIsCartOpen(false);
          setCurrentTab('kontak');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
