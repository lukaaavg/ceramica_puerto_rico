// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://ceramicaptorico.com.ar';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  integrations: [
    vue(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
