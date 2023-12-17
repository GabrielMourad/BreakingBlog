import React, { useEffect, useState } from 'react';
import Post from './Post';

// HomePage component displays a list of posts retrieved from the server
export default function HomePage() {
  // State to store the list of posts
  const [posts, setPosts] = useState([]);

  // useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    // Fetch posts from the server
    fetch('https://breaking-blog-server.vercel.app/post')
      .then((response) => {
        // Parse the response as JSON
        response.json().then((posts) => {
          // Update the state with the fetched posts
          setPosts(posts);
        });
      })
      .catch((error) => {
        // Log an error if there's an issue with fetching posts
        console.error('Error fetching posts:', error);
      });
  }, []);

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
