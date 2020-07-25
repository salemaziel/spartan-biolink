module.exports = {
  siteMetadata: {
    title: `Spartan Plumbing Contact Link`,
    description: `Spartan Plumbing Contact Link`,
    author: `@msalemaziel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://spartanplumbing.kontact.link',
        sitemap: 'https://spartanplumbing.kontact.link/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spartan Plumbing Contact Link`,
        short_name: `Spartan Plumbing`,
        start_url: `/`,
        background_color: `#0D4D8D`,
        theme_color: `#C32830`,
        display: `minimal-ui`,
        icon: `src/images/Spartan-Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
