import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { spacing, type } from './theme';

const BreadcrumbWrapper = styled('nav')`
  background: #fdf6f3;
  padding: ${spacing.M} 0 ${spacing.XS};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const BreadcrumbBody = styled('ul')`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0 ${spacing.XL};
  padding: 0;

  li {
    font: 400 0.8125rem/2rem ${type.BODY_FONT};
    letter-spacing: 1px;
    margin-top: 0;
    text-transform: uppercase;
    align-items: center;

    & > * {
      vertical-align: middle;
    }

    &:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .material-icons {
    margin: 0 ${spacing.S};
  }

  @media screen and (max-width: 700px) {
    margin: 0 ${spacing.M};
  }
`;

const HomeLink = styled(Link)`
  font: 600 1.5rem/2rem ${type.BODY_FONT};
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
      </li>
      <li>
        {' '}
        <span className="material-icons md-18" role="img">
          chevron_right
        </span>
        {title}
      </li>
    </BreadcrumbBody>
  </BreadcrumbWrapper>
);

export default Breadcrumb;
