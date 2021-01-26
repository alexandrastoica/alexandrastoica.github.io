import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const ArticleCardCorner = styled('span')`
  background: linear-gradient(to bottom left, transparent 50%, #001e49 0);
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
`;

const ArticleCardCTA = styled(Link)`
  text-decoration: none;
  color: #1d27ff;
  align-self: flex-end;
  border-radius: 100%;
  border: 2px solid #1d27ff;
  box-sizing: border-box;
  height: 35px;
  line-height: 35px;
  margin-left: -10px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 35px;
`;

const ArticleCardWrapper = styled('div')`
  position: relative;
  text-align: left;
  background-color: #fff;
  padding: 32px;
  border-radius: 2px;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ArticleCard = ({ label, title, description, link }) => (
  <ArticleCardWrapper>
    <ArticleCardCorner />
    <div
      css={css`
        margin-bottom: 24px;
        &::after {
          content: ' ';
          width: 80px;
          height: 2px;
          margin-top: 8px;
          background: #ffdb13;
          display: block;
        }
      `}
    >
      {label}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <ArticleCardCTA to={link}>&rarr;</ArticleCardCTA>
  </ArticleCardWrapper>
);

export default ArticleCard;
