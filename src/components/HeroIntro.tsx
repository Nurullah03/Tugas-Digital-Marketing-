import React from 'react';
import { PageTab } from '../types';
import { CAFE_INFO, MENU_ITEMS } from '../data/cafeData';
import { ArrowRight, Coffee, Image as ImageIcon, MessageCircle, Wifi, Zap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/cafe_hero_1790035480919.jpg';
import interiorImg from '../assets/images/cafe_interior_1790035494034.jpg';
import coffeeImg from '../assets/images/cafe_coffee_1790035506806.jpg';

interface HeroIntroProps {
  onNavigate: (tab: PageTab) => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C86D51]/10 border border-[#C86D51]/20 text-[#C86D51] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />
                <span>{CAFE_INFO.slogan}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#261E1A] tracking-tight leading-[1.12]">
                Tepi adalah <br />
                <span className="italic font-normal text-[#C86D51]">ruang jeda.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#261E1A]/75 font-sans leading-relaxed max-w-xl">
                {CAFE_INFO.subheadline}
              </p>

              {/* Price & Target audience highlight from PDF */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#261E1A]/10 text-xs font-semibold text-[#261E1A] shadow-xs">
                  ☕ Kopi Mulai <strong className="text-[#C86D51]">Rp 15.000</strong>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#261E1A]/10 text-xs font-semibold text-[#261E1A] shadow-xs">
                  ⚡ Wi-Fi 100 Mbps & Stopkontak
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#261E1A]/10 text-xs font-semibold text-[#261E1A] shadow-xs">
                  🌿 Ruang Tenang Anti-Bising
                </span>
              </div>

              {/* Navigation CTAs to 3 main pages */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-btn-menu"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C86D51] hover:bg-[#B55B3F] text-white font-semibold text-sm tracking-wide transition-all shadow-md active:scale-95"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Lihat Buku Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-btn-gallery"
                  onClick={() => onNavigate('galeri')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3ECE2] text-[#261E1A] border border-[#261E1A]/15 font-semibold text-sm transition-all"
                >
                  <ImageIcon className="w-4 h-4 text-[#7E9584]" />
                  <span>Galeri Suasana</span>
                </button>

                <button
                  id="hero-btn-order"
                  onClick={() => onNavigate('kontak')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#261E1A] hover:bg-[#3A2F2A] text-white font-semibold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#DAA03D]" />
                  <span>Reservasi Meja</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-[#F3ECE2]">
                <img
                  src={heroImg}
                  alt="Suasana Cafe Tepi yang hangat dan estetik"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[460px] object-cover"
                />

                {/* Floating badge top */}
                <div className="absolute top-4 left-4 bg-[#261E1A]/85 backdrop-blur-md text-[#FAF6F0] p-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-[#C86D51] flex items-center justify-center text-white font-serif font-bold text-sm">
                    01
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#FAF6F0]/60">Filosofi</div>
                    <div className="text-xs font-serif font-bold">Ruang Jeda yang Tenang</div>
                  </div>
                </div>

                {/* Floating badge bottom */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#261E1A]/10 shadow-lg text-[#261E1A] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#7E9584]/20 text-[#5B7261]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Autentik & Estetik</div>
                    <div className="text-[11px] text-[#261E1A]/60">Espresso • Terracotta • Cream • Sage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Narrative / Positioning comparison from Slide 3 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F3ECE2] border border-[#261E1A]/10 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C86D51]">
              Nilai & Prinsip Kami
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#261E1A] leading-tight">
              Saat semua terasa sama, autentisitas menjadi pembeda.
            </h2>
            <p className="text-sm sm:text-base text-[#261E1A]/75 font-sans leading-relaxed">
              Di tengah maraknya coffee shop yang seragam dan perang harga, Cafe Tepi memilih menyajikan sesuatu yang jujur: kopi bermutu tinggi, harga yang masuk akal, dan ruang estetik yang benar-benar nyaman untuk singgah.
            </p>
          </div>

          {/* Contrast Grid from Slide 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-[#261E1A]/10">
            <div className="p-6 rounded-2xl bg-[#FAF6F0]/70 border border-[#261E1A]/5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#261E1A]/50">
                Kondisi Pasar Umum
              </span>
              <ul className="space-y-2 text-sm text-[#261E1A]/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#261E1A]/40">•</span> Pilihan homogen & kopi standar
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#261E1A]/40">•</span> Perang harga tanpa kualitas rasa
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#261E1A]/40">•</span> Praktis, tapi dingin dan impersonal
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C86D51]/30 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51]">
                Standar Cafe Tepi
              </span>
              <ul className="space-y-2 text-sm text-[#261E1A] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9584] flex-shrink-0" />
                  <span>Estetik + Autentik di setiap sudut</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9584] flex-shrink-0" />
                  <span>Tetap praktis dengan harga Rp15rb–30rb</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9584] flex-shrink-0" />
                  <span>Ruang nyaman untuk menepi dan berkarya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars / Positioning & USP from Slide 5 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#7E9584]">
            Keunggulan Utama
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261E1A]">
            Positioning & USP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAFE_INFO.usps.map((usp, i) => {
            const isHighlighted = i === 1;
            return (
              <div
                key={usp.num}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${
                  isHighlighted
                    ? 'bg-[#DAA03D] text-[#261E1A] shadow-lg ring-1 ring-[#DAA03D]/50'
                    : 'bg-white border border-[#261E1A]/10 text-[#261E1A] shadow-xs'
                }`}
              >
                <div>
                  <span
                    className={`font-serif text-3xl font-extrabold ${
                      isHighlighted ? 'text-[#261E1A]' : 'text-[#C86D51]'
                    }`}
                  >
                    {usp.num}
                  </span>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mt-3">
                    {usp.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mt-2 ${
                      isHighlighted ? 'text-[#261E1A]/90' : 'text-[#261E1A]/70'
                    }`}
                  >
                    {usp.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#261E1A]/10 text-xs font-semibold">
                  {i === 0 && 'Mulai Rp 15.000'}
                  {i === 1 && 'Colokan & Wi-Fi Siap'}
                  {i === 2 && 'Dine-In • Takeaway • GoFood'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3 Main Pages Preview Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C86D51]">
            Eksplorasi Lengkap
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#261E1A]">
            3 Halaman Utama Cafe Tepi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Menu */}
          <div
            onClick={() => onNavigate('menu')}
            className="group cursor-pointer rounded-3xl bg-white border border-[#261E1A]/10 p-6 flex flex-col justify-between hover:border-[#C86D51] hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C86D51]/10 text-[#C86D51] flex items-center justify-center group-hover:bg-[#C86D51] group-hover:text-white transition-colors">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#261E1A] group-hover:text-[#C86D51] transition-colors">
                  1. Menu & Paket Bundling
                </h3>
                <p className="text-xs text-[#261E1A]/70 leading-relaxed mt-2 font-sans">
                  Katalog kopi kekinian, non-coffee, snack renyah, dan paket hemat kopi + snack mulai Rp 15rb.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#261E1A]/5 flex items-center justify-between text-xs font-bold text-[#C86D51]">
              <span>Buka Menu Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Galeri Foto */}
          <div
            onClick={() => onNavigate('galeri')}
            className="group cursor-pointer rounded-3xl bg-white border border-[#261E1A]/10 p-6 flex flex-col justify-between hover:border-[#7E9584] hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7E9584]/15 text-[#5B7261] flex items-center justify-center group-hover:bg-[#7E9584] group-hover:text-white transition-colors">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#261E1A] group-hover:text-[#5B7261] transition-colors">
                  2. Galeri Foto Estetik
                </h3>
                <p className="text-xs text-[#261E1A]/70 leading-relaxed mt-2 font-sans">
                  Jelajahi sudut interior bernuansa hangat, area nugas dengan stopkontak, dan detail cangkir keramik.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#261E1A]/5 flex items-center justify-between text-xs font-bold text-[#7E9584]">
              <span>Lihat Foto Suasana</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Kontak & Pemesanan */}
          <div
            onClick={() => onNavigate('kontak')}
            className="group cursor-pointer rounded-3xl bg-white border border-[#261E1A]/10 p-6 flex flex-col justify-between hover:border-[#261E1A] hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#261E1A]/10 text-[#261E1A] flex items-center justify-center group-hover:bg-[#261E1A] group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#261E1A]">
                  3. Kontak & Pemesanan
                </h3>
                <p className="text-xs text-[#261E1A]/70 leading-relaxed mt-2 font-sans">
                  Pesan langsung lewat WhatsApp, reservasi meja nugas, cek petunjuk arah, dan jam buka operasional.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#261E1A]/5 flex items-center justify-between text-xs font-bold text-[#261E1A]">
              <span>Pesan & Reservasi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 12 closing mantra banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#261E1A] p-8 sm:p-12 text-[#FAF6F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DAA03D]">
              CAFE TEPI
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Mari menepi, lalu melangkah lebih konsisten.
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6F0]/75 font-sans leading-relaxed">
              Kami menantikan kehadiranmu untuk berbagi secangkir kopi hangat dan ruang kerja yang menenangkan.
            </p>
          </div>
          <button
            onClick={() => onNavigate('kontak')}
            className="px-6 py-3.5 rounded-full bg-[#C86D51] hover:bg-[#B55B3F] text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap active:scale-95 shadow-md"
          >
            Chat WhatsApp Kami
          </button>
        </div>
      </section>
    </div>
  );
};
