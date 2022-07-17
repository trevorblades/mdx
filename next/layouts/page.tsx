import React from "react";

export function PageLayout({ children, frontmatter }) {
  return (
    <div>
      <header>acme co.</header>
      <h1>{frontmatter.title}</h1>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
}
