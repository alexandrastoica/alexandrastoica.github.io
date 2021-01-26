import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/react';
import ArticleCard from '../components/article-card';

export default function Home() {
  return (
    <Layout>
      <h1
        css={css`
          color: rebeccapurple;
        `}
      >
        Hello world!
      </h1>
      <ArticleCard
        label="label"
        title="hello"
        description="from the card component"
        link="/article/1"
      ></ArticleCard>
    </Layout>
  );
}
