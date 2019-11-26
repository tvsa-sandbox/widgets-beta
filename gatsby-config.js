module.exports = {
    siteMetadata: {
          title: "WhiteLabel Markup Core",
          description: "Was born from the analysis of the basic communication needs of diverse digital products and the main editorial, design and development patterns whose objective is to be the starting point to generate interfaces in a fast and consistent way while, at the same time, is attached to the best practices and standards that modern digital products require to reach their end user in an efficient and satisfactory way.",
          author:"@WhiteLabelTeam"
      },
  pathPrefix: "/widgets-beta",
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
        resolve: `gatsby-plugin-html-attributes`,
        options: {
        lang: `es`
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-plugin-sass`,
        options: {
          implementation: require("sass"),
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WhiteLabel V2.0 Atomic Ghost`,
        short_name: `WhiteLabel`,
        start_url: `/widgets-beta`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-152622812-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,

      optimizeId: "GTM-W9ZPVDM",
      // Enables Google Optimize Experiment ID
      experimentId: "xJslcWpBQ9W1051tFQwi5A",
    },
  },

  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-NCCFJL5",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      //includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      //defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      //dataLayerName: "YOUR_DATA_LAYER_NAME",
    },
  },






    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
