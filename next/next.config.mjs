import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxNext } from 'remark-mdx-next';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // remarkPlugins: [remarkFrontmatter, [remarkMdxNext, {name: 'frontmatter'}]],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})