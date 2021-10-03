import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, type } from './theme';

const Button = styled('a')`
  align-items: center;
  background: ${colors.ACTION};
  border-radius: ${spacing.S};
  box-shadow: 0 0.125rem 0 rgb(0 0 0 / 20%);
  color: white;
  display: flex;
  font: 500 1rem/1.5rem ${type.BODY_FONT};
  justify-content: center;
  letter-spacing: 1px;
  min-height: 3rem;
  padding: 0 2rem;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: fit-content;

  span {
    margin-right: ${spacing.XXS};
  }

  &:active,
  &:focus,
  &:hover {
    background: #0e17da; // FOCUS BUTTON COLOR
    box-shadow: 0 0.2rem 0 rgb(0 0 0 / 20%);
    text-decoration: none;
  }

  &:active {
    box-shadow: none;
  }
`;

const SidebarButton = ({ link }) => {
  const domain = link
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0];
  let title = 'View ';

  switch (domain) {
    case 'github.com':
      title += 'on Github';
      break;
    case 'invis.io':
      title += 'on inVision';
      break;
    case 'drive.google.com':
      title += 'paper';
      break;
    default:
      title = 'Learn more';
      break;
  }

  return (
    <Button href={link} target="_blank" rel="noreferrer">
      <span className="material-icons">open_in_new</span>
      {title}
    </Button>
  );
};

export default SidebarButton;
