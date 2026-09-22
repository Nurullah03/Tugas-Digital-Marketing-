import React from 'react';
import { CartItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onProceedToOrder: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToOrder,
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleWhatsAppQuickCheckout = () => {
    const itemList = cart
      .map(
        (ci, idx) =>
          `${idx + 1}. ${ci.item.name} (${ci.quantity}x) = ${formatRupiah(ci.item.price * ci.quantity)}`
      )
      .join('\n');

    const message = `Halo Cafe Tepi! 👋\nSaya mau pesan kopi & snack berikut:\n\n${itemList}\n\n*Total Estimasi: ${formatRupiah(
      totalAmount
    )}*\n\nMohon konfirmasi ketersediaan dan cara pembayaran ya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#261E1A]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#261E1A]/10">
          {/* Header */}
          <div className="p-5 border-b border-[#261E1A]/10 flex items-center justify-between bg-[#F3ECE2]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C86D51]/15 flex items-center justify-center text-[#C86D51]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#261E1A]">Pesanan Kamu</h3>
                <p className="text-xs text-[#261E1A]/60 font-sans">
                  {totalItems} item dipilih • Cafe Tepi
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#261E1A]/60 hover:text-[#261E1A] hover:bg-[#261E1A]/5"
              aria-label="Tutup keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#261E1A]/5 flex items-center justify-center text-[#261E1A]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-serif text-xl font-medium text-[#261E1A]">Keranjang masih kosong</p>
                  <p className="text-xs text-[#261E1A]/60 mt-1 max-w-xs">
                    Yuk pilih kopi kekinian favorit atau paket hemat bundling kopi + snack untuk menemani waktu jedamu.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#261E1A] text-[#FAF6F0] text-sm font-medium hover:bg-[#3A2F2A] transition-colors"
                >
                  Lihat Pilihan Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#261E1A]/70 pb-1">
                  <span>Daftar Menu Pilihan</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#C86D51] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Kosongkan</span>
                  </button>
                </div>

                {cart.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="p-3.5 rounded-xl bg-white border border-[#261E1A]/10 shadow-xs flex items-center gap-3.5"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sans font-semibold text-sm text-[#261E1A] truncate">
                        {cartItem.item.name}
                      </h4>
                      <p className="text-xs text-[#C86D51] font-bold mt-0.5">
                        {formatRupiah(cartItem.item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#261E1A]/15 rounded-md bg-[#FAF6F0]">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="p-1 text-[#261E1A]/70 hover:text-[#261E1A]"
                            aria-label="Kurangi kuantitas"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#261E1A]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="p-1 text-[#261E1A]/70 hover:text-[#261E1A]"
                            aria-label="Tambah kuantitas"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-[#261E1A]">
                          {formatRupiah(cartItem.item.price * cartItem.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(cartItem.item.id)}
                      className="p-1.5 text-[#261E1A]/30 hover:text-[#C86D51] transition-colors"
                      title="Hapus item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Promo notice */}
                <div className="p-3 rounded-xl bg-[#DAA03D]/10 border border-[#DAA03D]/30 text-xs text-[#261E1A] flex items-start gap-2">
                  <span className="text-base leading-none">💡</span>
                  <div>
                    <span className="font-bold">Tips Hemat: </span>
                    Pesan Paket Bundling Kopi + Snack untuk potongan harga hemat hingga Rp 7.000!
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#261E1A]/10 bg-[#F3ECE2] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#261E1A]/70 font-sans">Total Biaya ({totalItems} item):</span>
                <span className="font-serif text-xl font-bold text-[#261E1A]">
                  {formatRupiah(totalAmount)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="cart-complete-form-btn"
                  onClick={() => {
                    onClose();
                    onProceedToOrder();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#261E1A] text-white text-xs font-semibold hover:bg-[#3A2F2A] transition-all"
                >
                  <span>Isi Form Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="cart-direct-whatsapp-btn"
                  onClick={handleWhatsAppQuickCheckout}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#C86D51] text-white text-xs font-semibold hover:bg-[#B55B3F] transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#261E1A]/60">
                Bisa dine-in di tempat atau takeaway siap ambil tanpa ribet antre.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
