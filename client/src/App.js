// Import necessary dependencies and styles
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
                        element={
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <HomePage />
                            </main>
                          
                        }
                    />

                   

                    

                    {/* Route for the registration page */}
                    <Route
                        path="/register"
                        element={
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <RegisterPage />
                            </main>
                           
                        }
                    />

                    {/* Route for creating a new post */}
                    <Route path="/create" element={
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <CreatePost />
                            </main>
                         
                        }
                    />

                    {/* Route for displaying a single post */}
                    <Route path="/post/:id" element={
                            <main>
                                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                                <SinglePostPage />
                            </main>
                           
                        }
                    />
                </Routes>
            </BrowserRouter>
        </BlogContextProvider>
    );
}

// Export the App component as the default export
export default App;
