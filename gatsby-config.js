module.exports = {
  siteMetadata: {
    title: `blog.izs.me`,
    description: `Writing and Stuff from Isaac Z. Schlueter`,
    name: `izs`,
    title: `blog.izs.me`,
    url: `https://blog.izs.me/`,
    siteUrl: `https://blog.izs.me`,
    postsPerPage: 5,
    headerLinks: [
      ['https://twitter.com/izs', '@izs'],
      ['https://github.com/isaacs', 'gh'],
      ['https://keybase.io/isaacs', 'kb'],
      ['https://izs.me', 'resume'],
      ['/archive', 'archive'],
      ['/ask', 'ask'],
    ],
    twitter: `izs`,
    archivePage: {
      slug: 'archive',
      title: 'Archive'
    }
  },
  plugins: [
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:`gatsby-remark-tumble-media`,
            options: {
              maxWidth: 700,
            }
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              wrapperStyle: 'max-width:100% !important;'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: { js: "javascript", md: "markdown" },
              showLineNumbers: false,
            },
          },
          {
            resolve: `@weknow/gatsby-remark-twitter`,
          },
        ],
      },
    },
    `gatsby-redirect-from`,
    `gatsby-plugin-meta-redirect` // make sure this is always the last one
  ]
}
