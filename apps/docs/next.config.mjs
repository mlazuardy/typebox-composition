import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  //
};

const withMDX = createMDX({
  options: {
    jsx: true,
    // remarkPlugins: [],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
export default withMDX(nextConfig);
