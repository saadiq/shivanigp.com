// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When deploying to shivanigp.com, set site to 'https://shivanigp.com' and remove base.
// For GitHub Pages with a repo name, use the repo URL and base path.
export default defineConfig({
  site: 'https://shivanigp.com',
  integrations: [sitemap()],
});
