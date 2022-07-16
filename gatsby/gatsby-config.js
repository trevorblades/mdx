module.exports = {
  siteMetadata: {
    title: 'MDX v2'
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ]
}