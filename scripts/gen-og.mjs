// Genera og-default.png desde og-default.svg usando sharp
import { promises as fs } from 'node:fs';
import sharp from 'sharp';

const svg = await fs.readFile('./public/og-default.svg', 'utf8');

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile('./public/og-default.png');

console.log('og-default.png generado correctamente');
