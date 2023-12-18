// Import necessary dependencies from React
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


// Create a context for managing and sharing user information
export const BlogContext = createContext();

// BlogContextProvider component provides the context value to its children
export function BlogContextProvider(props) {
    // State to manage user information
    const [posts, setPosts] = useState([
        {id: uuidv4(), title: "My beautiful day", user: "Timoth5y", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", summary : "Tis is the time to love"},
        {id: uuidv4(), title: "Jobs are fluorished", user: "Jesse4", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", summary : "Tis is the time to love"},
        {id: uuidv4(), title: "Join me", user: "Ly2dia", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", summary : "Tis is the time to love"},
        {id: uuidv4(), title: "Loving the earth", user: "Walth21", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", summary : "Tis is the time to love"},
        {id: uuidv4(), title: "Jobs are fluorished", user: "Dr1ew", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",summary : "Tis is the time to love"}
      ]);

    return (
        // Provide the context value to the children components
        <BlogContext.Provider value={{ posts, setPosts }}>
            {/* Render the children components */}
            {props.children}
        </BlogContext.Provider>
    );
}
