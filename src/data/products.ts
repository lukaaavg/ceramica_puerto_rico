/**
 * CatÃ¡logo real de CerÃ¡mica Puerto Rico.
 *
 * Fuente: "FOTOS Y VIDEOS/Fotos Ladrillos.doc" (documento de la empresa),
 * que lista 14 modelos con su nombre comercial. Los nombres siguen el
 * formato ancho Ã— alto Ã— largo, en centÃ­metros.
 *
 * Lo que NO estÃ¡ cargado todavÃ­a (SPEC Â§30 â€” no publicar sin validar):
 * peso unitario, unidades por mÂ², unidades por pallet, resistencia,
 * ensayo y norma. Esos campos quedan en `null` y la interfaz los muestra
 * como "A confirmar".
 *
 * Para agregar la foto de un modelo: dejala en
 * public/images/productos/<slug>.webp (o .jpg) y ProductMedia la toma sola.
 */

export type ProductType =
  | 'portante'
  | 'visto'
  | 'liviano'
  | 'comun'
  | 'rejilla'
  | 'artistico'
  | '2tubos'
  | 'encadenado'
  | 'losa';

export type Application =
  | 'cerramientos'
  | 'muros-portantes'
  | 'tabiques-interiores'
  | 'encadenados'
  | 'techos'
  | 'viviendas'
  | 'edificios'
  | 'losas';

export interface Product {
  slug: string;
  /** nombre comercial exacto, como figura en el documento de la empresa */
  name: string;
  /** familia comercial: portante, visto, liviano, comÃºn, etc. */
  type: ProductType;
  application: Application[];
  pending?: boolean;
  description: string;
  /** ancho Ã— alto Ã— largo en cm */
  dimensions?: string | null;
  /** ancho nominal en cm, para filtros y ordenamiento */
  widthCm?: number | null;
  weightKg?: number | null;
  unitsPerM2?: number | null;
  palletUnits?: number | null;
  palletWeightKg?: number | null;
  resistance?: string | null;
  thermalConductivity?: string | null;
  recommendedUse?: string;
  featured?: boolean;
  pdfUrl?: string | null;
  /** ruta explÃ­cita de la foto; si falta, se busca por convenciÃ³n <slug>.<ext> */
  image?: string | null;
  imageAlt?: string;
}

export const products: Product[] = [
  {
    slug: '18x18x24-portante',
    name: '18x18x24 Portante',
    type: 'portante',
    application: ['muros-portantes', 'edificios', 'cerramientos'],
    pending: true,
    description:
      'Ladrillo portante de 18 cm para muros que soportan cargas. Es la pieza de mayor resistencia del catÃ¡logo; el uso estructural requiere verificaciÃ³n del profesional a cargo.',
    dimensions: '18 Ã— 18 Ã— 24 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros portantes, encadenados, edificios.',
    featured: true,
    pdfUrl: null,
  },
  {
    slug: '12x18x24-portante',
    name: '12x18x24 Portante',
    type: 'portante',
    application: ['muros-portantes', 'cerramientos'],
    pending: true,
    description:
      'Ladrillo portante de 12 cm. Menos espesor que el de 18 cm y mismo comportamiento estructural, para cuando hay que reservar ancho.',
    dimensions: '12 Ã— 18 Ã— 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros portantes donde no se dispone de 18 cm.',    featured: true,
    pdfUrl: null,
  },
  {
    slug: '18x18x24-liviano',
    name: '18x18x24 Liviano',
    type: 'liviano',
    application: ['cerramientos', 'edificios'],
    pending: true,
    description:
      'Ladrillo de 18 cm de formato liviano. Se usa en cerramientos y en piezas donde se busca buen comportamiento tÃ©rmico con menos carga.',
    dimensions: '18 Ã— 18 Ã— 24 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos exteriores, tabiques gruesos.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '12x18x24-liviano',
    name: '12x18x24 Liviano',
    type: 'liviano',
    application: ['cerramientos', 'tabiques-interiores'],
    pending: true,
    description:
      'Ladrillo liviano de 12 cm. Formato muy usado en cerramientos de viviendas y en tabiques.',
    dimensions: '12 Ã— 18 Ã— 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos, tabiques interiores.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '8x18x24-comun',
    name: '8x18x24 ComÃºn',
    type: 'comun',
    application: ['cerramientos', 'tabiques-interiores', 'viviendas'],
    pending: true,
    description:
      'Ladrillo comÃºn de 8 cm, el mÃ¡s usado de la lÃ­nea para cerramientos. Buena combinaciÃ³n de peso, rendimiento y disponibilidad.',
    dimensions: '8 Ã— 18 Ã— 24 cm',
    widthCm: 8,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos exteriores e interiores.',
    featured: true,
    pdfUrl: null,
  },
  {
    slug: '18x18x24',
    name: '18x18x24',
    type: 'comun',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo de 18 Ã— 18 Ã— 24 cm. Pieza de formato general dentro de la lÃ­nea.',
    dimensions: '18 Ã— 18 Ã— 24 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos, muros en general.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '12x18x24-visto',
    name: '12x18x24 Visto',
    type: 'visto',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo visto de 12 cm. Se deja la cara a la vista, sin revoco ni pintura.',
    dimensions: '12 Ã— 18 Ã— 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cercos, terminaciones.',
    featured: false,
    image: '/images/productos/12x18x24-visto.webp',
    imageAlt:
      'Ladrillo cerámico hueco visto, de canto, apoyado sobre una barra de metal',
    pdfUrl: null,
  },
  {
    slug: '8x13x20-visto',
    name: '8x13x20 Visto',
    type: 'visto',
    application: ['cerramientos', 'tabiques-interiores'],
    pending: true,
    description:
      'Ladrillo visto de formato menor (13 cm de alto, 20 cm de largo). Para muros vistos donde se busca pieza chica.',
    dimensions: '8 Ã— 13 Ã— 20 cm',
    widthCm: 8,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cerramientos de formato corto.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '10x15x24-visto',
    name: '10x15x24 Visto',
    type: 'visto',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo visto de 10 cm. Formato intermedio para muros vistos.',
    dimensions: '10 Ã— 15 Ã— 24 cm',
    widthCm: 10,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cerramientos.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '6x12x24-rejilla',
    name: '6x12x24 Rejilla',
    type: 'rejilla',
    application: ['cerramientos', 'tabiques-interiores'],
    pending: true,
    description:
      'Pieza de 6 cm con formato de rejilla. Se usa en cerramientos livianos y como pieza de relleno.',
    dimensions: '6 Ã— 12 Ã— 24 cm',
    widthCm: 6,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos livianos, tabiques.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '6x12x24-2tubos',
    name: '6x12x24 2Tubos',
    type: '2tubos',
    application: ['cerramientos', 'tabiques-interiores'],
    pending: true,
    description:
      'Pieza de 6 cm con dos tubos. Formato pensado para trabajos donde se busca poco peso y buena ejecuciÃ³n.',
    dimensions: '6 Ã— 12 Ã— 24 cm',
    widthCm: 6,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos y tabiques de poco espesor.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '18x18x12-5-artistico',
    name: '18x18x12.5 ArtÃ­stico',
    type: 'artistico',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo de 18 cm de largo reducido (12,5 cm), de terminaciÃ³n artÃ­stica. Para detalles, terminaciones y muros decorativos.',
    dimensions: '18 Ã— 18 Ã— 12,5 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Terminaciones, detalles decorativos.',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: 'peine-encadenado',
    name: 'Peine Encadenado',
    type: 'encadenado',
    application: ['encadenados', 'muros-portantes', 'edificios'],
    pending: true,
    description:
      'Peine de encadenado. Pieza de enlace horizontal y vertical, para vincular estructura con mamposterÃ­a y resolver los encuentros.',
    dimensions: null,
    widthCm: null,
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
  {
    slug: 'losa-sapo-43x12x20',
    name: 'Losa Sapo 43x12x20',
    type: 'losa',
    application: ['losas', 'techos'],
    pending: true,
    description:
      'Losa de 43 cm de largo. Pieza para losas y techos; su uso y cÃ¡lculo los define el profesional a cargo.',
    dimensions: '43 Ã— 12 Ã— 20 cm',
    widthCm: 43,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Losas y techos, segÃºn cÃ¡lculo.',
    featured: false,
    pdfUrl: null,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const productTypes: { id: ProductType; label: string }[] = [
  { id: 'portante', label: 'Portantes' },
  { id: 'comun', label: 'Comunes' },
  { id: 'liviano', label: 'Livianos' },
  { id: 'visto', label: 'Vistos' },
  { id: 'rejilla', label: 'Rejilla' },
  { id: '2tubos', label: '2 Tubos' },
  { id: 'artistico', label: 'ArtÃ­stico' },
  { id: 'encadenado', label: 'Encadenados' },
  { id: 'losa', label: 'Losas' },
];
