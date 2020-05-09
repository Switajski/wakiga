module.exports = {
  pathPrefix: '/wakiga',
  siteMetadata: {
    title: `Waldkindergarten Plankenfels`,
    siteUrl: `http://www.waldkindergarten-wiesenttal.de`,
    description: `Sommer wie Winter - lernen und (er)leben in der Natur`,
    author: `Marek Switajski & Michael Werner`,
    address: `Waldkindergarten Wiesenttal e.V.
    Schauertal 25
    91346 Wiesenttal/Streitberg`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docx`,
        path: `${__dirname}/src/content/docx`,
      },
    },
    `gatsby-transformer-ms-word`,
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
