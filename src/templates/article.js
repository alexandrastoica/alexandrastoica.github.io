import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Breadcrumb from '../components/breadcrumb';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        label
        date
        links
        context
        languages
      }
      body
    }
  }
`;

const FlexLayout = styled('div')`
  background: linear-gradient(90deg, #fdf6f3, 50%, #fff 50%);
  display: flex;
  padding: 0 88px;
  margin: 0;
  width: 100%;
`;

const ArticleBody = styled('article')`
  position: relative;
  background: #fff;
  padding-bottom: 88px;
  padding-top: 88px;
  box-sizing: border-box;
  flex: 1;
  padding: 88px 64px;
  margin: 0 auto;

  h1 + p {
    color: #42555d;
    font: 400 1.5rem/2rem Work Sans, sans-serif;
  }

  h2 {
    margin: 56px 0 32px;
  }
`;

const ArticleBodyCorner = styled('span')`
  background: linear-gradient(to top left, #001e49 50%, #fdf6f3 0);
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  width: 50px;
`;

const ArticleTemplate = ({ data: { mdx: article } }) => (
  <Layout>
    <Breadcrumb title={article.frontmatter.title}></Breadcrumb>
    <FlexLayout>
      <Sidebar article={article} />
      <ArticleBody>
        <ArticleBodyCorner></ArticleBodyCorner>
        <MDXRenderer>{article.body}</MDXRenderer>
      </ArticleBody>
    </FlexLayout>
  </Layout>
);

export default ArticleTemplate;
