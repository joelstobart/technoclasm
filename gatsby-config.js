module.exports = {
  siteMetadata: {
    title: `Technoclasm`,
    description: `Digital Transformation for Enterprises`,
    author: `@joelstobart`,
    siteUrl: `https://technoclasm.com`,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sitemap`,
  ],
}
