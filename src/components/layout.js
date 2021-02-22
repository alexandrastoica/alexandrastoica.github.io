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
            margin: 0;
          }
          body,
          p,
          li {
            color: #253237;
            font: 400 1.125rem/2rem Open Sans, sans-serif;
          }
          h1,
          h2,
          h3,
          h4 {
            letter-spacing: -0.055rem;
          }

          h1 {
            font: 700 3.2rem/4rem Work Sans, sans-serif;
          }

          h2 {
            font: 500 2.5rem/3rem Work Sans, sans-serif;
          }

          h3 {
            font: 500 2rem/2.5rem Work Sans, sans-serif;
          }

          h4 {
            color: #42555d;
            font: 400 1.5rem/2rem Work Sans, sans-serif;
          }
          .material-icons {
            font-family: 'Material Icons';
            font-size: 24px;
          }
          a {
            color: #1d27ff;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            &:active,
            &:focus,
            &:hover {
              text-decoration: underline;
            }
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
      <>{children}</>
    </>
  );
};

export default Layout;
