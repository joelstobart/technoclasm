module.exports = {
  siteMetadata: {
    title: `Technoclasm`,
    description: `The Digital Transformation Consultancy`,
    author: `@technoclasmuk`,
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
