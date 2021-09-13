import React, { useState } from "react";
import "./Blog.scss";
import Card from "../components/Card";
import BlogData from "../handlers/BlogData";

function Blog() {
  const [blogs, setBlogs] = useState(BlogData);

  return (
    <section className="blog">
      {blogs.slice(0, 4).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
}

export default Blog;
