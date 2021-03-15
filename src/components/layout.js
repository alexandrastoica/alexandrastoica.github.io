import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Footer from './footer';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            color: #253237;
            margin: 0;
          }

          body {
            font: 400 1.125rem/2rem Open Sans, sans-serif;
          }

          li {
            margin: 0;
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
            font: 400 1.5rem/2rem Work Sans, sans-serif;
          }

          .material-icons {
            font-family: Material Icons, sans-serif;
            font-size: 16px;
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
      <Footer>
        <section className="footer-info">
          <div>
            <h4>About</h4>
            <p>Alexandra Stoica is a London-based Frontend/UX Engineer.</p>
          </div>
          <div>
            <h4>Enquiries</h4>
            <p>ralexandrastoica@gmail.com</p>
          </div>
          <div>
            <h4>Find me on...</h4>
            <ul>
              <li>Linkedin</li>
              <li>Github</li>
              <li>Twitter</li>
            </ul>
          </div>
        </section>
        <section className="footer-line">
          <p>© 2021 Alexandra Stoica</p>
        </section>
      </Footer>
    </>
  );
};

export default Layout;
