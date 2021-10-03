import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, dimensions, spacing, type } from './theme';

const ArticleCardCorner = styled('span')`
  background: linear-gradient(
    to bottom left,
    ${colors.HOME_BG} 50%,
    ${colors.DARK} 0
  );
  height: ${dimensions.CORNER_HEIGHT};
  position: absolute;
  right: 0;
  top: 0;
  width: ${dimensions.CORNER_WIDTH};
  z-index: 1;
`;

const ArticleCardCTA = styled(Link)`
  align-self: flex-end;
  border-radius: ${spacing.XL};
  border: 2px solid ${colors.ACTION};
  box-sizing: border-box;
  height: 48px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 48px;

  span {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 1.5rem;
  }

  &:hover {
    background: ${colors.ACTION_HIGHLIGHT};
    border-color: ${colors.ACTION_HIGHLIGHT};

    span {
      margin-left: ${spacing.M};
    }
  }
`;

const ArticleCardLabel = styled('div')`
  font: 600 0.875rem/1.125rem ${type.BODY_FONT};
  letter-spacing: 1px;
  text-transform: uppercase;

  &::after {
    background: ${colors.ACTION_HIGHLIGHT};
    content: ' ';
    display: block;
    height: 2px;
    margin-top: ${spacing.XXS};
    width: 80px;
  }
`;

const ArticleCardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  text-align: left;

  p {
    font: 400 1rem/1.5rem ${type.BODY_FONT};
  }
`;

const ArticleCard = ({ article }) => (
  <>
    <ArticleCardCorner />
    <ArticleCardWrapper>
      <ArticleCardLabel>{article.label}</ArticleCardLabel>
      <h3>
        <Link to={`articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.preview}</p>
      <ArticleCardCTA
        to={`articles/${article.slug}`}
        aria-hidden="true"
        tabIndex="-1"
      >
        <span className="material-icons">arrow_forward</span>
      </ArticleCardCTA>
    </ArticleCardWrapper>
  </>
);

export default ArticleCard;
