import { MenuItem, GalleryPhoto } from '../types';

// Generated image assets from local workspace
import heroImg from '../assets/images/cafe_hero_1790035480919.jpg';
import interiorImg from '../assets/images/cafe_interior_1790035494034.jpg';
import coffeeImg from '../assets/images/cafe_coffee_1790035506806.jpg';
import snackImg from '../assets/images/cafe_snack_1790035517507.jpg';

export const CAFE_IMAGES = {
  hero: heroImg,
  interior: interiorImg,
  coffee: coffeeImg,
  snack: snackImg,
};

export const MENU_ITEMS: MenuItem[] = [
  // Paket Bundling
  {
    id: 'bundle-1',
    name: 'Paket Nugas Santai',
    category: 'bundling',
    price: 32000,
    originalPrice: 36000,
    description: '1 Es Kopi Susu Aren + 1 Crispy French Fries. Teman setia teman nugas & kejar deadline seharian.',
    image: snackImg,
    badge: 'Paling Laris',
    isPopular: true,
  },
  {
    id: 'bundle-2',
    name: 'Paket Menepi Manis',
    category: 'bundling',
    price: 36000,
    originalPrice: 42000,
    description: '1 Signature Coffee Tepi + 1 Roti Bakar Tepi (Kaya Butter / Cokelat Melt). Perpaduan pas untuk jeda sore.',
    image: coffeeImg,
    badge: 'Rekomendasi',
    isPopular: true,
  },
  {
    id: 'bundle-3',
    name: 'Paket Morning Energizer',
    category: 'bundling',
    price: 28000,
    originalPrice: 35000,
    description: '1 Americano (Hot/Ice) + 1 Warm Brioche Toast. Awali hari dengan fokus dan energi bersih.',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    badge: 'Hemat Pagi',
  },

  // Kopi Kekinian
  {
    id: 'coffee-1',
    name: 'Es Kopi Susu Gula Aren',
    category: 'kopi',
    price: 18000,
    description: 'Espresso house blend Cafe Tepi, susu sapi segar creamy, dan pemanis gula aren organik yang legit seimbang.',
    image: coffeeImg,
    badge: 'Favorit',
    isPopular: true,
  },
  {
    id: 'coffee-2',
    name: 'Signature Coffee Tepi',
    category: 'kopi',
    price: 22000,
    description: 'Racikan eksklusif barista Tepi: espresso dobel, susu oat lembut, sentuhan karamel artisan dan hint aroma rempah hangat.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    badge: 'Signature',
    isPopular: true,
  },
  {
    id: 'coffee-3',
    name: 'Americano (Hot / Iced)',
    category: 'kopi',
    price: 15000,
    description: 'Ekstraksi ganda biji kopi Nusantara pilihan dengan profil rasa nutty, dark chocolate, dan acidity yang bersih menyegarkan.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coffee-4',
    name: 'Cafe Latte',
    category: 'kopi',
    price: 20000,
    description: 'Espresso berpadu dengan susu silky microfoam yang hangat membalut lidah, disajikan dengan latte art cantik.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  },

  // Non-Coffee
  {
    id: 'non-1',
    name: 'Artisanal Uji Matcha Latte',
    category: 'non-kopi',
    price: 22000,
    description: 'Matcha hijau pekat otentik berpadu susu segar, tidak terlalu manis dengan rasa umami earthy yang menenangkan.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    isPopular: true,
  },
  {
    id: 'non-2',
    name: 'Classic Warm Chocolate',
    category: 'non-kopi',
    price: 20000,
    description: 'Kakao murni Jawa Barat dipadu susu creamy hangat. Pilihan sempurna untuk menepi di kala sore hari.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'non-3',
    name: 'Velvet Red Latte',
    category: 'non-kopi',
    price: 22000,
    description: 'Perpaduan cocoa lembut, aroma madu dan vanilla dengan warna merah terracotta khas yang menggoda selera.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'non-4',
    name: 'Artisanal Floral Tea',
    category: 'non-kopi',
    price: 16000,
    description: 'Teh seduh artisan dengan aroma chamomile, kelopak mawar, dan citrus yang menyegarkan pikiran lelah.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'non-5',
    name: 'Sparkling Citrus Berry',
    category: 'non-kopi',
    price: 20000,
    description: 'Sari buah berry segar dengan perasan jeruk lemon alami dan soda dingin berdesis ringan.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },

  // Snack / Makanan Ringan
  {
    id: 'snack-1',
    name: 'Crispy French Fries',
    category: 'snack',
    price: 18000,
    description: 'Kentang potong tebal digoreng renyah keemasan, ditaburi sea salt gurih dan rempah aromatik, disajikan dengan saus cocol.',
    image: snackImg,
    badge: 'Cemilan Favorit',
    isPopular: true,
  },
  {
    id: 'snack-2',
    name: 'Toast Roti Bakar Tepi',
    category: 'snack',
    price: 20000,
    description: 'Roti tebal empuk dipanggang mentega wangi. Pilihan isian: Selai Srikaya Butter legit atau Cokelat Keju Melt melimpah.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    badge: 'Wajib Coba',
    isPopular: true,
  },
  {
    id: 'snack-3',
    name: 'Flaky Butter Croissant',
    category: 'snack',
    price: 22000,
    description: 'Croissant mentega klasik berlapis renyah di luar dan lembut berongga di dalam, dipanggang fresh tiap hari.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Ruang Jeda Utama & Bar Espresso',
    category: 'interior',
    image: heroImg,
    description: 'Pencahayaan alami hangat berpadu dinding terakota dan furnitur kayu natural. Suasana tenang tanpa kebisingan kota.',
    locationTag: 'Indoor Utama',
  },
  {
    id: 'gal-2',
    title: 'Area Meja Kerja & Nugas Santai',
    category: 'nugas',
    image: interiorImg,
    description: 'Dirancang ergonomis untuk mahasiswa dan pekerja muda dengan stopkontak di setiap meja serta koneksi Wi-Fi 100 Mbps stabil.',
    locationTag: 'Working Space Corner',
  },
  {
    id: 'gal-3',
    title: 'Kopi Susu Aren & Cangkir Keramik Buatan Tangan',
    category: 'kopi',
    image: coffeeImg,
    description: 'Setiap cangkir diracik presisi dengan bahan baku berkualitas jujur dan disajikan dalam keramik earth-tone ramah lingkungan.',
    locationTag: 'Slow Bar',
  },
  {
    id: 'gal-4',
    title: 'Snack Hangat Teman Menepi',
    category: 'kopi',
    image: snackImg,
    description: 'French fries renyah bertabur rempah dan roti bakar kaya butter menemani sesi diskusi maupun tugas harianmu.',
    locationTag: 'Kitchen & Pastry',
  },
  {
    id: 'gal-5',
    title: 'Sudut Jendela Semi-Outdoor & Tanaman Sage',
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    description: 'Angin sepoi-sepoi dan gemerisik dedaunan hijau sage menyegarkan pandangan saat beristirahat sejenak dari layar monitor.',
    locationTag: 'Semi-Outdoor Garden',
  },
  {
    id: 'gal-6',
    title: 'Suasana Senja Hangat & Lampu Minimalis',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1445116572660-238429888259?auto=format&fit=crop&w=1200&q=80',
    description: 'Ketika matahari terbenam, Cafe Tepi berubah menjadi ruang temaram yang syahdu untuk berbincang santai bersama sahabat.',
    locationTag: 'Lounge Mezzanine',
  },
  {
    id: 'gal-7',
    title: 'Sudut Meja Kayu & Buku Catatan',
    category: 'nugas',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80',
    description: 'Tempat ideal untuk menulis jurnal, membaca buku favorit, atau menyusun rencana masa depan.',
    locationTag: 'Quiet Study Nook',
  },
  {
    id: 'gal-8',
    title: 'Espresso Machine & Aroma Biji Kopi Segar',
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    description: 'Kami menggunakan biji kopi lokal terkurasi yang disangrai dengan profil rasa seimbang dan autentik.',
    locationTag: 'Brewing Station',
  },
];

export const CAFE_INFO = {
  name: 'Cafe Tepi',
  slogan: 'Tepi Sejenak, Nikmati Kopi Berkualitas',
  headline: 'Tepi adalah ruang jeda.',
  subheadline: 'Tempat mengisi energi—dengan kopi yang jujur, suasana hangat, harga bersahabat, dan Wi-Fi yang membuatmu tetap terhubung.',
  priceRange: 'Rp 15.000 – Rp 30.000',
  address: 'Jl. Tepi Damai No. 18, Lingkar Kampus & Perkantoran',
  city: 'Kota Pelajar, Indonesia',
  phone: '+62 812-9876-5432',
  whatsappNumber: '6281298765432',
  instagram: '@cafetepi.id',
  tiktok: '@cafetepi',
  hours: {
    weekdays: '08:00 – 22:00 WIB',
    weekends: '08:00 – 23:00 WIB',
  },
  facilities: [
    { title: 'Wi-Fi Cepat 100 Mbps', desc: 'Koneksi stabil bebas buffering untuk meeting online & upload tugas' },
    { title: 'Stopkontak di Tiap Meja', desc: 'Bebas rasa cemas baterai laptop atau gadget habis saat beraktivitas' },
    { title: 'Ruang Nyaman Anti-Bising', desc: 'Musik instrumental lembut & akustik ruangan yang nyaman' },
    { title: 'Area Indoor AC & Semi-Outdoor', desc: 'Pilihan ruangan sejuk ber-AC dan teras taman terbuka yang asri' },
    { title: 'Musholla & Toilet Bersih', desc: 'Fasilitas ibadah lengkap dan terawat demi kenyamananmu berlama-lama' },
    { title: 'Area Parkir Luas', desc: 'Parkir motor dan mobil aman dengan pengawasan petugas' },
  ],
  usps: [
    {
      num: '01',
      title: 'KUALITAS + HARGA',
      desc: 'Kopi kekinian berkualitas tinggi dengan harga ramah mahasiswa dan pekerja muda: Rp15.000–30.000.',
    },
    {
      num: '02',
      title: 'RUANG JEDA ESTETIK',
      desc: 'Desain minimalis bernuansa hangat (Espresso, Terracotta, Cream, Sage) yang nyaman untuk kerja dan nongkrong.',
    },
    {
      num: '03',
      title: 'LAYANAN FLEKSIBEL',
      desc: 'Nikmati suasana santai dengan dine-in, pesan cepat takeaway, atau order delivery lewat GoFood & GrabFood.',
    },
  ],
};
