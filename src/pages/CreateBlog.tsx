// import React, { useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// const CreateBlog = () => {
//   const [title, setTitle] = useState('');
//   const [slug, setSlug] = useState('');
//   const [author, setAuthor] = useState('');
//   const [date, setDate] = useState('');
//   const [image, setImage] = useState('');
//   const [imagePreview, setImagePreview] = useState('');
//   const [content, setContent] = useState('');

//   const generateSlug = (text: string) => {
//     return text
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, '')
//       .replace(/\s+/g, '-');
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'ml_default'); // replace with your Cloudinary upload preset

//     try {
//       const res = await fetch('https://api.cloudinary.com/v1_1/dndfxkc7j/image/upload', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await res.json();
//       setImage(data.secure_url);
//       setImagePreview(data.secure_url);
//     } catch (error) {
//       console.error('Image upload failed:', error);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ title, slug, author, date, image, content });
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newTitle = e.target.value;
//     setTitle(newTitle);
//     setSlug(generateSlug(newTitle));
//   };

//   return (
//     <div className="create-blog-page">
//       <h1>Create New Blog Post</h1>
//       <form onSubmit={handleSubmit} className="blog-form">
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={handleTitleChange}
//             placeholder="Enter blog title"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="slug">Slug</label>
//           <input
//             type="text"
//             id="slug"
//             value={slug}
//             onChange={(e) => setSlug(e.target.value)}
//             placeholder="Slug will be generated automatically"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="author">Author</label>
//           <input
//             type="text"
//             id="author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             placeholder="Author name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             required
//           />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" className="image-preview" />
//           )}
//         </div>

//         <div className="form-group">
//           <label>Content</label>
//           <Editor
//             apiKey="t8605ohydr7kgogjvx0fnppdeub6clwsrzpx6ofdr0g5p7a7"
//             init={{
//               height: 400,
//               menubar: false,
//               plugins: [
//                 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//                 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//                 'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
//               ],
//               toolbar: 'undo redo | blocks | ' +
//                 'bold italic forecolor | alignleft aligncenter ' +
//                 'alignright alignjustify | bullist numlist outdent indent | ' +
//                 'removeformat | help',
//             }}
//             value={content}
//             onEditorChange={(content) => setContent(content)}
//           />
//         </div>

//         <button type="submit" className="submit-btn">Publish Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); // replace with your Cloudinary upload preset

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dndfxkc7j/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImage(data.secure_url);
      setImagePreview(data.secure_url);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Show the submitted data
    console.log({ title, slug, author, date, image, content });
  };
  

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  return (
    <div className="create-blog-page">
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Slug will be generated automatically"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="image-preview" />
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
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            }}
            value={content}
            onEditorChange={(content) => setContent(content)}
          />
        </div>

        <button type="submit" className="submit-btn">Publish Post</button>
      </form>
      {submitted && (
  <div className="submitted-data">
    <h2>Submitted Blog Preview</h2>
    <p><strong>Title:</strong> {title}</p>
    <p><strong>Slug:</strong> {slug}</p>
    <p><strong>Author:</strong> {author}</p>
    <p><strong>Date:</strong> {date}</p>
    {image && <img src={image} alt="Uploaded" style={{ maxWidth: '200px', marginBottom: '1rem' }} />}
    <div>
      <strong>Content:</strong>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
)}

    </div>
    
  );
};

export default CreateBlog;
