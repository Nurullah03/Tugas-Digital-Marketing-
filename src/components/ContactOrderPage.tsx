import React, { useState } from 'react';
import { CartItem } from '../types';
import { CAFE_INFO, MENU_ITEMS } from '../data/cafeData';
import {
  MessageCircle,
  Clock,
  MapPin,
  Wifi,
  Zap,
  VolumeX,
  Phone,
  Instagram,
  Copy,
  Check,
  Send,
  Calendar,
  Users,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';

interface ContactOrderPageProps {
  cart: CartItem[];
  onOpenMenu: () => void;
}

export const ContactOrderPage: React.FC<ContactOrderPageProps> = ({
  cart,
  onOpenMenu,
}) => {
  const [activeFormTab, setActiveFormTab] = useState<'order' | 'reserve'>('order');
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<'dine-in' | 'takeaway' | 'delivery'>('dine-in');
  const [specialNotes, setSpecialNotes] = useState('');

  // Reservation specific states
  const [guestCount, setGuestCount] = useState(2);
  const [reserveDate, setReserveDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [reserveTime, setReserveTime] = useState('14:00');
  const [seatArea, setSeatArea] = useState('Indoor AC (Dekat Colokan)');

  // Quick item selection if cart is empty
  const [selectedQuickItems, setSelectedQuickItems] = useState<string[]>([
    'Es Kopi Susu Gula Aren',
  ]);

  const toggleQuickItem = (itemName: string) => {
    setSelectedQuickItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((i) => i !== itemName)
        : [...prev, itemName]
    );
  };

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  // Build the WhatsApp message dynamically adhering strictly to the brand copywriting
  const generateWhatsAppMessage = () => {
    if (activeFormTab === 'order') {
      const orderItems =
        cart.length > 0
          ? cart
              .map(
                (ci) =>
                  `• ${ci.item.name} (${ci.quantity}x) - ${formatRupiah(
                    ci.item.price * ci.quantity
                  )}`
              )
              .join('\n')
          : selectedQuickItems.map((item) => `• ${item} (1x)`).join('\n');

      const totalEstimate =
        cart.length > 0
          ? formatRupiah(
              cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0)
            )
          : 'Sesuai pesanan';

      return `Halo Cafe Tepi! 👋
Saya ingin melakukan pemesanan:

*Nama:* ${name || '[Nama Kamu]'}
*No. WhatsApp:* ${phone || '[Nomor Telepon]'}
*Layanan:* ${
        serviceType === 'dine-in'
          ? 'Dine-In (Makan di Tempat)'
          : serviceType === 'takeaway'
          ? 'Takeaway (Siap Ambil)'
          : 'Delivery'
      }

*Daftar Pesanan:*
${orderItems || '• (Belum memilih menu)'}

*Estimasi Total:* ${totalEstimate}
*Catatan Tambahan:* ${specialNotes || 'Tidak ada catatan'}

Mohon konfirmasi pesanan dan instruksi pembayarannya ya. Terima kasih! ✨`;
    } else {
      return `Halo Cafe Tepi! 👋
Saya ingin reservasi meja nugas/nongkrong:

*Nama Pemesan:* ${name || '[Nama Kamu]'}
*No. WhatsApp:* ${phone || '[Nomor Telepon]'}
*Jumlah Orang:* ${guestCount} Orang
*Hari & Tanggal:* ${reserveDate}
*Waktu / Jam Kedatangan:* ${reserveTime} WIB
*Pilihan Area Meja:* ${seatArea}
*Catatan Kebutuhan:* ${specialNotes || 'Butuh meja dengan akses stopkontak untuk nugas.'}

Tolong konfirmasi ketersediaan meja ya, biar meja & kopi kami siap saat kami datang. Terima kasih! ☕`;
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${CAFE_INFO.address}, ${CAFE_INFO.city}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C86D51]/15 text-[#C86D51]">
          Layanan & Pemesanan
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261E1A] tracking-tight">
          Yuk Menepi, Meja Menunggumu.
        </h1>
        <p className="text-sm sm:text-base text-[#261E1A]/70 leading-relaxed font-sans max-w-2xl mx-auto">
          Pesan kopi favoritmu sekarang atau amankan meja untuk sesi nugas dan kerja santaimu tanpa khawatir kehabisan tempat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Interactive Order & Booking Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#261E1A]/10 shadow-sm space-y-6">
          {/* Form Mode Selector */}
          <div className="flex p-1 bg-[#FAF6F0] rounded-2xl border border-[#261E1A]/10">
            <button
              id="form-tab-order"
              type="button"
              onClick={() => setActiveFormTab('order')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeFormTab === 'order'
                  ? 'bg-[#261E1A] text-[#FAF6F0] shadow-sm'
                  : 'text-[#261E1A]/70 hover:text-[#261E1A]'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Pesan Menu Kopi & Snack</span>
            </button>
            <button
              id="form-tab-reserve"
              type="button"
              onClick={() => setActiveFormTab('reserve')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeFormTab === 'reserve'
                  ? 'bg-[#261E1A] text-[#FAF6F0] shadow-sm'
                  : 'text-[#261E1A]/70 hover:text-[#261E1A]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Reservasi Meja Nugas</span>
            </button>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            {/* Common Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                  Nama Pemesan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Dimas / Sarah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-sm text-[#261E1A] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-sm text-[#261E1A] focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51]"
                />
              </div>
            </div>

            {/* If Order Tab */}
            {activeFormTab === 'order' && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-2">
                    Tipe Layanan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(
                      [
                        { id: 'dine-in', label: 'Dine-In', sub: 'Makan di tempat' },
                        { id: 'takeaway', label: 'Takeaway', sub: 'Siap ambil' },
                        { id: 'delivery', label: 'Delivery', sub: 'Antar kurir' },
                      ] as const
                    ).map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setServiceType(t.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          serviceType === t.id
                            ? 'bg-[#C86D51]/10 border-[#C86D51] text-[#261E1A]'
                            : 'border-[#261E1A]/10 bg-[#FAF6F0] text-[#261E1A]/70 hover:border-[#261E1A]/30'
                        }`}
                      >
                        <div className="text-xs font-bold">{t.label}</div>
                        <div className="text-[10px] text-[#261E1A]/60">{t.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cart or Quick Pick item list */}
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#261E1A]/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#261E1A]/80">
                      Menu yang Dipesan
                    </span>
                    <button
                      type="button"
                      onClick={onOpenMenu}
                      className="text-xs text-[#C86D51] font-semibold hover:underline"
                    >
                      Buka Katalog Lengkap →
                    </button>
                  </div>

                  {cart.length > 0 ? (
                    <div className="space-y-2">
                      {cart.map((ci) => (
                        <div
                          key={ci.item.id}
                          className="flex items-center justify-between text-xs py-1 border-b border-[#261E1A]/5"
                        >
                          <span className="font-medium text-[#261E1A]">
                            {ci.item.name} × {ci.quantity}
                          </span>
                          <span className="font-bold text-[#C86D51]">
                            {formatRupiah(ci.item.price * ci.quantity)}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between text-xs pt-1 font-bold">
                        <span>Total ({cart.reduce((s, i) => s + i.quantity, 0)} item):</span>
                        <span className="text-[#261E1A] font-serif text-sm">
                          {formatRupiah(
                            cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0)
                          )}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs text-[#261E1A]/60 mb-2">
                        Pilih cepat menu andalan Cafe Tepi:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Paket Nugas Santai (Kopi + Fries)',
                          'Paket Menepi Manis',
                          'Es Kopi Susu Gula Aren',
                          'Signature Coffee Tepi',
                          'Artisanal Matcha Latte',
                          'Crispy French Fries',
                          'Toast Roti Bakar Tepi',
                        ].map((mName) => {
                          const isSel = selectedQuickItems.includes(mName);
                          return (
                            <button
                              key={mName}
                              type="button"
                              onClick={() => toggleQuickItem(mName)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSel
                                  ? 'bg-[#261E1A] text-[#FAF6F0]'
                                  : 'bg-white border border-[#261E1A]/15 text-[#261E1A]/80 hover:bg-[#F3ECE2]'
                              }`}
                            >
                              {isSel ? '✓ ' : '+ '}
                              {mName}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* If Reserve Tab */}
            {activeFormTab === 'reserve' && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                      Jumlah Orang
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#261E1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-xs text-[#261E1A] focus:outline-none focus:border-[#C86D51]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} Orang {num === 1 ? '(Sendiri/Nugas)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-xs text-[#261E1A] focus:outline-none focus:border-[#C86D51]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                      Jam Kedatangan
                    </label>
                    <select
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-xs text-[#261E1A] focus:outline-none focus:border-[#C86D51]"
                    >
                      {[
                        '09:00',
                        '10:30',
                        '12:00',
                        '13:30',
                        '15:00',
                        '16:30',
                        '18:00',
                        '19:30',
                        '20:30',
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t} WIB
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                    Pilihan Area Meja
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Indoor AC (Dekat Colokan)',
                      'Semi-Outdoor Garden (Asri)',
                      'Meja Kelompok / Diskusi',
                    ].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSeatArea(area)}
                        className={`p-2.5 text-xs rounded-xl border text-center transition-all ${
                          seatArea === area
                            ? 'bg-[#C86D51] text-white border-[#C86D51] font-semibold'
                            : 'bg-[#FAF6F0] text-[#261E1A]/80 border-[#261E1A]/15 hover:border-[#261E1A]/40'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Special notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#261E1A]/80 mb-1.5">
                Catatan Khusus (Opsional)
              </label>
              <textarea
                rows={2}
                placeholder="Misal: Less sugar untuk kopi susu, minta dekat colokan listrik, atau info kedatangan..."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#261E1A]/15 text-xs text-[#261E1A] focus:outline-none focus:border-[#C86D51]"
              />
            </div>

            {/* Submit Button to WhatsApp */}
            <button
              id="submit-order-whatsapp-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#C86D51] hover:bg-[#B55B3F] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {activeFormTab === 'order'
                  ? 'Kirim Pesanan ke WhatsApp Cafe Tepi'
                  : 'Kirim Reservasi Meja ke WhatsApp'}
              </span>
            </button>
            <p className="text-[11px] text-center text-[#261E1A]/60">
              Format pesan otomatis disiapkan di WhatsApp Anda untuk konfirmasi instan dari barista.
            </p>
          </form>
        </div>

        {/* Right Side: Information, Location, Facilities & Socials */}
        <div className="lg:col-span-5 space-y-6">
          {/* Location & Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#261E1A]/10 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E9584]">
              <MapPin className="w-4 h-4 text-[#C86D51]" />
              <span>Lokasi & Jam Operasional</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#261E1A]">Cafe Tepi</h3>
              <p className="text-xs sm:text-sm text-[#261E1A]/75 font-sans leading-relaxed">
                {CAFE_INFO.address}, {CAFE_INFO.city}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF6F0] border border-[#261E1A]/10 hover:bg-[#F3ECE2] text-[#261E1A] transition-colors"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-[#7E9584]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAddress ? 'Alamat Tersalin!' : 'Salin Alamat'}</span>
              </button>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#261E1A] text-white hover:bg-[#3A2F2A] transition-colors"
              >
                <span>Buka Petunjuk Arah</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#261E1A]/10 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#261E1A]">
                <span className="flex items-center gap-2 text-[#261E1A]/70">
                  <Clock className="w-4 h-4 text-[#DAA03D]" />
                  <span>Senin – Minggu</span>
                </span>
                <span className="font-bold">{CAFE_INFO.hours.weekdays}</span>
              </div>
              <div className="flex items-center justify-between text-[#261E1A]">
                <span className="text-[#261E1A]/70 pl-6">Hari Libur / Weekend</span>
                <span className="font-bold">{CAFE_INFO.hours.weekends}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Ordering Channels (GoFood / GrabFood) from PDF */}
          <div className="bg-[#F3ECE2] rounded-3xl p-6 sm:p-7 border border-[#261E1A]/10 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#261E1A]">
              Pesan Tanpa Keluar Rumah
            </h4>
            <p className="text-xs text-[#261E1A]/70 leading-relaxed font-sans">
              Lagi mager di kos atau kantor? Cafe Tepi hadir di platform pesan antar online favoritmu:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Halo%20Cafe%20Tepi%2C%20mau%20order%20GoFood`}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-[#261E1A]/10 text-center hover:border-[#C86D51] transition-all group"
              >
                <div className="font-bold text-xs text-[#261E1A] group-hover:text-[#C86D51]">GoFood</div>
                <div className="text-[10px] text-[#261E1A]/60 mt-0.5">Order Delivery</div>
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Halo%20Cafe%20Tepi%2C%20mau%20order%20GrabFood`}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-[#261E1A]/10 text-center hover:border-[#C86D51] transition-all group"
              >
                <div className="font-bold text-xs text-[#261E1A] group-hover:text-[#C86D51]">GrabFood</div>
                <div className="text-[10px] text-[#261E1A]/60 mt-0.5">Order Delivery</div>
              </a>
            </div>
          </div>

          {/* Facility List */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#261E1A]/10 shadow-sm space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#261E1A]">
              Fasilitas Kenyamanan Nugas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CAFE_INFO.facilities.slice(0, 4).map((f) => (
                <div key={f.title} className="p-3 rounded-xl bg-[#FAF6F0] space-y-1">
                  <div className="text-xs font-bold text-[#261E1A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-[10px] text-[#261E1A]/60 leading-normal">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Channels from Slide 10 */}
          <div className="p-5 rounded-2xl bg-[#261E1A] text-white flex items-center justify-between">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#DAA03D]">Ikuti Kami</p>
              <p className="text-sm font-serif font-medium mt-0.5">Instagram & TikTok @cafetepi</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Instagram Cafe Tepi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#C86D51] hover:bg-[#B55B3F] text-white transition-colors"
                aria-label="WhatsApp Cafe Tepi"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
