module.exports = {
  siteMetadata: {
    title: 'Alexandra Stoica | Portfolio',
    description:
      "Alexandra Stoica's personal portfolio including work related to UX/Front End Engineering and Human-Computer Interaction.",
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: 'articles',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Work sans:400,500',
          'Open sans:300,400,500,600',
          'material icons',
        ],
        display: 'swap',
      },
    },
  ],
};
