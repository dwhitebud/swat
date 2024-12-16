import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"

// Load environment variables from .env files
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Technology Consulting Services`,
    description: `Expert technology implementation services for small businesses`,
    siteUrl: `https://www.yourdomain.com`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
        downloadLocal: true,
        contentTypeFilter: (contentType: any) => {
          return ["service", "testimonial", "teamMember", "page"].includes(contentType.sys.id);
        },
      },
    },
  ],
}

export default config
