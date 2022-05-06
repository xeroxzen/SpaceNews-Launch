import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "../components/Blog";
import { Grid, Box } from "@mui/material";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      console.log(res);
      setBlogs(res.data);
    };
    getBlogs();
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12} md={8} xs={4}>
                <Blog
                  key={index}
                  title={blog.title}
                  summary={blog.summary}
                  newsSite={blog.newsSite}
                  url={blog.url}
                  imageUrl={blog.imageUrl}
                  publishedAt={blog.publishedAt}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
};

export default Blogs;
