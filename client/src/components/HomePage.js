import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { BlogContext } from '../context-api/BlogContext';

// HomePage component displays a list of posts retrieved from the server
export default function HomePage() {
  // State to store the list of posts
  
  const {posts} = useContext(BlogContext)

  
  // Log the posts to the console for debugging
  console.log(posts);

  // JSX for rendering the list of posts
  return (
    <div className="post-group">
      {/* Map through the posts and render a Post component for each post */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
