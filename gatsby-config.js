/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = 
{
  siteMetadata: {
    title: `Waldkindergarten Plankenfels`,
    siteUrl: `https://www.waldkindergarten-plankenfels.de`,
    description: `Waldkindergarten Mäusewiese Plankenfels: Sommer wie Winter - lernen und (er)leben in der Natur`,
    image: "/images/Waldkindergarten_Logo.png",
    author: `Michael Werner`,
    address: `Waldkindergarten Wiesenttal e.V.
    Muschelquellenweg 11
    91346 Wiesenttal/Streitberg`,
    facebookUsername: "waldkiga.plankenfels"
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-ms-word", "gatsby-plugin-react-svg",
  {
    resolve: `gatsby-source-filesystem`,
    options: 
	  {
      name: `images`,
      path: `${__dirname}/src/images`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: 
    {
        name: `docx`,
        path: `${__dirname}/src/content/docx`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: 
    {
        name: `downloads`,
        path: `${__dirname}/src/content/download`,
    }
  }
]
};