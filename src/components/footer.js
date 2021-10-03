import React from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints, dimensions, spacing, type } from './theme';

const FooterWrapper = styled('footer')`
  width: 100%;
  background-color: ${colors.DARK};
  color: white;
  font-weight: 400;
  width: 100%;
  margin: 0;

  a {
    color: ${colors.HOME_BG};

    &:hover {
      color: ${colors.ACTION_HIGHLIGHT};
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h4 {
    color: ${colors.HOME_BG};
    margin-bottom: ${spacing.S};

    &::after {
      background: #ffdb13;
      content: ' ';
      display: block;
      height: 2px;
      margin-top: ${spacing.XXS};
      width: 40px;
    }
  }

  p,
  li {
    color: ${colors.HOME_BG};
    font: 400 0.875rem/1.5rem ${type.BODY_FONT};
    margin: 0;
  }
`;

const FooterBody = styled('div')`
  margin: 0 auto;
  max-width: ${dimensions.MAX_BODY_WIDTH};
  padding: ${spacing.M} ${spacing.L};

  @media screen and (max-width: ${breakpoints.MOBILE}) {
    padding: ${spacing.M};
  }

  .footer-info {
    display: grid;
    gap: ${spacing.L} ${spacing.M};
    grid-template-columns: repeat(
      auto-fit,
      minmax(${dimensions.MAX_CARD_WIDTH}, 1fr)
    );

    @media screen and (max-width: ${breakpoints.TABLET}) {
      gap: ${spacing.M} ${spacing.S};
    }
  }

  .footer-line {
    display: flex;
    justify-content: flex-end;
    margin-top: ${spacing.XS};
  }
`;

const Footer = ({ children }) => (
  <FooterWrapper>
    <FooterBody>{children}</FooterBody>
  </FooterWrapper>
);

export default Footer;
