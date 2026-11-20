import catalogData from '@/data/coding-catalog.json';
import referenceData from '@/data/coding-references.json';

type WorkshopCatalog = (typeof catalogData.catalogs)[number];
type YearRange = readonly [from: number, through: number | null];

export type CodingOption = WorkshopCatalog['options'][number] & {
  effect?: string;
  reference?: true;
};

export type CodingCatalog = Omit<WorkshopCatalog, 'options' | 'years'> & {
  years: YearRange | null;
  options: CodingOption[];
  reference?: {
    years: YearRange;
    url: string;
  };
};

export type CodingModel = {
  slug: string;
  title: string;
  subtitle?: string;
  photo: string;
  brand: 'VW' | 'Audi';
  catalog?: CodingCatalog;
};

type ReferenceFeature = Pick<CodingOption, 'name' | 'category'> & {
  effect: string;
  restriction?: string;
};

type ReferenceModel = {
  title: string;
  subtitle: string;
  years: { from: number; through: number | null };
  sourceSlug: string;
  features: string[];
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

const referenceModels: Record<string, ReferenceModel> = referenceData.models;
const referenceFeatures: Record<string, ReferenceFeature> =
  referenceData.features;

const workshopCatalogs = new Map(
  catalogData.catalogs.map((catalog) => [
    modelPhotos[catalog.id].slug,
    catalog,
  ]),
);

function referenceCatalog(slug: string, model: ReferenceModel): CodingCatalog {
  const workshop = workshopCatalogs.get(slug);
  const existing = workshop?.options ?? [];
  const referenceYears: YearRange = [model.years.from, model.years.through];
  const id = workshop?.id ?? `vw-${slug}`;

  return {
    id,
    model: model.title,
    years: workshop ? (workshop.years as YearRange | null) : referenceYears,
    versions: workshop?.versions ?? [],
    options: [
      ...existing,
      ...model.features.map((functionId, index): CodingOption => {
        const feature = referenceFeatures[functionId];
        return {
          ...feature,
          id: `${id}-ref-${functionId}`,
          number: existing.length + index + 1,
          functionId,
          restriction: feature.restriction ?? '',
          technicalReview: true,
          reference: true,
        };
      }),
    ],
    reference: {
      years: referenceYears,
      url: `https://seventuning.nl/functies/volkswagen/${model.sourceSlug}?lang=en`,
    },
  };
}

export const codingModels: CodingModel[] = [
  ...catalogData.catalogs.map((catalog): CodingModel => {
    const model = modelPhotos[catalog.id];
    const reference = referenceModels[model.slug];
    return {
      ...model,
      brand: 'VW',
      catalog: reference
        ? referenceCatalog(model.slug, reference)
        : { ...catalog, years: catalog.years as YearRange | null },
    };
  }),
  ...Object.entries(referenceModels).flatMap(([slug, model]): CodingModel[] =>
    workshopCatalogs.has(slug)
      ? []
      : [
          {
            slug,
            title: model.title,
            subtitle: model.subtitle,
            photo: slug,
            brand: 'VW',
            catalog: referenceCatalog(slug, model),
          },
        ],
  ),
  { slug: 'audi', title: 'Audi', photo: 'audi', brand: 'Audi' },
];

export function modelYears(catalog?: CodingCatalog) {
  if (!catalog?.years) return '';
  const [from, through] = catalog.years;
  return through ? `${from} a ${through}` : `A partir de ${from}`;
}
