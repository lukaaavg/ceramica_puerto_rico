/**
 * Catálogo real de Cerámica Puerto Rico.
 *
 * Fuente: "FOTOS Y VIDEOS/Fotos Ladrillos.doc" (documento de la empresa),
 * que lista 14 modelos con su nombre comercial. Los nombres siguen el
 * formato ancho × alto × largo, en centímetros.
 *
 * Lo que NO está cargado todavía (SPEC ç30 â€” no publicar sin validar):
 * peso unitario, unidades por mò, unidades por pallet, resistencia,
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
  /** familia comercial: portante, visto, liviano, común, etc. */
  type: ProductType;
  application: Application[];
  pending?: boolean;
  description: string;
  /** ancho × alto × largo en cm */
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
  /** ruta explícita de la foto; si falta, se busca por convención <slug>.<ext> */
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
      'Ladrillo portante de 18 cm para muros que soportan cargas. Es la pieza de mayor resistencia del catálogo; el uso estructural requiere verificación del profesional a cargo.',
    dimensions: '18 × 18 × 24 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros portantes, encadenados, edificios.',
    imageAlt: 'Ladrillo portante de 18x18x24 cm, seis huecos rectangulares',
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
    dimensions: '12 × 18 × 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros portantes donde no se dispone de 18 cm.',
    imageAlt: 'Ladrillo portante de 12x18x24 cm, seis huecos rectangulares',    featured: true,
    pdfUrl: null,
  },
  {
    slug: '18x18x24-liviano',
    name: '18x18x24 Liviano',
    type: 'liviano',
    application: ['cerramientos', 'edificios'],
    pending: true,
    description:
      'Ladrillo de 18 cm de formato liviano. Se usa en cerramientos y en piezas donde se busca buen comportamiento térmico con menos carga.',
    dimensions: '18 × 18 × 24 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos exteriores, tabiques gruesos.',
    imageAlt: 'Ladrillo liviano de 18x18x24 cm, seis huecos rectangulares',
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
    dimensions: '12 × 18 × 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos, tabiques interiores.',
    imageAlt: 'Ladrillo liviano de 12x18x24 cm, seis huecos rectangulares',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '8x18x24-comun',
    name: '8x18x24 Común',
    type: 'comun',
    application: ['cerramientos', 'tabiques-interiores', 'viviendas'],
    pending: true,
    description:
      'Ladrillo común de 8 cm, el más usado de la línea para cerramientos. Buena combinación de peso, rendimiento y disponibilidad.',
    dimensions: '8 × 18 × 24 cm',
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
      'Ladrillo de 18 × 18 × 24 cm. Pieza de formato general dentro de la línea.',
    dimensions: '18 × 18 × 24 cm',
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
    dimensions: '12 × 18 × 24 cm',
    widthCm: 12,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cercos, terminaciones.',
    imageAlt: 'Ladrillo visto de 12x18x24 cm, cara estriada y seis huecos',
    featured: false,
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
    dimensions: '8 × 13 × 20 cm',
    widthCm: 8,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cerramientos de formato corto.',
    imageAlt: 'Ladrillo visto de 8x13x20 cm, cara estriada y seis huecos',
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
    dimensions: '10 × 15 × 24 cm',
    widthCm: 10,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Muros vistos, cerramientos.',
    imageAlt: 'Ladrillo visto de 10x15x24 cm, cara estriada y seis huecos',
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
    dimensions: '6 × 12 × 24 cm',
    widthCm: 6,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos livianos, tabiques.',
    imageAlt: 'Ladrillo de 6x12x24 cm con huecos de sección circular tipo rejilla',
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
      'Pieza de 6 cm con dos tubos. Formato pensado para trabajos donde se busca poco peso y buena ejecución.',
    dimensions: '6 × 12 × 24 cm',
    widthCm: 6,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Cerramientos y tabiques de poco espesor.',
    imageAlt: 'Dos piezas de 6x12x24 cm apiladas con canal ranurado',
    featured: false,
    pdfUrl: null,
  },
  {
    slug: '18x18x12-5-artistico',
    name: '18x18x12.5 Artístico',
    type: 'artistico',
    application: ['cerramientos', 'viviendas'],
    pending: true,
    description:
      'Ladrillo de 18 cm de largo reducido (12,5 cm), de terminación artística. Para detalles, terminaciones y muros decorativos.',
    dimensions: '18 × 18 × 12,5 cm',
    widthCm: 18,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Terminaciones, detalles decorativos.',
    imageAlt: 'Pieza de 18x18x12,5 cm en forma de aspa para terminaciones decorativas',
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
      'Peine de encadenado. Pieza de enlace horizontal y vertical, para vincular estructura con mampostería y resolver los encuentros.',
    dimensions: null,
    widthCm: null,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Encadenados horizontales y verticales.',
    imageAlt: 'Peine de encadenado con perfil dentado',
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
      'Losa de 43 cm de largo. Pieza para losas y techos; su uso y cálculo los define el profesional a cargo.',
    dimensions: '43 × 12 × 20 cm',
    widthCm: 43,
    weightKg: null,
    unitsPerM2: null,
    palletUnits: null,
    palletWeightKg: null,
    resistance: null,
    thermalConductivity: null,
    recommendedUse: 'Losas y techos, según cálculo.',
    imageAlt: 'Losa de 43x12x20 cm con cinco arcos',
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
  { id: 'artistico', label: 'Artístico' },
  { id: 'encadenado', label: 'Encadenados' },
  { id: 'losa', label: 'Losas' },
];
