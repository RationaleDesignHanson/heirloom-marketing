import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { dirname } from "path";
import { fileURLToPath } from "url";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: {
    root: projectRoot,
  },
};

export default withMDX(nextConfig);
