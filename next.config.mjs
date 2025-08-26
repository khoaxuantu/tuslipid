import createMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-device-detect"],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
};

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm", "remark-math"],
    rehypePlugins: ["rehype-highlight", "rehype-slug", "rehype-katex", "rehype-raw"],
  },
});

export default withMdx(nextConfig);
