import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const ArticleTemplate = ({ data: { mdx: article } }) => (
  <Layout>
    <h1>{article.frontmatter.title}</h1>
    <MDXRenderer>{article.body}</MDXRenderer>
  </Layout>
);

export default ArticleTemplate;
