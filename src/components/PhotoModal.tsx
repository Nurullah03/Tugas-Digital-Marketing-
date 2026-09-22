import React from 'react';
import { GalleryPhoto } from '../types';
import { X, MapPin, Tag } from 'lucide-react';

interface PhotoModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#261E1A]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl border border-[#FAF6F0]/20 flex flex-col md:flex-row max-h-[90vh]">
        {/* Image side */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[480px]">
          <img
            src={photo.image}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[500px]"
          />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 md:hidden p-2 rounded-full bg-black/60 text-white hover:bg-black"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info side */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF6F0]">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7E9584]/20 text-[#5B7261]">
                <Tag className="w-3 h-3" />
                {photo.category}
              </span>
              <button
                onClick={onClose}
                className="hidden md:flex p-2 rounded-full text-[#261E1A]/40 hover:text-[#261E1A] hover:bg-[#261E1A]/5"
                aria-label="Tutup pratinjau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#261E1A] mt-4 leading-snug">
              {photo.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-[#C86D51] font-semibold mt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{photo.locationTag} • Cafe Tepi</span>
            </div>

            <div className="mt-4 pt-4 border-t border-[#261E1A]/10">
              <p className="text-sm text-[#261E1A]/80 leading-relaxed font-sans">
                {photo.description}
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#F3ECE2] border border-[#261E1A]/10 text-xs text-[#261E1A]/70 space-y-1">
              <p className="font-semibold text-[#261E1A]">Konsep Visual:</p>
              <p>Natural light, furnitur kayu earthy, warna terracotta & cream, suasana candid untuk menepi.</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#261E1A]/10 flex items-center justify-between">
            <span className="text-xs text-[#261E1A]/50">Cafe Tepi — Ruang Jeda</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#261E1A] text-white text-xs font-medium hover:bg-[#3A2F2A] transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
