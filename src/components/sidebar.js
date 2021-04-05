import React from 'react';
import styled from '@emotion/styled';
import SidebarButton from './sidebar-button';
import { spacing, type } from './theme';

const SidebarBody = styled('aside')`
  background: #fdf6f3;
  box-sizing: border-box;
  flex: 0 0 360px;
  padding: ${spacing.L} ${spacing.M} ${spacing.L} 0;

  @media screen and (max-width: 1015px) {
    flex: 100%;
    padding: ${spacing.L};
  }

  @media screen and (max-width: 700px) {
    padding: ${spacing.M};
  }
`;

const List = styled(`dl`)`
  dt {
    border-top: 0.5px solid rgba(0, 0, 0, 0.06);
    font: 600 0.875rem/1.125rem ${type.BODY_FONT};
    letter-spacing: 1px;
    padding-top: ${spacing.M};
    text-transform: uppercase;

    &:first-of-type {
      border: none;
    }
  }

  dt + dt {
    margin-top: ${spacing.S};
  }

  dd {
    font: 400 1rem/1.5rem ${type.BODY_FONT};
    margin: ${spacing.S} 0;
  }
`;

const Tag = styled('dd')`
  border-radius: ${spacing.XXS};
  border: 1px solid;
  float: left;
  font: 400 0.725rem/1rem ${type.BODY_FONT} !important;
  margin: ${spacing.S} ${spacing.XXS} ${spacing.XXS} 0 !important;
  padding: 4px ${spacing.XXS};
`;

const FillIcon = styled('span')`
  background: #fff;
  border-radius: 100px;
  font-size: 28px;
  line-height: 1;
  margin-right: ${spacing.XXS};
  padding: ${spacing.XS};
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
