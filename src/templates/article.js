import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
`;

const ArticleTemplate = ({ data: { mdx: article } }) => (
  <Layout>
    <Breadcrumb title={article.frontmatter.title}></Breadcrumb>
    <FlexLayout>
      <Sidebar article={article} />
      <article
        css={css`
          position: relative;
          background: #fff;
          padding-bottom: 88px;
          padding-top: 88px;
          box-sizing: border-box;
          flex: 1;
          padding: 88px 64px;
          margin: 0 auto;
        `}
      >
        <span
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background: linear-gradient(to top left, #001e49 50%, #fdf6f3 0);
          `}
        ></span>
        <MDXRenderer>{article.body}</MDXRenderer>
      </article>
    </FlexLayout>
  </Layout>
);

export default ArticleTemplate;
