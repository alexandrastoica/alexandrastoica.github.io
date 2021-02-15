import React from 'react';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import useArticles from '../hooks/use-articles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CardWrapper = styled('li')`
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

export default function Home() {
  const articles = useArticles();

  return (
    <Layout>
      <Header
        title="Alexandra Stoica"
        description="UX/Frontend Enginner @Potato London. MSc Human-Computer Interaction (Distinction) at UCL, London, UK. BSc Web Development (1:1 Hons) at WorcUni, UK. Interested in all things frontend and human-computer interaction. 🧠👩🏻‍💻"
      ></Header>

      <ul
        css={css`
          display: grid;
          gap: 64px 32px;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          padding: 0;
          margin: 0;
        `}
      >
        {articles.map((article, i) => (
          <CardWrapper key={i}>
            <ArticleCard article={article} />
          </CardWrapper>
        ))}
      </ul>
    </Layout>
  );
}
