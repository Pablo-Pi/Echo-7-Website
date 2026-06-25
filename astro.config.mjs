import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://echo7.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thank-you/'),
    }),
  ],
  output: 'static',
});
