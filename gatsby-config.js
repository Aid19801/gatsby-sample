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
    hero_text_two: `Elegant Design.`,
    hero_text_three: `SMART SOLUTIONS`,
    boxesInfo: [
        {
          type: "web",
          title: "Websites & Webapps",
          icon: "Computer",
          blurb: "Funktastic websites & web-applications designed specifically for you to grow your business.",
          
          bulletOne: "Shareable Blogs",
          bulletOneSVG: 'blogs',

          bulletTwo: "SignIn & SignUp functionality",
          bulletTwoSVG: 'sign_in',

          bulletThree: "The eCommerce experience your users want",
          bulletThreeSVG: 'e_comm',
        },
        {
          type: "mob",
          title: "IOS / Android Apps",
          icon: "Money",
          blurb: "Electric apps for slick performance and rewarding engagement.",
          
          bulletOne: "Cross-platform (ios/android) compatability",
          bulletOneSVG: 'cross_platform',

          bulletTwo: "Elegant design",
          bulletTwoSVG: 'design',

          bulletThree: "Proven useability and returning visits",
          bulletThreeSVG: 'visits',
        },
        {
          type: "data",
          title: "API & Data",
          icon: "Graph",
          blurb: "Get the information in, in the way that you want it.",
          bulletOne: "REST or GraphQL API experience",
          bulletOneSVG: 'api',
          
          bulletTwo: "First-tier databases for maximum security",
          bulletTwoSVG: 'db',

          bulletThree: "Real-time data for immediate, agile performance",
          bulletThreeSVG: 'real_time',
        },
        {
          type: "applications",
          title: "Desktop Applications",
          icon: "Desktop",
          blurb: "Take advantage of the upticks that PC/Mac installed software can generate.",
          bulletOne: "File system access",
          bulletOneSVG: 'files',

          bulletTwo: "Greater security",
          bulletTwoSVG: 'security',
          
          bulletThree: "Installable, proprietary software",
          bulletThreeSVG: 'software',
        }
    ]

    
    
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
        icon: `src/images/f27_small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
