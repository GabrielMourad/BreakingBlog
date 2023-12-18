import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context-api/BlogContext';

// CreatePost component for creating a new blog post
export default function CreatePost() {
  // State variables to manage form input values
  const [user, setUser] = useState("")
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');


  // React Router's navigation hook
  let navigate = useNavigate();

  // Function to handle form submission
  const handlePosts = async (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (!title || !summary || !content || !user) {
      alert('All fields are required.');
      return;
    }

    const data = {
      title,
      summary,
      content,
      user
    };

    try {
      const response = await fetch('https://breaking-blog-server.vercel.app/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Post Created!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  // JSX for the create post form
  return (
    <form className="create-form" onSubmit={handlePosts}>

      {/* Input field for the user */}
      <label htmlFor="title">Username:</label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        required
      />

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
