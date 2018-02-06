module.exports = {
  siteMetadata: {
    title: 'Height Capital Markets',
    author: 'Spoke-Dev',
    authorLink: 'https://github.com/Spoke-Dev',
    disqus: 'gatsby-starter-blog'// put your disqus ID here
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": [
            "cache-control = public, max-age=0, must-revalidate",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
}
