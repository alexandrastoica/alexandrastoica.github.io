import { graphql, useStaticQuery } from 'gatsby';

const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            label
            preview
            links
            languages
            context
            date
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
    languages: article.frontmatter.languages,
    context: article.frontmatter.context,
    date: article.frontmatter.date,
  }));
};

export default useArticles;
