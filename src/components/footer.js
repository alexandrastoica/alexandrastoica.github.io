import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled('footer')`
  width: 100%;
  background-color: #001e49;
  color: white;
  font-weight: 400;
  padding: 64px 0;
  width: 100%;
  margin: 0;

  ul {
    list-style: none;
    padding: 0;
  }

  h4 {
    color: #e8f9fc;
  }

  p,
  li {
    color: #e8f9fc;
    font: 400 0.875rem/1.5rem Open Sans, sans-serif;
    margin: 0;
  }
`;

const FooterBody = styled('div')`
  margin: 0 auto;
  max-width: 1280px;

  .footer-info {
    display: flex;
    justify-content: space-between;

    div {
      flex: 1 1 auto;
      margin: 0;
    }
  }

  .footer-line {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
`;

const Footer = ({ children }) => (
  <FooterWrapper>
    <FooterBody>{children}</FooterBody>
  </FooterWrapper>
);

export default Footer;
