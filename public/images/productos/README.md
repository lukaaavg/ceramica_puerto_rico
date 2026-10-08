# Fotos de productos

Una foto por producto, nombrada con el **slug exacto** del producto.
`src/components/ProductMedia.astro` la resuelve sola; no hay que tocar código.

| Archivo a dejar acá            | Producto              |
| ------------------------------ | --------------------- |
| `ladrillo-hueco-8.jpg`         | Ladrillo Hueco 8      |
| `ladrillo-hueco-12.jpg`        | Ladrillo Hueco 12     |
| `ladrillo-hueco-18.jpg`        | Ladrillo Hueco 18     |
| `ladrillo-portante.jpg`        | Ladrillo Portante     |
| `ladrillo-encadenado.jpg`      | Ladrillo Encadenado   |

Extensiones aceptadas, en orden de prioridad: `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`.

Si el archivo no está, la página sigue funcionando: se dibuja el ladrillo en
SVG. Podés ir agregando fotos de a uno.

## Fotos de otras secciones

La sesión fotográfica también sirve para:

- `public/images/planta/` — fábrica, horno, drying, materia prima, despacho
- `public/images/obras/` — obras terminadas y en ejecución

Esas todavía hay que cablearlas a mano cuando lleguen.

## Conviene

- Horizontal y vertical de la misma pieza (la ficha muestra la principal).
- Resolution alta: se muestran hasta ~640 px de ancho.
- Fondo liso para las fichas de producto; la foto de contexto va en la home.
- Nada de marcas de agua ni texto sobre la pieza.