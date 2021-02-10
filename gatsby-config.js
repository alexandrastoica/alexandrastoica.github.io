module.exports = {
  siteMetadata: {
    title: 'Alexandra Stoica | Portfolio',
    description:
      "Alexandra Stoica's personal portfolio including work related to UX/Front End Engineering and Human-Computer Interaction.",
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work sans`,
            subsets: [`400`, `500`, `600`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
