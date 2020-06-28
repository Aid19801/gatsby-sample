module.exports = {
  siteMetadata: {
    title: `Funk-27`,
    // defaultTitle: `F27`,
    titleTemplate: `F27`,
    description: `Welcome to the future! Funk-27 is a Front End Design and Software Delivery agency based in the South East of England.`,
    // defaultDescription: `Welcome to the future! Funk-27 is a Front End Design and Software Delivery agency based in the South East of England.`,
    author: `@funkTwentySeven`,
    twitterUsername: `@funkTwentySeven`,
    url: `https://www.funk27.com`,
    image: `/images/startup.jpg`,
    titleTemplate: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
