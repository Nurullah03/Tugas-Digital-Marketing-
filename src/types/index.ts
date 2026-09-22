export type PageTab = 'beranda' | 'menu' | 'galeri' | 'kontak';

export interface MenuItem {
  id: string;
  name: string;
  category: 'kopi' | 'non-kopi' | 'snack' | 'bundling';
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'interior' | 'kopi' | 'nugas' | 'outdoor';
  image: string;
  description: string;
  locationTag: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface OrderFormState {
  customerName: string;
  phone: string;
  serviceType: 'dine-in' | 'takeaway' | 'delivery';
  guestCount: number;
  tableReservationDate?: string;
  tableReservationTime?: string;
  specialNotes?: string;
}
