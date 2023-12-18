import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context-api/BlogContext';

// SinglePostPage component displays the details of a single blog post
export default function SinglePostPage() {
  // Accessing the post ID from the URL parameters
  const { id } = useParams();

  // Accessing the posts from the context
  const { posts } =  useContext(BlogContext);
  const post = posts.find((p) => p.id === id);
  console.log(post)

  // JSX for rendering the details of the single post
  return (
    <div className="single-post">
      {/* Display the post cover image */}
      <div className="post-image">
        <img src= "/BreakingBlog.jpg" alt="" />
      </div>

      {/* Display the post title */}
      <h1>{post.title}</h1>

      <div className="post-text">
        {/* Display the content of the post */}
        <p>{post.content}</p>
      </div>
    </div>
  );
}
