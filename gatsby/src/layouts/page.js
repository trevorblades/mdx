import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PageLayout({children, pageContext}) {
  return (
    <>
      <Helmet>
        <title>{pageContext.frontmatter.title}</title>
      </Helmet>
      <header>acme co.</header>
      <main>
        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  )
}
