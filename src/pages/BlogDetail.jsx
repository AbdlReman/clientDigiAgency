// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const BlogDetail = ({ posts }) => {
//   const { id } = useParams();
//   const post = posts.find((p) => p.id === Number(id));

//   if (!post) {
//     return (
//       <div className="container section">
//         <h2>Post not found</h2>
//         <Link to="/" className="btn">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <article className="blog-detail">
//       <div
//         className="blog-hero"
//         style={{ backgroundImage: `url(${post.image})` }}
//       >
//         <div className="container">
//           <h1>{post.title}</h1>
//           <div className="blog-meta">
//             <span>{post.date}</span>
//             <span>By {post.author}</span>
//           </div>
//         </div>
//       </div>
//       <div className="container section">
//         <div className="blog-content-full">
//           <p>{post.excerpt}</p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <p>
//             Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.
//           </p>
//           <div className="blog-navigation">
//             <Link to="/" className="btn">
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogDetail;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useBlog } from "../components/context/BlogContext";

const BlogDetail = () => {
  const API = import.meta.env.VITE_BACKEND_URL;
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { blogs } = useBlog();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/api/blogs/${slug}`);

        if (!response.data) {
          throw new Error("Post not found");
        }

        setPost(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    // Check if post exists in context first
    const existingPost = blogs.find((blog) => blog.slug === slug);

    if (existingPost) {
      setPost(existingPost);
      setLoading(false);
      setError(null);
    } else {
      fetchPost();
    }
  }, [slug, blogs]);

  if (loading) {
    return <div className="container">Loading post...</div>;
  }

  if (error) {
    return (
      <div className="container section">
        <h2>Error: {error}</h2>
        <Link to="/blog" className="btn">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container section">
        <h2>Post not found</h2>
        <Link to="/blog" className="btn">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="blog-detail">
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="container">
          <h1>{post.title}</h1>
          <div className="blog-meta">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>
      <div className="container section">
        <div
          className="blog-content-full"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="blog-navigation">
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
