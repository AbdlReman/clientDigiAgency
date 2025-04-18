import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import slugify from "slugify";
import { useBlog } from "../components/context/BlogContext";

const EditBlog = () => {
  const API = import.meta.env.VITE_BACKEND_URL;
  const { slug } = useParams();
  const navigate = useNavigate();
  const { blogs, updateBlog } = useBlog();
  const [blogData, setBlogData] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const existingBlog = blogs.find((b) => b.slug === slug);
        if (existingBlog) {
          setBlogData({
            ...existingBlog,
            date: existingBlog.date.split("T")[0], // Format date for input
          });
          setImagePreview(existingBlog.image);
        } else {
          const response = await axios.get(`${API}/api/blogs/${slug}`);
          setBlogData({
            ...response.data,
            date: response.data.date.split("T")[0],
          });
          setImagePreview(response.data.image);
        }
      } catch (error) {
        setError("Failed to load blog post");
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug, blogs]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogApp");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dndfxkc7j/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setBlogData((prev) => ({ ...prev, image: data.secure_url }));
      setImagePreview(data.secure_url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await updateBlog(slug, blogData, user?.token);
      navigate("/dashboard/home");
      alert("Blog updated successfully!");
    } catch (error) {
      alert(error.message || "Failed to update blog");
    }
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="edit-blog-page">
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={blogData.title || ""}
            onChange={(e) => {
              const newTitle = e.target.value;
              setBlogData((prev) => ({
                ...prev,
                title: newTitle,
                slug: slugify(newTitle, { lower: true, strict: true }),
              }));
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            id="slug"
            value={blogData.slug || ""}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, slug: e.target.value }))
            }
            placeholder="Custom slug"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={new Date(blogData.date).toISOString().split("T")[0] || ""}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, date: e.target.value }))
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="image-preview"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            />
          )}
        </div>

        <div className="form-group">
          <label>Content</label>
          <Editor
            apiKey="t8605ohydr7kgogjvx0fnppdeub6clwsrzpx6ofdr0g5p7a7"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
            }}
            value={blogData.content || ""}
            onEditorChange={(content) =>
              setBlogData((prev) => ({ ...prev, content }))
            }
          />
        </div>

        <button type="submit" className="submit-btn">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
