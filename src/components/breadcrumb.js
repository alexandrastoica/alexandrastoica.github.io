import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const BreadcrumbWrapper = styled('nav')`
  background: #fdf6f3;
  position: sticky;
  z-index: 1;
  width: 100%;
  top: 0;
`;

const BreadcrumbBody = styled('ul')`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0 88px;
  padding: 32px 0 16px;

  li {
    font: 500 11px/11px Open Sans, sans-serif;
    letter-spacing: 1px;
    line-height: 2rem;
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .material-icons {
    margin: 0 24px;
  }
`;

const HomeLink = styled(Link)`
  color: #1d27ff;
  font: 600 1.5rem/1.6875rem Open Sans, sans-serif;
  letter-spacing: 0;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  white-space: nowrap;

  &:active,
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = ({ title }) => (
  <BreadcrumbWrapper>
    <BreadcrumbBody>
      <li>
        <HomeLink to="/">Alexandra Stoica</HomeLink>
        <span className="material-icons md-18">chevron_right</span>
      </li>
      <li>{title}</li>
    </BreadcrumbBody>
  </BreadcrumbWrapper>
);

export default Breadcrumb;
