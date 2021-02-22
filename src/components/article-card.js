import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ArticleCardCorner = styled('span')`
  background: linear-gradient(to bottom left, #e8fafd 50%, #001e49 0);
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  z-index: 1;
`;

const ArticleCardCTA = styled(Link)`
  align-self: flex-end;
  border-radius: 100%;
  border: 2px solid #1d27ff;
  box-sizing: border-box;
  color: #1d27ff;
  height: 35px;
  line-height: 35px;
  margin-left: -10px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 35px;

  .material-icons {
    line-height: 32px;
    font-size: inherit;
  }
`;

const ArticleCardLabel = styled('div')`
  font: 600 0.875rem/1.125rem Open sans, sans-serif;
  letter-spacing: 1px;
  margin-bottom: 24px;
  text-transform: uppercase;
  &::after {
    background: #ffdb13;
    content: ' ';
    display: block;
    height: 2px;
    margin-top: 8px;
    width: 80px;
  }
`;

const ArticleCardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  text-align: left;
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
      <ArticleCardCTA to={`articles/${article.slug}`}>
        <span className="material-icons">arrow_forward</span>
      </ArticleCardCTA>
    </ArticleCardWrapper>
  </>
);

export default ArticleCard;
