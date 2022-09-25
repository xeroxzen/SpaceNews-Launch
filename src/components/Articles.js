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
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`

export default Articles;
