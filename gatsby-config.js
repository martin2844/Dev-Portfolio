const path = require('path');

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Martin Chammah',
    author: 'Martin Chammah',
    siteUrl: `https://www.martinchammah.dev`
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `path/to/dir`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            }
          }
        ]
      }
  }
   
]
}


