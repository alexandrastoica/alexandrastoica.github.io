exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create articles', result.errors);
  }

  const articles = result.data.allMdx.nodes;

  articles.forEach((article) => {
    actions.createPage({
      path: article.frontmatter.slug,
      component: require.resolve('./src/templates/article.js'),
      context: {
        slug: article.frontmatter.slug,
      },
    });
  });
};
