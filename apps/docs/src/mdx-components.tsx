import type { MDXComponents } from "mdx/types";
import { Fence } from "./components/common/Fence";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    pre: ({ children }) => {
      const code = (children as any)?.props?.children;
      const language =
        (children as any)?.props?.className?.replace("language-", "") ||
        "typescript";
      return <Fence code={code} language={language} />;
    },
  };
}
