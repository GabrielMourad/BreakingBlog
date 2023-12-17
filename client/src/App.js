// Import necessary dependencies and styles
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';
import { BlogContextProvider } from './context-api/BlogContext';
import CreatePost from './components/CreatePost';
import SinglePostPage from './components/SinglePostPage';

// Main App component
function App() {
    // State to manage the login status
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        // Wrap the entire application with the BlogContextProvider to provide user information context
        <BlogContextProvider>
            {/* Use BrowserRouter to enable routing in the application */}
            <BrowserRouter>
                {/* Define the routes using the Routes component */}
                <Routes>
                    {/* Default route for the home page */}
                    <Route
                        index
                        element={loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <HomePage />
                            </main>
                            : (<Navigate to="/login" />)
                        }
                    />

                    {/* Route for the login page */}
                    <Route
                        path="/login"
                        element={!loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <LoginPage setLoggedIn={setLoggedIn} />
                            </main>
                            : (<Navigate to="/" />)
                        }
                    />

                    {/* Route for handling logout (redirects to login) */}
                    <Route
                        path="/logout"
                        element={!loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <LoginPage setLoggedIn={setLoggedIn} />
                            </main>
                            : (<Navigate to="/" />)
                        }
                    />

                    {/* Route for the registration page */}
                    <Route
                        path="/register"
                        element={!loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <RegisterPage />
                            </main>
                            : (<Navigate to="/" />)
                        }
                    />

                    {/* Route for creating a new post */}
                    <Route path="/create" element={loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <CreatePost />
                            </main>
                            : (<Navigate to="/" />)
                        }
                    />

                    {/* Route for displaying a single post */}
                    <Route path="/post/:id" element={loggedIn ?
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <SinglePostPage />
                            </main>
                            : (<Navigate to="/" />)
                        }
                    />
                </Routes>
            </BrowserRouter>
        </BlogContextProvider>
    );
}

// Export the App component as the default export
export default App;
