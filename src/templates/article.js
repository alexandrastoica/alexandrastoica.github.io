import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Breadcrumb from '../components/breadcrumb';
import { dimensions, spacing, type } from '../components/theme';
import { css } from '@emotion/react';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        label
        date
        links
        context
        keywords
      }
      body
    }
  }
`;

const ArticleLayout = styled('main')`
  background: linear-gradient(90deg, #fdf6f3, 50%, #fff 50%);
  display: flex;
  padding: 0 ${spacing.XL};
  margin: 0;
  width: 100%;

  @media screen and (max-width: 1015px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

const ArticleBody = styled('article')`
  position: relative;
  background: #fff;
  flex: 1;
  padding: ${spacing.XL} ${spacing.L};
  margin: 0 auto;

  h1 + p {
    color: #42555d;
    font: 400 1.5rem/2rem ${type.HEADLINE_FONT};
  }

  h2 {
    margin: ${spacing.L} 0 ${spacing.M};
  }

  li {
    margin: ${spacing.S} 0;
  }

  @media screen and (max-width: 700px) {
    padding: ${spacing.M};
  }
`;

const ArticleBodyCorner = styled('span')`
  background: linear-gradient(to top left, #001e49 50%, #fdf6f3 0);
  height: 64px;
  left: 0;
  position: absolute;
  top: 0;
  width: 64px;
`;

const ArticleTemplate = ({ data: { mdx: article } }) => (
  <Layout>
    <Breadcrumb title={article.frontmatter.title}></Breadcrumb>
    <ArticleLayout>
      <Sidebar article={article} />
      <ArticleBody>
        <ArticleBodyCorner></ArticleBodyCorner>
        <div
          css={css`
            max-width: ${dimensions.MAX_TEXT_WIDTH};
          `}
        >
          <MDXRenderer>{article.body}</MDXRenderer>
        </div>
      </ArticleBody>
    </ArticleLayout>
  </Layout>
);

export default ArticleTemplate;
