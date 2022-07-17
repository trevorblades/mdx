import React, { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  frontmatter: {
    title: string;
  };
};

export function PageLayout({ children, frontmatter }: PageLayoutProps) {
  return (
    <>
      <header>acme co.</header>
      <h1>{frontmatter.title}</h1>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
