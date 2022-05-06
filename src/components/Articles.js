import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
import { Box, Grid } from "@mui/material";

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
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Grid spacing={2}>
              <Grid item sm={12} md={8} xs={4}>
                <Article
                  key={index}
                  title={article.title}
                  summary={article.summary}
                  newsSite={article.newsSite}
                  url={article.url}
                  imageUrl={article.imageUrl}
                  publishedAt={article.publishedAt}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
};

export default Articles;
