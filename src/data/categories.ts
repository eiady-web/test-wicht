import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'sandwiches',
    name: 'ساندويتشات مشوية',
    nameEn: 'Grilled Sandwiches',
    slug: 'sandwiches',
    sortOrder: 1,
  },
  {
    id: 'falafel',
    name: 'فلافل ويشت',
    nameEn: 'Wicht Falafel',
    slug: 'falafel',
    sortOrder: 2,
  },
  {
    id: 'sides',
    name: 'أطباق جانبية',
    nameEn: 'Sides',
    slug: 'sides',
    sortOrder: 3,
  },
  {
    id: 'drinks',
    name: 'مشروبات باردة',
    nameEn: 'Cold Drinks',
    slug: 'drinks',
    sortOrder: 4,
  },
];
