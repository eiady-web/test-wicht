import type { Product } from '@/types';

export const products: Product[] = [
  // Wicht Offers
  {
    id: 'mega-wicht',
    name: 'ميجا ويشت',
    nameEn: 'Mega Wicht',
    description: '4 ساندويتشات، 2 بطاطس مبهرة، 2 مشروب غازي',
    descriptionEn: '4 Sandwiches, 2 Seasoned Fries, 2 Drinks',
    price: 69,
    categoryId: 'offers',
    image: '/test-wicht/images/products/offers/mega-wicht.jpg',
    isAvailable: true,
    isBestSeller: true,
    rating: '5.0',
  },
  {
    id: 'double-combo',
    name: 'دبل كومبو',
    nameEn: 'Double Combo',
    description: '2 ساندويتش، بطاطس مبهرة، مشروب غازي',
    descriptionEn: '2 Sandwiches, Seasoned Fries, Drink',
    price: 36,
    categoryId: 'offers',
    image: '/test-wicht/images/products/offers/double-combo.jpg',
    isAvailable: true,
    rating: '4.8',
  },

  // Boxes
  {
    id: 'lamma-box',
    name: 'بوكس اللمة',
    nameEn: 'Al Lamma Box',
    description: 'بوكس مثالي للجمعات يحتوي على تشكيلة متنوعة',
    descriptionEn: 'Perfect gathering box with assorted variety',
    price: 95,
    categoryId: 'boxes',
    image: '/test-wicht/images/products/boxes/gathering-box.jpg',
    isAvailable: true,
    rating: '4.9',
  },

  // On Charcoal
  {
    id: 'meat-kebab-truffle',
    name: 'كباب لحم ترافل',
    nameEn: 'Meat Kebab Truffle',
    description: 'كباب لحم مشوي ع الفحم مع صوص الترافل الفاخر',
    descriptionEn: 'Charcoal grilled meat kebab with luxury truffle sauce',
    price: 16,
    categoryId: 'charcoal',
    image: '/test-wicht/images/products/grill/meat-special.jpg',
    isAvailable: true,
    isNew: true,
    rating: '4.9',
  },
  {
    id: 'shish-tawook-original',
    name: 'شيش طاووق أصلي',
    nameEn: 'Shish Tawook Original',
    description: 'شيش طاووق مشوي ع الفحم بالتتبيلة الأصلية',
    descriptionEn: 'Charcoal grilled shish tawook with original seasoning',
    price: 14,
    categoryId: 'charcoal',
    image: '/test-wicht/images/products/grill/chicken-original.jpg',
    isAvailable: true,
    rating: '4.7',
  },

  // Snacks
  {
    id: 'wicht-tawook-fries',
    name: 'ويشت طاووق فرايز',
    nameEn: 'Wicht Tawook Fries',
    description: 'بطاطس مقلية مع قطع الشيش طاووق والصوصات الخاصة',
    descriptionEn: 'Fries with shish tawook pieces and special sauces',
    price: 21,
    categoryId: 'snacks',
    image: '/test-wicht/images/products/sides/spiced-fries.jpg',
    isAvailable: true,
    rating: '4.9',
  },

  // Drinks
  {
    id: 'pepsi',
    name: 'بيبسي',
    nameEn: 'Pepsi',
    description: 'مشروب غازي بيبسي بارد',
    descriptionEn: 'Cold Pepsi soft drink',
    price: 3,
    categoryId: 'drinks',
    image: '/test-wicht/images/products/drinks/pepsi.jpg',
    isAvailable: true,
    rating: '4.5',
  },
];
