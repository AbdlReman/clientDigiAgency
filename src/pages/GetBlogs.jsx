import React from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import { useBlog } from "../components/context/BlogContext";

const GetBlogs = () => {
  const { blogs, loading, error, deleteBlog } = useBlog();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(slug, user?.token);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  if (loading) return <div className="container">Loading blogs...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="get-blogs-page">
      <h1>All Blog Posts</h1>
      <div className="blogs-table-wrapper">
        <table className="blogs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{new Date(blog.date).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <Link
                      to={`/dashboard/edit-blog/${blog.slug}`}
                      className="action-btn edit"
                    >
                      <Edit2 size={16} />
                    </Link>
                    <button
                      className="action-btn delete"
                      onClick={() => handleDelete(blog.slug)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetBlogs;
