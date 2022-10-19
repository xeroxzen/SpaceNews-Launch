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
      <Banner>
        <BannerHeader>Blog</BannerHeader>
        <BannerParagraph>Blogs often provide a more detailed overview of launches and missions. A must-have for the serious spaceflight enthusiast</BannerParagraph>
      </Banner>
      <BlogContainer>
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
      </BlogContainer>
     
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
const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

`

export default Blogs;
