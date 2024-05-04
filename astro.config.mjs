import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkToc from 'remark-toc';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkModifiedTime],
      optimize: true,
    }),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),

  markdown: {
    remarkPlugins: [[remarkToc, { heading: 'contents' }]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {},
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['icon', 'icon-link'] },
            children: [{ type: 'text', value: '#' }],
          },
          test: 'h3',
        },
      ],
    ],
  },
});
