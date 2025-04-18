// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch all blogs
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get("${API}/api/blogs");
//       setBlogs(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.response?.data?.error || "Failed to fetch blogs");
//       setLoading(false);
//     }
//   };

// // Create new blog
// const createBlog = async (blogData, token) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.post(
//       "${API}/api/blogs/create",
//       blogData,
//       config
//     );

//     setBlogs([response.data.blog, ...blogs]);
//     return response.data;
//   } catch (err) {
//     setError(err.response?.data?.error || "Something went wrong");
//     throw err;
//   }
// };

//   // Fetch blogs on initial load
//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <BlogContext.Provider
//       value={{
//         blogs,
//         loading,
//         error,
//         createBlog,
//         fetchBlogs,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export const useBlog = () => useContext(BlogContext);

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = createContext();
const API = import.meta.env.VITE_BACKEND_URL;

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/blogs`);
      setBlogs(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  // Create new blog
  const createBlog = async (blogData, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${API}/api/blogs/create`,
        blogData,
        config
      );

      setBlogs([response.data.blog, ...blogs]);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      throw err;
    }
  };
  // Delete blog
  const deleteBlog = async (slug, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`${API}/api/blogs/${slug}`, config);
      setBlogs(blogs.filter((blog) => blog.slug !== slug));
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete blog");
      throw err;
    }
  };

  // Update blog
  const updateBlog = async (slug, blogData, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `${API}/api/blogs/${slug}`,
        blogData,
        config
      );

      setBlogs(
        blogs.map((blog) => (blog.slug === slug ? response.data : blog))
      );
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update blog");
      throw err;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        error,
        fetchBlogs,
        deleteBlog,
        updateBlog,
        createBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
