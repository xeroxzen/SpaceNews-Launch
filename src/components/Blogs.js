import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "../components/Blog";
import styled from "styled-components";

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
    <Container>
      {blogs &&
        blogs.map((blog, index) => (
          <div>
            <Blog
                  key={index}
                  title={blog.title}
                  summary={blog.summary}
                  newsSite={blog.newsSite}
                  url={blog.url}
                  imageUrl={blog.imageUrl}
                  publishedAt={blog.publishedAt}
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

export default Blogs;
