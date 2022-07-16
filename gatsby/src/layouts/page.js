export function PageLayout({children, pageContext}) {
  return (
    <>
      <header>acme co.</header>
      <main>
        <h1>{pageContext.frontmatter.title}</h1>
        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  )
}
