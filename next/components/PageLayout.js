export function PageLayout({ children, frontmatter, ...rest }) {
  console.log(rest)
  return (
    <div>
      <header>acme co.</header>
      <h1>{frontmatter.title}</h1>
      {children}
    </div>
  )
}