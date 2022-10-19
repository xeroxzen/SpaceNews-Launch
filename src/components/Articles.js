import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
import styled from "styled-components";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log(res);
      setArticles(res.data);
    };
    getArticles();
  }, []);

  return (
    <Container>
      <Banner>
        <BannerHeader>News</BannerHeader>
        <BannerParagraph>Get an overview of the latest Spaceflight news, from various sources! Easily link your users to the right websites</BannerParagraph>
      </Banner>
        <ArticleContainer>
          {articles &&
            articles.map((article, index) => (
              <div>
                <Article
                      key={index}
                      title={article.title}
                      summary={article.summary}
                      newsSite={article.newsSite}
                      url={article.url}
                      imageUrl={article.imageUrl}
                      publishedAt={article.publishedAt}
                    />
              </div>             
          ))}
      </ArticleContainer>
    </Container>

  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 7rem;
  background-color: blue;
`
const BannerHeader = styled.h1`
  font-size: 3rem;
  font-family: 'Play', sans-serif;
  letter-spacing: .5rem;
  margin-bottom: 1rem;

`
const BannerParagraph = styled.p`
  font-size: 1.5rem;
  font-family: 'Play', sans-serif;
  margin-bottom: 1rem;

`
const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

`

export default Articles;
