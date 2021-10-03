import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { breakpoints, colors, dimensions, spacing } from '../components/theme';

export default function Home() {
  return (
    <Layout footer={false}>
      <main
        css={css`
          background: ${colors.HOME_BG};
          margin: 0 auto;
          max-width: ${dimensions.MAX_BODY_WIDTH};
          padding: ${spacing.L};

          @media screen and (max-width: ${breakpoints.TABLET}) {
            padding: ${spacing.M};
          }

          @media screen and (max-width: 375px) {
            padding: ${spacing.M} ${spacing.XS};
          }
        `}
      >
        <section>
          <h1>
          Couldn't find this page{' '}
          <span role="img" aria-label="">
            🤕
          </span>
        </h1>
        <Link to="/">Go back to the homepage</Link>
        </section>
      </main>
    </Layout>
  );
}
