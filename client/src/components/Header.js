import React, { useContext } from 'react';
import { BlogContext } from '../context-api/BlogContext';
import { Link } from 'react-router-dom';

// Header component displays the site logo and navigation links
// It receives 'loggedIn' and 'setLoggedIn' as props for user authentication state
export default function Header({ loggedIn, setLoggedIn }) {
  // Accessing user information and user info state setter from the BlogContext
  const { userInfo, setUserInfo } = useContext(BlogContext);

  // Function to handle user logout
  const handleLogOut = () => {
    // Update state to indicate user is not logged in
    setLoggedIn(false);
    // Clear user information from context
    setUserInfo(null);
    // Display logout success message
    alert('Successfully logged out');
  };

  // JSX for the header section
  return (
    <div>
      <header>
        {/* Link to the home page with the site logo */}
        <Link to="/" className="logo">
          BreakingBlog
        </Link>

        {/* Navigation section with conditional rendering based on login status */}
        <nav>
         
            <>
              <Link to="/create">Create</Link>
             
            </>
        
        </nav>
      </header>
    </div>
  );
}
