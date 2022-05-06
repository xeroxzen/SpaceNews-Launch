import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log(res);
      setArticles(res.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles &&
        articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.summary}
            author={article.newsSite}
            url={article.url}
            urlToImage={article.imageUrl}
          />
        ))}
    </div>
  );
};

export default Articles;
