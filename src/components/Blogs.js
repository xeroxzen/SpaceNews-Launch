import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "../components/Blog";

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
          <Blog
            key={index}
            title={blog.title}
            summary={blog.summary}
            newsSite={blog.newsSite}
            url={blog.url}
            imageUrl={blog.imageUrl}
          />
        ))}
    </div>
  );
};

export default Blogs;
