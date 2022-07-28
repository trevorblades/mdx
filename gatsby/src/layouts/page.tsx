import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MyComponent } from "../components/MyComponent";

const components = {
  MyComponent,
};

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <header
        style={{
          borderBottom: "1px solid black",
        }}
      >
        acme co.
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
