import React, { useState } from 'react';
import { GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/cafeData';
import { PhotoModal } from './PhotoModal';
import { Eye, MapPin, Sparkles, Coffee, Laptop, Trees, LayoutGrid } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Sudut', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { id: 'interior', label: 'Interior & Bar', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'nugas', label: 'Sudut Nugas', icon: <Laptop className="w-3.5 h-3.5" /> },
    { id: 'kopi', label: 'Kopi & Detail', icon: <Coffee className="w-3.5 h-3.5" /> },
    { id: 'outdoor', label: 'Semi-Outdoor Garden', icon: <Trees className="w-3.5 h-3.5" /> },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7E9584]/20 text-[#5B7261]">
          Galeri Estetik & Suasana
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261E1A] tracking-tight">
          Menepi di Ruang yang Teduh & Estetik.
        </h1>
        <p className="text-sm sm:text-base text-[#261E1A]/70 leading-relaxed font-sans max-w-2xl mx-auto">
          Setiap sudut Cafe Tepi dirancang untuk ketenangan pikiran—pencahayaan alami hangat, sentuhan earthy terracotta, tanaman sage yang menyejukkan, serta suasana tanpa kebisingan kota.
        </p>
      </div>

      {/* Visual Identity Highlight Strip from Slide 9 & 10 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-[#261E1A] text-[#FAF6F0] flex flex-col justify-between">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#FAF6F0]/60">Warna Khas</div>
          <div className="mt-2 font-serif text-lg font-bold">Espresso</div>
          <p className="text-[11px] text-[#FAF6F0]/70 mt-0.5">Karakter kopi autentik & kedalaman rasa</p>
        </div>
        <div className="p-4 rounded-xl bg-[#C86D51] text-white flex flex-col justify-between">
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/70">Warna Khas</div>
          <div className="mt-2 font-serif text-lg font-bold">Terracotta</div>
          <p className="text-[11px] text-white/80 mt-0.5">Kehangatan tanah liat & suasana bersahabat</p>
        </div>
        <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#261E1A]/10 text-[#261E1A] flex flex-col justify-between">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#261E1A]/50">Warna Khas</div>
          <div className="mt-2 font-serif text-lg font-bold">Cream</div>
          <p className="text-[11px] text-[#261E1A]/70 mt-0.5">Ketenangan pikiran & ruang bernafas</p>
        </div>
        <div className="p-4 rounded-xl bg-[#7E9584] text-white flex flex-col justify-between">
          <div className="text-[10px] uppercase font-bold tracking-widest text-white/70">Warna Khas</div>
          <div className="mt-2 font-serif text-lg font-bold">Sage</div>
          <p className="text-[11px] text-white/80 mt-0.5">Kesegaran alam & harmoni visual</p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#261E1A] text-[#FAF6F0] shadow-sm'
                  : 'bg-white text-[#261E1A]/70 border border-[#261E1A]/10 hover:border-[#261E1A]/30 hover:bg-[#F3ECE2]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => {
          // Add rhythmic visual emphasis for the first item
          const isFeatured = index === 0 && activeCategory === 'all';

          return (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-[#261E1A]/10 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col ${
                isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-84' : 'h-64'}`}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261E1A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Location Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#261E1A]/80 text-[#FAF6F0] backdrop-blur-xs">
                    <MapPin className="w-3 h-3 text-[#DAA03D]" />
                    <span>{photo.locationTag}</span>
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-white/90 text-[#261E1A] shadow-sm flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1 font-sans">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Atmospheric quote card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#F3ECE2] border border-[#261E1A]/10 text-center max-w-3xl mx-auto space-y-4">
        <span className="font-serif text-2xl text-[#C86D51] italic leading-none">“</span>
        <blockquote className="font-serif text-xl sm:text-2xl text-[#261E1A] font-medium leading-relaxed -mt-3">
          Ruang jeda bukan sekadar tentang berhenti, tapi tentang mengambil nafas sejenak, mengumpulkan fokus, lalu melangkah kembali lebih konsisten.
        </blockquote>
        <div className="text-xs uppercase tracking-widest font-sans font-bold text-[#7E9584]">
          Cafe Tepi • Estetik & Autentik
        </div>
      </div>

      {/* Photo Modal Lightbox */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};
