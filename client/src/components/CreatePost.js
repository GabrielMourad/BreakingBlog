import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context-api/BlogContext';

// CreatePost component for creating a new blog post
export default function CreatePost() {
  // State variables to manage form input values
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');

  // Accessing user information from the BlogContext
  const { userInfo } = useContext(BlogContext);

  // React Router's navigation hook
  let navigate = useNavigate();

  // Function to check if the selected file is an image
  const isImage = (file) => {
    return file && file.type.startsWith('image/');
  };

  // Function to handle form submission
  const handlePosts = async (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (!title || !summary || !content || !file) {
      alert('All fields are required.');
      return;
    }

    // Check if the selected file is an image
    if (isImage(file)) {
      // Create a FormData object to send the data as a multipart form
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('file', file);
      data.set('content', content);
      data.set('user', userInfo.username);

      try {
        // Send a POST request to the server with the form data
        const response = await fetch('breaking-blog-server.vercel.app/post', {
          method: 'POST',
          body: data,
        });

        // If the response is OK, display a success message and navigate to the home page
        if (response.ok) {
          alert('Post Created!');
          navigate('/');
        }
      } catch (error) {
        // Log an error if there's an issue with sending data to the server
        console.error('Error sending data:', error);
      }
    } else {
      // Display an alert if the selected file is not an image
      alert('Please select a valid image file.');
    }
  };

  // JSX for the create post form
  return (
    <form className="create-form" onSubmit={handlePosts}>
      {/* Input field for the title */}
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      {/* Input field for the summary */}
      <label htmlFor="summary">Summary:</label>
      <input
        type="text"
        id="summary"
        placeholder="Summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        required
      />

      {/* Input field for selecting an image file */}
      <label htmlFor="file">Image:</label>
      <input
        type="file"
        id="file"
        onChange={(event) => setFile(event.target.files[0])}
        required
      />

      {/* Textarea for the content of the post */}
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        cols="76"
        rows="50"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        required
      ></textarea>

      {/* Submit button */}
      <button type="submit" className="createBtn">
        Create
      </button>
    </form>
  );
}
