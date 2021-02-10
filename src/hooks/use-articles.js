import { graphql, useStaticQuery } from 'gatsby';

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((article) => ({
    title: article.frontmatter.title,
    slug: article.frontmatter.slug,
    excerpt: article.excerpt,
  }));
};

export default useArticles;
