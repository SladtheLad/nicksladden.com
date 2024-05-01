import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import { remarkSandpack } from 'remark-sandpack';
import remarkFrontmatter from 'remark-frontmatter';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkSandpack],
      optimize: true,
    }),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
