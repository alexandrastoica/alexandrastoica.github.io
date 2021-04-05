import React from 'react';
import styled from '@emotion/styled';
import { dimensions, spacing, type } from './theme';

const FooterWrapper = styled('footer')`
  width: 100%;
  background-color: #001e49;
  color: white;
  font-weight: 400;
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
    font: 400 0.875rem/1.5rem ${type.BODY_FONT};
    margin: 0;
  }
`;

const FooterBody = styled('div')`
  margin: 0 auto;
  max-width: ${dimensions.MAX_BODY_WIDTH};
  padding: ${spacing.L};

  .footer-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      flex: 1;
      margin: 0;
    }
  }

  .footer-line {
    display: flex;
    justify-content: flex-end;
    margin-top: ${spacing.S};
  }
`;

const Footer = ({ children }) => (
  <FooterWrapper>
    <FooterBody>{children}</FooterBody>
  </FooterWrapper>
);

export default Footer;
