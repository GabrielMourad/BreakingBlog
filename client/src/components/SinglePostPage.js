import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// SinglePostPage component displays the details of a single blog post
export default function SinglePostPage() {
  // Accessing the post ID from the URL parameters
  const { id } = useParams();

  // State to store the details of the single post
  const [post, setPost] = useState(null);

  // useEffect hook to fetch the details of the post when the component mounts
  useEffect(() => {
    // Fetch the post details from the server using the provided ID
    fetch('http://localhost:3000/post/' + id)
      .then((response) => {
        // Parse the response as JSON
        response.json().then((post) => {
          // Update the state with the details of the fetched post
          setPost(post);
        });
      })
      .catch((error) => {
        // Log an error if there's an issue with fetching the post details
        console.error('Error fetching post details:', error);
      });
  }, [id]);

  // If the post details are not yet available, return an empty string
  if (!post) return '';

  // Log the details of the post to the console for debugging
  console.log('inside ', post);

  // JSX for rendering the details of the single post
  return (
    <div className="single-post">
      {/* Display the post cover image */}
      <div className="post-image">
        <img src={"breaking-blog-server-gabriel-mourads-projects.vercel.app/" + post.cover} alt="" />
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
