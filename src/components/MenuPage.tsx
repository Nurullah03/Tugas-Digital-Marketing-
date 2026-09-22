import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CAFE_INFO } from '../data/cafeData';
import { Plus, Check, Search, Sparkles, Coffee, CupSoda, Utensils, Gift, ArrowRight } from 'lucide-react';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
  onGoToOrder: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onAddToCart,
  cartItemIds,
  onGoToOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Menu', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'bundling', label: 'Paket Bundling Hemat', icon: <Gift className="w-4 h-4" />, highlight: true },
    { id: 'kopi', label: 'Kopi Kekinian', icon: <Coffee className="w-4 h-4" /> },
    { id: 'non-kopi', label: 'Non-Coffee', icon: <CupSoda className="w-4 h-4" /> },
    { id: 'snack', label: 'Snack & Kudapan', icon: <Utensils className="w-4 h-4" /> },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 900);
  };

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C86D51]/15 text-[#C86D51]">
          Katalog Menu Cafe Tepi
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261E1A] tracking-tight">
          Kopi yang Jujur, Harga yang Bersahabat.
        </h1>
        <p className="text-sm sm:text-base text-[#261E1A]/70 leading-relaxed font-sans max-w-2xl mx-auto">
          Dibuat dari bahan baku pilihan dengan kisaran harga{' '}
          <strong className="text-[#261E1A] font-semibold">{CAFE_INFO.priceRange}</strong>.
          Cocok untuk teman nugas harian atau sekadar meluangkan ruang jeda.
        </p>
      </div>

      {/* Promo Banner: exact wording from PDF */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#261E1A] via-[#3A2F2A] to-[#261E1A] p-6 sm:p-8 text-[#FAF6F0] shadow-md border border-[#FAF6F0]/10">
        <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-64 h-64 rounded-full bg-[#C86D51]/15 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#DAA03D] text-[#261E1A]">
                PROMO KHUSUS
              </span>
              <span className="text-xs text-[#FAF6F0]/70 font-sans">
                Paket Hemat Kopi + Snack
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Beli 1 Kopi + Snack, Harganya Jauh Lebih Hemat!
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-sans leading-relaxed">
              Dibuat khusus untuk kamu yang butuh energi nugas tanpa ribet. Hemat hingga Rp7.000 dibanding beli satuan.
            </p>
          </div>
          <button
            onClick={() => setSelectedCategory('bundling')}
            className="self-start md:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DAA03D] hover:bg-[#c99132] text-[#261E1A] font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-sm whitespace-nowrap"
          >
            <span>Lihat Paket Bundling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#C86D51] text-white shadow-sm'
                    : 'bg-[#FAF6F0] text-[#261E1A]/80 border border-[#261E1A]/10 hover:border-[#261E1A]/30 hover:bg-[#F3ECE2]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                {cat.highlight && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#DAA03D]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#261E1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari menu favorit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-white border border-[#261E1A]/15 text-[#261E1A] placeholder:text-[#261E1A]/40 focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#261E1A]/40 hover:text-[#261E1A]"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#F3ECE2]/50 rounded-2xl border border-dashed border-[#261E1A]/20">
          <p className="font-serif text-lg text-[#261E1A]">Menu tidak ditemukan</p>
          <p className="text-xs text-[#261E1A]/60 mt-1">
            Coba kata kunci lain atau pilih kategori Semua Menu.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-full bg-[#261E1A] text-white text-xs font-medium"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.includes(item.id);
            const isJustAdded = addedAnimationId === item.id;

            return (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#261E1A]/10 hover:border-[#C86D51]/40 hover:shadow-md transition-all duration-200"
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-[#F3ECE2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#261E1A]/85 text-[#FAF6F0] backdrop-blur-xs">
                        {item.badge}
                      </span>
                    )}
                    {item.category === 'bundling' && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#DAA03D] text-[#261E1A]">
                        Hemat
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg font-bold text-[#261E1A] group-hover:text-[#C86D51] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-sans text-base font-extrabold text-[#C86D51]">
                        {formatRupiah(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs line-through text-[#261E1A]/40 font-medium">
                          {formatRupiah(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#261E1A]/70 font-sans leading-relaxed mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-3 border-t border-[#261E1A]/5 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#7E9584]">
                      {item.category === 'kopi'
                        ? 'House Blend Segar'
                        : item.category === 'bundling'
                        ? '1 Kopi + 1 Snack'
                        : item.category === 'snack'
                        ? 'Freshly Prepared'
                        : 'Bahan Alami'}
                    </span>

                    <button
                      id={`btn-add-${item.id}`}
                      onClick={() => handleAddItem(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        isJustAdded
                          ? 'bg-[#7E9584] text-white scale-105'
                          : isAdded
                          ? 'bg-[#261E1A] text-white hover:bg-[#3A2F2A]'
                          : 'bg-[#C86D51]/15 text-[#C86D51] hover:bg-[#C86D51] hover:text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Ditambahkan!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isAdded ? '+ Tambah Lagi' : 'Pesan'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Sticky Helper / Next step banner */}
      <div className="p-6 rounded-2xl bg-[#F3ECE2] border border-[#261E1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#261E1A]">
            Ingin memesan langsung atau reservasi meja?
          </h4>
          <p className="text-xs text-[#261E1A]/70 mt-0.5">
            Kami siap melayani Dine-In, Takeaway, dan Delivery lewat WhatsApp, GoFood, atau GrabFood.
          </p>
        </div>
        <button
          onClick={onGoToOrder}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#261E1A] text-[#FAF6F0] text-xs font-semibold hover:bg-[#3A2F2A] transition-all whitespace-nowrap shadow-sm"
        >
          <span>Lanjut ke Form Pemesanan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
