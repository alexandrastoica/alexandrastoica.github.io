import { graphql, useStaticQuery } from 'gatsby';

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___order] }) {
        nodes {
          frontmatter {
            title
            slug
            label
            preview
            links
            keywords
            context
            date
            order
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map((article) => ({
    title: article.frontmatter.title,
    slug: article.frontmatter.slug,
    label: article.frontmatter.label,
    preview: article.frontmatter.preview,
    links: article.frontmatter.links,
    keywords: article.frontmatter.keywords,
    context: article.frontmatter.context,
    date: article.frontmatter.date,
    order: article.frontmatter.order,
  }));
};

export default useArticles;
