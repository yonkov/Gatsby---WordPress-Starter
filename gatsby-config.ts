import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby WordPress GraphQl Starter`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      // Replace this link with your wordpress server url
      "url": "https://estera-demo-01.nasiothemes.com/graphql"
    }
  }, "gatsby-plugin-sass",
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
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
       },
     },
  ]
};

export default config;
