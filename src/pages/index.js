import React from 'react';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import useArticles from '../hooks/use-articles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Social } from '../components/social';
import { breakpoints, colors, dimensions, spacing } from '../components/theme';

const ArticlesWrapper = styled('ul')`
  display: grid;
  gap: ${spacing.L} ${spacing.M};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${dimensions.MAX_CARD_WIDTH}, 1fr)
  );
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${breakpoints.MOBILE}) {
    gap: ${spacing.M} ${spacing.S};
  }
`;

const CardWrapper = styled('li')`
  background: white;
  border-radius: 4px;
  padding: ${spacing.M};
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: translateY(-10px);
  }
`;

const FlexLayout = styled('div')`
  display: flex;
  align-items: center;

  ul {
    max-width: ${dimensions.MAX_TEXT_WIDTH};
  }

  .image {
    margin-left: ${spacing.L};

    @media screen and (max-width: ${breakpoints.TABLET}) {
      display: none;
    }
  }

  img {
    max-width: 100%;
  }
`;

export default function Home() {
  const articles = useArticles();

  return (
    <Layout>
      <div
        css={css`
          background: ${colors.HOME_BG};
          margin: 0 auto;
          max-width: ${dimensions.MAX_BODY_WIDTH};
          padding: ${spacing.L};

          @media screen and (max-width: ${breakpoints.TABLET}) {
            padding: ${spacing.M};
          }

          @media screen and (max-width: 375px) {
            padding: ${spacing.M} ${spacing.XS};
          }
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
          <Social />
        </Header>
        <main>
          <section>
            <h2>Work</h2>
            <ArticlesWrapper>
              {articles.map((article) => (
                <CardWrapper key={article.order}>
                  <ArticleCard article={article} />
                </CardWrapper>
              ))}
            </ArticlesWrapper>
          </section>
          <section
            css={css`
              padding: ${spacing.XL} 0;

              @media screen and (max-width: ${breakpoints.TABLET}) {
                padding: ${spacing.L} 0;
              }
            `}
          >
            <h2>Leadership and awards</h2>
            <FlexLayout>
              <ul>
                <li>
                  2020: Leader of the Accessibility Guild at Potato, an
                  initiative created to promote and increase awareness for
                  inclusive and accessible products
                </li>
                <li>
                  2019: MSc Thesis{' '}
                  <i>
                    “‘Keep Going!’: Understanding the Implications of Coaching
                    through Fitness Apps to Support Physical Training”
                  </i>{' '}
                  awarded as{' '}
                  <a
                    href="https://uclic.ucl.ac.uk/content/2-study/4-current-taught-course/1-distinction-projects/12-18/stoica_ralucaalexandra_2018.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Distinction Project on UCL Interaction Centre
                  </a>
                </li>
                <li>
                  2018: Won a sponsor challenge at HackCambridge 2018 for{' '}
                  <a
                    href="https://github.com/lexvanderstoep/MedicalBlockchain"
                    rel="noreferrer"
                    target="_blank"
                  >
                    best use of blockchain technology
                  </a>
                </li>
                <li>
                  2017: Best Computing Student 2017 awarded by the British
                  Computer Society for achieving the highest overall grade in my
                  year and University department
                </li>
                <li>
                  2015 and 2016: Two Academic Scholarship Awards for being in
                  top 100 students with highest achievement in Year 1 and Year 2
                  of undergraduate studies
                </li>
              </ul>
              <div className="image">
                <img src="awards.svg" alt=""></img>
              </div>
            </FlexLayout>
          </section>
        </main>
      </div>
    </Layout>
  );
}
