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
      setArticles(res.data);
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
            summary={article.summary}
            newsSite={article.newsSite}
            url={article.url}
            imageUrl={article.imageUrl}
          />
        ))}
    </div>
  );
};

export default Articles;
