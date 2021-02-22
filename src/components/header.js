import React from 'react';
import styled from '@emotion/styled';

const HeaderBody = styled('header')`
  margin: 0 auto;
  max-width: 1280px;
  padding: 88px 0;

  p {
    max-width: 760px;
  }
`;

const Header = ({ children }) => <HeaderBody>{children}</HeaderBody>;

export default Header;
