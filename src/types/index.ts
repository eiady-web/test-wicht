export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  originalPrice?: number;
  calories?: number;
  categoryId: string;
  image: string;
  isAvailable: boolean;
  isVariablePrice?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  sortOrder: number;
}

export interface Branch {
  id: string;
  name: string;
  nameEn: string;
  city: string;
  address: string;
  addressEn: string;
  status: 'open' | 'closed';
  hours: string;
  days: string;
  phone: string;
  mapsUrl?: string;
}


export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Offer extends Product {
  includedProducts?: string[];
  isFeatured: boolean;
}

export type Language = 'ar' | 'en';

export type OrderType = 'pickup' | 'delivery';

export interface Toast {
  id: string;
  message: string;
  productImage?: string;
  productName?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'order' | 'system' | 'alert' | 'promotion';
  read: boolean;
  timestamp: Date;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}
