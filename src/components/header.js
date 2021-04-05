import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, dimensions, spacing } from './theme';

const HeaderBody = styled('header')`
  max-width: ${dimensions.MAX_TEXT_WIDTH};
  padding: ${spacing.XL} 0;
  width: 100%;

  h1 {
    margin: 0;
  }

  @media screen and (max-width: ${breakpoints.TABLET}) {
    padding: ${spacing.L} 0;
  }

  @media screen and (max-width: ${breakpoints.MOBILE}) {
    padding: ${spacing.M} 0;
  }
`;

const Header = ({ children }) => <HeaderBody>{children}</HeaderBody>;

export default Header;
