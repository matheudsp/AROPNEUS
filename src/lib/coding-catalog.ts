import catalogData from '@/data/coding-catalog.json';

export type CodingCatalog = (typeof catalogData.catalogs)[number];
export type CodingOption = CodingCatalog['options'][number];

export type CodingModel = {
  slug: string;
  title: string;
  subtitle?: string;
  photo: string;
  brand: 'VW' | 'Audi';
  catalog?: CodingCatalog;
};

const modelPhotos: Record<string, Omit<CodingModel, 'brand' | 'catalog'>> = {
  'vw-polo-tsi-gts': {
    slug: 'polo',
    photo: 'polo',
    title: 'Polo',
    subtitle: 'TSI e GTS',
  },
  'vw-virtus-tsi-gts': {
    slug: 'virtus',
    photo: 'virtus',
    title: 'Virtus',
    subtitle: 'TSI e GTS',
  },
  'vw-nivus': { slug: 'nivus', photo: 'nivus', title: 'Nivus' },
  'vw-t-cross': { slug: 't-cross', photo: 't-cross', title: 'T-Cross' },
  'vw-taos': { slug: 'taos', photo: 'taos', title: 'Taos' },
  'vw-jetta-facelift': {
    slug: 'jetta',
    photo: 'jetta',
    title: 'Jetta',
    subtitle: 'Facelift',
  },
};

export const codingModels: CodingModel[] = [
  ...catalogData.catalogs.map(
    (catalog): CodingModel => ({
      ...modelPhotos[catalog.id],
      brand: 'VW',
      catalog,
    }),
  ),
  { slug: 'audi', title: 'Audi', photo: 'audi', brand: 'Audi' },
];

export function modelYears(catalog?: CodingCatalog) {
  return catalog?.years?.join(' a ') ?? '';
}
