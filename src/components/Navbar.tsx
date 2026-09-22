import React, { useState } from 'react';
import { PageTab } from '../types';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Coffee, Image as ImageIcon, MessageCircle, Home, ShoppingBag, Clock } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
    { id: 'menu', label: 'Menu & Paket', icon: <Coffee className="w-4 h-4" />, badge: 'Hemat' },
    { id: 'galeri', label: 'Galeri Foto', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'kontak', label: 'Kontak & Reservasi', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#261E1A]/10 transition-colors">
      {/* Top Banner announcement: authentic positioning from slides */}
      <div className="bg-[#261E1A] text-[#FAF6F0] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#7E9584] animate-pulse"></span>
            <span className="font-sans font-medium text-[11px] sm:text-xs">
              Buka Setiap Hari: 08:00 – 22:00 WIB • Wi-Fi 100 Mbps & Stopkontak Tersedia
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#FAF6F0]/80">
            <span>Dine-In • Takeaway • Delivery</span>
            <span className="text-[#DAA03D] font-semibold">Mulai Rp 15rb</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C86D51] rounded-lg p-1"
            id="nav-logo-btn"
          >
            <BrandLogo showTagline={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#261E1A] text-[#FAF6F0] shadow-sm'
                      : 'text-[#261E1A]/80 hover:text-[#261E1A] hover:bg-[#261E1A]/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="px-1.5 py-0.2 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#DAA03D]/20 text-[#261E1A]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              id="open-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#261E1A] hover:bg-[#261E1A]/5 border border-[#261E1A]/10 transition-colors"
              title="Lihat Keranjang Pesanan"
              aria-label="Lihat Keranjang Pesanan"
            >
              <ShoppingBag className="w-5 h-5 text-[#261E1A]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#C86D51] text-white text-xs font-bold leading-none animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order Button */}
            <button
              id="cta-nav-pesan"
              onClick={() => handleNavClick('kontak')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C86D51] hover:bg-[#B55B3F] text-white text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan / Reservasi</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#261E1A] hover:bg-[#261E1A]/5 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#261E1A]/15 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#261E1A] text-[#FAF6F0]'
                    : 'text-[#261E1A] hover:bg-[#261E1A]/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#DAA03D]/25 text-[#261E1A] font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#261E1A]/10 space-y-2">
            <button
              id="mobile-cta-pesan"
              onClick={() => handleNavClick('kontak')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C86D51] text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp & Reservasi</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#261E1A]/60 pt-2">
              <Clock className="w-3.5 h-3.5 text-[#7E9584]" />
              <span>Buka Setiap Hari 08.00 - 22.00 WIB</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
