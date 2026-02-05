import type { MDXComponents } from "mdx/types";

/**
 * Next.js MDX hook.
 *
 * We intentionally avoid `@mdx-js/react` here because App Router MDX is rendered
 * in the React Server Components environment, where `react-server` does not
 * support `createContext`.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return components;
}

