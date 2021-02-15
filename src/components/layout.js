import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            font-family: Open sans, sans-serif;
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: Work sans, sans-serif;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          .material-icons {
            font-family: 'Material Icons';
            font-size: 24px;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="http://alexandrastoica.co.uk/" />
        <meta
          property="og:image"
          content="http://alexandrastoica.co.uk/assets/img/social/alexandrastoica.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:locale" content="en" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
