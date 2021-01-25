import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/react';

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
    </Layout>
  );
}
