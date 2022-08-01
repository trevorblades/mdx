import nextMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import { remarkMdxNext } from "remark-mdx-next";

const withMDX = nextMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxNext, { name: "frontmatter" }],
    ],
  },
});

export default withMDX({
  pageExtensions: ["mdx"],
});
