import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const BreadcrumbBody = styled('nav')`
  background: #fdf6f3;
  position: sticky;
  z-index: 1;
  width: 100%;
  top: 0;
`;

const HomeLink = styled(Link)`
  font: 500 1.5rem/1.6875rem Open Sans, sans-serif;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #1d27ff;
  white-space: nowrap;

  &:active,
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ title }) => (
  <BreadcrumbBody>
    <ul
      css={css`
        align-items: center;
        display: flex;
        list-style: none;
        margin: 0 88px;
        padding: 32px 0 16px;
      `}
    >
      <li
        css={css`
          white-space: nowrap;
        `}
      >
        <HomeLink to="/">Alexandra Stoica</HomeLink>
        <span
          css={css`
            margin: 0 20px;
          `}
          className="material-icons md-18"
        >
          chevron_right
        </span>
      </li>
      <li
        css={css`
          font: 500 11px/11px Open Sans, sans-serif;
          margin-top: 0;
          line-height: 2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          letter-spacing: 1px;
          text-transform: uppercase;
        `}
      >
        {title}
      </li>
    </ul>
  </BreadcrumbBody>
);

export default Breadcrumb;
