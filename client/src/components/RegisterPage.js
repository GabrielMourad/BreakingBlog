import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// RegisterPage component for user registration
export default function RegisterPage() {
  // State to manage username and password input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate()

  // Function to handle user registration
  const handleRegister = async (event) => {
    event.preventDefault();

    // Send a POST request to the server with the registration credentials
    const response = await fetch('breaking-blog-server.vercel.app/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Check the status code of the response to determine if registration was successful
    if (response.status !== 200) {
      // Display an alert if registration failed
      alert('Registration failed');
    } else {
      // Display a success alert if registration was successful
      alert('Registration Successful!');
      navigate("/")
    }
  };

  // JSX for the registration form
  return (
    <div>
      {/* Registration form */}
      <form className="registerForm" onSubmit={handleRegister}>
        <h1>Register</h1>
        {/* Input for username */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* Input for password */}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* Register button */}
        <div className="registerBtn">
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}
