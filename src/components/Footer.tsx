import React from 'react';
import { PageTab } from '../types';
import { CAFE_INFO } from '../data/cafeData';
import { BrandLogo } from './BrandLogo';
import { MapPin, Clock, Phone, Instagram, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#261E1A] text-[#FAF6F0] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="light" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-sans leading-relaxed max-w-sm mt-3">
              Cafe Tepi adalah ruang jeda untuk mengisi energi dengan racikan kopi berkualitas, suasana hangat, harga bersahabat, dan Wi-Fi yang membuatmu tetap terhubung.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C86D51] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C86D51] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3 Halaman Utama */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#DAA03D]">
              3 Halaman Utama
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF6F0]/80">
              <li>
                <button
                  onClick={() => onSelectTab('menu')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Menu & Paket Bundling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('galeri')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Galeri Foto Estetik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('kontak')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Kontak & Reservasi Meja
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('beranda')}
                  className="hover:text-white transition-colors text-left"
                >
                  • Beranda & Nilai Brand
                </button>
              </li>
            </ul>
          </div>

          {/* Jam Operasional & Kontak */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#DAA03D]">
              Jam & Lokasi
            </h4>
            <div className="space-y-2 text-xs text-[#FAF6F0]/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#7E9584] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Buka Setiap Hari:</p>
                  <p>{CAFE_INFO.hours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C86D51] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Alamat Cafe:</p>
                  <p>{CAFE_INFO.address}, {CAFE_INFO.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#DAA03D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Layanan WhatsApp:</p>
                  <p>{CAFE_INFO.phone} (Order / Booking Meja)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 gap-4">
          <p>© {new Date().getFullYear()} Cafe Tepi. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dirancang dengan nuansa hangat & minimalis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
