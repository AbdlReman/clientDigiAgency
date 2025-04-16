import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';


const GetBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      category: 'Development',
      date: 'March 15, 2024',
      status: 'Published'
    },
    {
      id: 2,
      title: 'CSS Best Practices',
      category: 'Design',
      date: 'March 14, 2024',
      status: 'Draft'
    },
    {
      id: 3,
      title: 'JavaScript Tips and Tricks',
      category: 'Development',
      date: 'March 13, 2024',
      status: 'Published'
    }
  ];

  return (
    <>
  
    <div className="get-blogs-page">
      <h1>All Blog Posts</h1>
      <div className="blogs-table-wrapper">
        <table className="blogs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.date}</td>
                <td>
                  <span className={`status ${blog.status.toLowerCase()}`}>
                    {blog.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="action-btn delete">
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
    </>
  );
};

export default GetBlogs;