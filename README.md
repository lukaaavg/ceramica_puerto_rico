# Cerámica Puerto Rico — Sitio web

Sitio institucional y comercial para **Cerámica Puerto Rico**, fábrica de
ladrillos cerámicos de Puerto Rico, Misiones.

Stack:

- **Astro** (generación estática)
- **TypeScript**
- **CSS** propio (design tokens)
- **Vue 3** para componentes interactivos puntuales (calculadora, etc.)
- **PHP 8.x** sólo para el endpoint de contacto (`/api/contact.php`)
- Despliegue por **FTPS** a hosting compartido

## Comandos

```sh
npm install            # Instalar dependencias (usar --legacy-peer-deps si hay conflictos)
npm run dev            # Dev server en http://localhost:4321
npm run build          # Build estático → ./dist
npm run preview        # Vista previa del build
npm run check          # Astro + TypeScript check
```

## Estructura

```text
src/
├── components/          # Componentes reutilizables (.astro)
├── data/                # Contenido estático (TS) — company, products, distributors, faq, applications
├── layouts/             # BaseLayout
├── pages/               # Rutas (file-based)
│   ├── index.astro
│   ├── empresa.astro
│   ├── productos/
│   ├── aplicaciones/
│   ├── distribuidores.astro
│   ├── recursos-tecnicos.astro
│   ├── preguntas-frecuentes.astro
│   ├── contacto.astro
│   └── 404.astro
├── styles/global.css    # Design tokens + base
public/
├── api/contact.php      # Endpoint PHP (POST) — honeypot + rate limit + SMTP opcional
├── robots.txt
└── favicon.*
```

## Contenido pendiente de validación

Toda la información que **no esté confirmada por la empresa** está marcada
visualmente con la etiqueta `Pendiente de validación` (clase `.pending`) y
los valores técnicos quedan como `null` o `undefined` en los archivos
`src/data/*.ts`. Cuando lleguen los datos reales, basta con editar el TS
correspondiente y volver a buildear.

Datos actualmente pendientes (SPEC §30):

- Catálogo completo y todos los modelos
- Medidas, rendimientos y pallets
- Fichas técnicas, ensayos y normas
- Cronología de la empresa desde 1975
- Certificaciones
- Capacidad productiva publicable
- Lista validada de distribuidores y cobertura
- Sucursales y contactos vigentes
- Obras de referencia
- Fotografías y videos originales
- Logos y colores corporativos
- PDFs y CAD/BIM

## SEO

Cada página incluye:

- `<title>` y `<meta description>` únicos
- Canonical
- OpenGraph + Twitter Cards
- JSON-LD: `Organization`, `LocalBusiness`, `WebSite`, `BreadcrumbList`,
  `FAQPage` (sólo en `/preguntas-frecuentes`) y `Product` (en fichas)

`@astrojs/sitemap` genera `sitemap-index.xml` y `sitemap-0.xml` en cada
build. `robots.txt` apunta al sitemap.

## Formulario de contacto

`POST /api/contact.php` recibe `name`, `email`, `phone`, `profile`,
`locality`, `message`. Aplica:

- Validación de origen (CORS básico)
- Honeypot (`website`)
- Rate limit por IP (5/hora)
- Sanitización con `htmlspecialchars`
- Validación de email

Si se define `CERAMICA_SMTP_ENABLED=true` y constantes `CERAMICA_SMTP_*`,
envía por SMTP con PHPMailer. Si no, registra la consulta en
`api/logs/contact.log`.

Ver `public/api/README.md` para detalles.

## Pendiente — etapa 2

- Calculadora de ladrillos (Vue island, SPEC §28)
- Sección /obras con galería
- Búsqueda geográfica de distribuidores
- Sesión fotográfica real (SPEC §11)
- Reemplazo de SVGs placeholder por fotos reales
- Reemplazo de copy y datos validados
