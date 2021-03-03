import React from 'react';
import styled from '@emotion/styled';
import SidebarButton from './sidebar-button';

const SidebarBody = styled('aside')`
  background: #fdf6f3;
  box-sizing: border-box;
  flex: 0 0 360px;
  max-width: 360px;
  padding: 88px 32px 88px 0;
`;

const List = styled(`dl`)`
  dt {
    border-top: 0.5px solid rgba(0, 0, 0, 0.06);
    font: 600 0.875rem/1.125rem Open Sans, sans-serif;
    letter-spacing: 1px;
    letter-spacing: 1px;
    padding-top: 32px;
    text-transform: uppercase;

    &:first-child {
      border: none;
    }
  }

  dd {
    font: 400 1rem/1.5rem Open Sans, sans-serif;
  }
`;

const Tag = styled('dd')`
  border-radius: 8px;
  border: 1px solid;
  float: left;
  font: 400 0.725rem/1rem Open Sans, sans-serif !important;
  margin-right: 8px;
  padding: 4px 8px;
  width: fit-content;
`;

const FillIcon = styled('span')`
  background: #fff;
  border-radius: 100px;
  font-size: 28px;
  line-height: 1;
  margin-right: 8px;
  padding: 10px;
  vertical-align: middle;
`;

class Sidebar extends React.Component {
  render() {
    const article = this.props.article;
    const label = article.frontmatter.label;
    const date = article.frontmatter.date;
    const context = article.frontmatter.context;
    const links = article.frontmatter.links;
    const keywords = article.frontmatter.keywords;

    return (
      <SidebarBody>
        <List>
          <dt>
            <FillIcon className="material-icons">menu_book</FillIcon>
            {label}
          </dt>

          <dt>Date</dt>
          <dd>{date}</dd>

          <dt>Context</dt>
          {context.map((cont, i) => (
            <dd key={i}>{cont}</dd>
          ))}

          <dt>Links</dt>
          {links.map((link, i) => (
            <dd key={i}>
              <SidebarButton link={link}></SidebarButton>
            </dd>
          ))}

          <dt>Keywords</dt>
          {keywords.map((lang, i) => (
            <Tag key={i}>{lang}</Tag>
          ))}
        </List>
      </SidebarBody>
    );
  }
}

export default Sidebar;
