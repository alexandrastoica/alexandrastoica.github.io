import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SidebarBody = styled('aside')`
  background: #fdf6f3;
  box-sizing: border-box;
  flex: 0 0 360px;
  padding: 88px 32px 88px 0;
  max-width: 360px;
`;

const DT = styled('dt')`
  border-top: 0.5px solid rgba(0, 0, 0, 0.06);
  font: 400 0.875rem/1.125rem Open Sans, sans-serif;
  letter-spacing: 1px;
  padding-top: 32px;
  text-transform: uppercase;
`;

const Button = styled('a')`
  font: 500 1rem/1.5rem Open Sans, sans-serif;
  align-items: center;
  background-color: #1d27ff;
  border-radius: 24px;
  box-shadow: 0 0.125rem 0 rgb(0 0 0 / 20%);
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  min-height: 3rem;
  padding: 0 2rem;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  width: fit-content;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Sidebar = ({ article }) => (
  <SidebarBody>
    <dl>
      <DT
        css={css`
          border: none;
        `}
      >
        Date
      </DT>
      <dd>{article.frontmatter.date}</dd>

      <DT>Context</DT>
      {article.frontmatter.context.map((cont, i) => (
        <dd key={i}>{cont} </dd>
      ))}

      <DT>Links</DT>
      {article.frontmatter.links.map((link, i) => (
        <dd key={i}>
          <Button href={link} target="_blank" rel="noreferrer">
            <span className="material-icons">open_in_new</span>Source
          </Button>
        </dd>
      ))}

      <DT>Languages</DT>
      {article.frontmatter.languages.map((lang, i) => (
        <dd key={i}>{lang}</dd>
      ))}
    </dl>
  </SidebarBody>
);

export default Sidebar;
