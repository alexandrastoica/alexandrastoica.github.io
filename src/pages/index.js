import React from 'react';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import useArticles from '../hooks/use-articles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ArticlesWrapper = styled('ul')`
  display: grid;
  gap: 64px 32px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CardWrapper = styled('li')`
  background-color: #fff;
  border-radius: 2px;
  padding: 32px;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: translateY(-10px);
  }
`;

export default function Home() {
  const articles = useArticles();

  return (
    <Layout>
      <div
        css={css`
          padding: 64px;
          background: #e8fafd;
        `}
      >
        <Header>
          <h1>Alexandra Stoica</h1>
          <p>
            UX/Frontend Enginner{' '}
            <a href="https://p.ota.to/" target="_blank" rel="noreferrer">
              @Potato London
            </a>
            . MSc Human-Computer Interaction (Distinction) at UCL, London, UK.
            BSc Web Development (1:1 Hons) at WorcUni, UK. Interested in all
            things frontend and human-computer interaction.{' '}
            <span role="img" aria-label="">
              🧠
            </span>
            <span role="img" aria-label="">
              👩🏻‍💻
            </span>
          </p>
        </Header>
        <main>
          <ArticlesWrapper>
            {articles.map((article) => (
              <CardWrapper key={article.order}>
                <ArticleCard article={article} />
              </CardWrapper>
            ))}
          </ArticlesWrapper>
        </main>
      </div>
    </Layout>
  );
}
