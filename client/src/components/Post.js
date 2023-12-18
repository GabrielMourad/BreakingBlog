import React from 'react';
import { Link } from 'react-router-dom';

// Post component displays information about a single blog post
export default function Post({ post }) {
  
  // JSX for rendering the post details
  return (
    <div className="post">
      {/* Link to the detailed view of the post */}
      <div className="image">
        <Link to={"/post/" + post.id}>
          {/* Display the post cover image */}
          <img src="BreakingBlog.jpg" alt={post.title} />
        </Link>
      </div>

      <div className="content">
        {/* Link to the detailed view of the post */}
        <Link to={"/post/" + post.id}>
          {/* Display the post title */}
          <h2>{post.title}</h2>
        </Link>

        {/* Information about the post, including author and creation date */}
        <p className="info">
          <span href="" className="author">{post.user}</span>
        </p>

        {/* Display a summary of the post */}
        <p className='summary'>{post.summary}</p>
      </div>
    </div>
  );
}
