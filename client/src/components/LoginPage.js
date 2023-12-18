import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context-api/BlogContext';

// LoginPage component for handling user login
export default function LoginPage({ setLoggedIn }) {
  // State to manage username and password input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Context to access and update user information
  const { setUserInfo } = useContext(BlogContext);

  // Hook for navigation in React Router
  let navigate = useNavigate();

  // Function to handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    // Send a POST request to the server for user login
    const response = await fetch('https://breaking-blog-server.vercel.app/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      credentials: 'include',  // Include credentials (cookies) with the request
       mode: 'cors',  // Enable cross-origin resource sharing
    });

    // Parse the response as JSON
    const user = await response.json();

    // Check if the login was successful
    if (user === null) {
      // Display an alert for failed login
      alert('Login Failed');
    } else {
      // Display an alert for successful login
      alert('Login Successful!');

      // Set the logged-in state and user information
      setLoggedIn(true);
      setUserInfo(user);

      // Navigate to the home page
      navigate('/');
    }
  };

  return (
    <div>
      {/* Login form */}
      <form className="loginForm" onSubmit={handleLogin}>
        <h1>Login</h1>

        {/* Input field for username */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        {/* Input field for password */}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {/* Login button */}
        <div className="loginBtn">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
