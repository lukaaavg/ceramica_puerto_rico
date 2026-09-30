/**
 * Modelo de datos de productos.
 *
 * SPEC §5 — Cada ficha debe contener, cuando estén validados:
 *  nombre, slug, medidas, peso, unidades por m², unidades por pallet,
 *  aplicación, tipo, descripción, recomendaciones, normativa, PDF, etc.
 *
 * Mientras el catálogo real no esté validado, todos los modelos
 * tienen `pending: true` y los valores técnicos en null.
 */

export type ProductType =
  | 'cerramiento'
  | 'portante'
  | 'encadenado'
  | 'especial'
  | 'techo';

export type Application =
  | 'cerramientos'
  | 'muros-portantes'
  | 'tabiques-interiores'
  | 'encadenados'
  | 'techos'
  | 'viviendas'
  | 'edificios';

export interface Product {
  slug: string;
  name: string;
  type: ProductType;
  application: Application[];
  pending?: boolean;
  description: string;
  /** ancho × alto × largo en cm */
  dimensions?: string;
  weightKg?: number | null;
  unitsPerM2?: number | null;
  palletUnits?: number | null;
  palletWeightKg?: number | null;
  resistance?: string | null;
  thermalConductivity?: string | null;
  recommendedUse?: string;
  featured?: boolean;
  pdfUrl?: string | null;
}

export const products: Product[] = [
  {
    slug: 'ladrillo-hueco-8',
    name: 'Ladrillo Hueco 8',
    type: 'cerramiento',
    application: ['tabiques-interiores', 'cerramientos'],
    pending: true,
    description:
      'Ladrillo cerámico hueco de 8 cm, pensado para tabiques interiores y cerramientos livianos. Información técnica completa pendiente de validación con el fabricante.',
    dimensions: '8 × 18 × 33 cm',
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Tabiques interiores, cerramientos livianos.',
    featured: true,
    pdfUrl: null,
  },
  {
    slug: 'ladrillo-hueco-12',
    name: 'Ladrillo Hueco 12',
    type: 'cerramiento',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo cerámico hueco de 12 cm para cerramientos exteriores en viviendas y obras en general.',
    dimensions: '12 × 18 × 33 cm',
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos exteriores, muros en viviendas.',
    featured: true,
    pdfUrl: null,
  },
  {
    slug: 'ladrillo-hueco-18',
    name: 'Ladrillo Hueco 18',
    type: 'cerramiento',
    application: ['cerramientos', 'edificios'],
    pending: true,
    description:
      'Ladrillo cerámico hueco de 18 cm para cerramientos de mayor espesor y mejor aislación.',
    dimensions: '18 × 18 × 33 cm',
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos exteriores, muros de edificios.',
    featured: true,
    pdfUrl: null,
  },
  {
    slug: 'ladrillo-portante',
    name: 'Ladrillo Portante',
    type: 'portante',
    application: ['muros-portantes', 'edificios'],
    pending: true,
    description:
      'Ladrillo cerámico portante para muros que soportan cargas. Pendiente de validación de resistencia y geometría.',
    dimensions: undefined,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros portantes.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: 'ladrillo-encadenado',
    name: 'Ladrillo Encadenado',
    type: 'encadenado',
    application: ['encadenados'],
    pending: true,
    description:
      'Pieza tipo U para encadenados horizontales y verticales. Pendiente validación de medidas y carga.',
    dimensions: undefined,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Encadenados horizontales y verticales.',
    featured: false,
    pdfUrl: null,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const productTypes: { id: ProductType; label: string }[] = [
  { id: 'cerramiento', label: 'Cerramiento' },
  { id: 'portante', label: 'Portante' },
  { id: 'encadenado', label: 'Encadenado' },
  { id: 'especial', label: 'Especial' },
  { id: 'techo', label: 'Techo' },
];
