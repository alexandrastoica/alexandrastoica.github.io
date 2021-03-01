import React from 'react';
import styled from '@emotion/styled';

const Button = styled('a')`
  align-items: center;
  background-color: #1d27ff;
  border-radius: 24px;
  box-shadow: 0 0.125rem 0 rgb(0 0 0 / 20%);
  color: #fff;
  cursor: pointer;
  display: flex;
  font: 500 1rem/1.5rem Open Sans, sans-serif;
  justify-content: center;
  letter-spacing: 1px;
  min-height: 3rem;
  padding: 0 2rem;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: fit-content;

  span {
    margin-right: 8px;
  }

  &:active,
  &:focus,
  &:hover {
    background: #0e17da;
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
