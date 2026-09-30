/**
 * Datos centrales de la empresa.
 *
 * Convención: todo valor que no esté validado con Cerámica Puerto Rico
 * debe marcarse como `pending: true` y dejarse en null/string vacío
 * para que sea reemplazado cuando llegue la información real.
 *
 * Fuentes confirmadas (SPEC §2):
 *  - Fábrica en Puerto Rico, Misiones
 *  - Sección 1°, Colonia San Alberto, Lote 25B
 *  - Teléfono planta: +54 3743 476985
 *  - Actividad "desde 1975" (declaración comercial)
 *  - Instagram: @ceramicapuertoricosrl
 *  - Facebook: /ceramicaptorico
 */

export interface Branch {
  slug: string;
  name: string;
  pending?: boolean;
  address?: string;
  locality: string;
  province: string;
  phone?: string;
  whatsapp?: string;
  hours?: string;
  pendingFields?: string[];
}

export const company = {
  name: 'Cerámica Puerto Rico',
  legalName: 'Cerámica Puerto Rico SRL',
  tagline: 'Ladrillos cerámicos hechos en Misiones',
  description:
    'Fábrica de ladrillos cerámicos huecos con planta en Puerto Rico, Misiones. Proveemos a corralones, constructoras y obras en toda la región del NEA.',
  since: 1975, // declaración comercial — pendiente validación formal
  sincePending: true,

  // Dirección validada (SPEC §2)
  address: {
    street: 'Sección 1°, Colonia San Alberto, Lote 25B',
    locality: 'Puerto Rico',
    province: 'Misiones',
    country: 'Argentina',
  },

  // Teléfono principal validado
  phone: {
    display: '+54 3743 476985',
    tel: '+543743476985',
  },

  // Sucursales / corralones
  branches: [
    {
      slug: 'planta-puerto-rico',
      name: 'Planta Puerto Rico',
      address: 'Sección 1°, Colonia San Alberto, Lote 25B',
      locality: 'Puerto Rico',
      province: 'Misiones',
      phone: '+54 3743 476985',
      whatsapp: '5493743476985',
      hours: 'Lunes a viernes de 7:00 a 17:00',
    },
    {
      slug: 'corralon-puerto-iguazu',
      name: 'Corralón Puerto Iguazú',
      pending: true,
      pendingFields: ['dirección', 'teléfono', 'horarios'],
      locality: 'Puerto Iguazú',
      province: 'Misiones',
      // Anunciado en 2023 — verificar vigencia
    },
  ] satisfies Branch[],

  // Canales digitales
  social: {
    instagram: 'https://www.instagram.com/ceramicapuertoricosrl/',
    facebook: 'https://www.facebook.com/ceramicaptorico/',
  },

  email: {
    sales: 'ventas@ceramicaptorico.com.ar',
    general: 'info@ceramicaptorico.com.ar',
    pending: true,
  },

  // Coordenadas aproximadas de Puerto Rico, Misiones (pendiente geolocalización exacta)
  geo: {
    lat: -26.7957,
    lng: -55.0245,
    pending: true,
  },

  // Posicionamiento recomendado (SPEC §7)
  positioning: {
    title: 'Industria misionera. Ladrillos cerámicos para construir nuestra región.',
    sinceLabel: 'Desde 1975 trabajando junto a vos.',
  },
} as const;

export type Company = typeof company;
