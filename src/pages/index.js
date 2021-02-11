import React from 'react';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';
import Header from '../components/header';
import useArticles from '../hooks/use-articles';

export default function Home() {
  const articles = useArticles();

  return (
    <Layout>
      <Header
        title="Alexandra Stoica"
        description="UX/Frontend Enginner @Potato London. MSc Human-Computer Interaction (Distinction) at UCL, London, UK. BSc Web Development (1:1 Hons) at WorcUni, UK. Interested in all things frontend and human-computer interaction. 🧠👩🏻‍💻"
      ></Header>

      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </Layout>
  );
}
