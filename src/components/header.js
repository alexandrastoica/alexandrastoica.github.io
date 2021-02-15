import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeaderBody = styled('div')`
  margin: 0 auto;
  max-width: 1280px;
  padding: 88px 0;
`;

const Header = ({ title, description }) => (
  <HeaderBody>
    <h1>{title}</h1>
    <p
      css={css`
        max-width: 760px;
      `}
    >
      {description}
    </p>
  </HeaderBody>
);

export default Header;
