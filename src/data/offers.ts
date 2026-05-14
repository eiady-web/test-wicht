export interface Offer {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  discount?: string;
  tag: string;
  tagEn: string;
}

export const offers: Offer[] = [
  {
    id: '1',
    title: 'وجبة الكومبو المزدوجة',
    titleEn: 'Double Combo Meal',
    description: 'ساندويتش دجاج ولحم مع بطاطس ومشروب غازي',
    descriptionEn: 'Chicken and beef sandwich with fries and soft drink',
    image: 'images/products/offers/double-combo.jpg',
    discount: '25%',
    tag: 'الأكثر توفيراً',
    tagEn: 'Best Value',
  },
  {
    id: '2',
    title: 'بوكس الجمعات',
    titleEn: 'Gathering Box',
    description: 'بوكس يحتوي على 12 ساندويتش متنوع مثالي للعائلة والأصدقاء',
    descriptionEn: 'Box of 12 assorted sandwiches perfect for family and friends',
    image: 'images/products/boxes/gathering-box.jpg',
    discount: '15%',
    tag: 'عرض العائلة',
    tagEn: 'Family Offer',
  },
  {
    id: '3',
    title: 'كومبو ويشت الخاص',
    titleEn: 'Wicht Special Combo',
    description: 'ساندويتش دجاج خاص مع صوص ويشت وبطاطس',
    descriptionEn: 'Special chicken sandwich with Wicht sauce and fries',
    image: 'images/products/offers/chicken-special-combo.jpg',
    discount: '10%',
    tag: 'يومياً',
    tagEn: 'Daily Deal',
  },
];
