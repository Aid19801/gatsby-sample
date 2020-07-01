module.exports = {
  siteMetadata: {
    title: `Funk-27`,
    titleTemplate: `F27`,
    initials: `F27`,
    description: `Welcome to the future! Funk-27 is a Front End Design and Software Delivery agency based in the South East of England.`,
    author: `@funkTwentySeven`,
    twitterUsername: `@funkTwentySeven`,
    url: `https://funk27.com`,
    hero_text_one: `We Live Tech.`,
    hero_text_two: `IDEAS 2 LIFE.`,
    hero_text_three: `SMART SOLUTIONS`
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
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
