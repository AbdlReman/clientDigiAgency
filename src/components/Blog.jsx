import React from "react";
import blogData from "../data/blog.json";
import { Link } from "react-router-dom";
const posts = blogData.posts;
const Blog = () => {
  return (
    <>
      <section id="blog" className="section">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <div className="blog-grid">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <p className="blog-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <p>By {post.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
