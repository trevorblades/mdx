import React from "react";
import { PageProps } from "gatsby";

type PageLayoutContext = {
  frontmatter: {
    title: string;
  };
};

export function PageLayout({
  children,
  pageContext,
}: PageProps<null, PageLayoutContext>) {
  return (
    <>
      <header>acme co.</header>
      <main>
        <h1>{pageContext.frontmatter.title}</h1>
        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
