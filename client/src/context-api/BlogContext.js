// Import necessary dependencies from React
import { createContext, useState } from "react";

// Create a context for managing and sharing user information
export const BlogContext = createContext();

// BlogContextProvider component provides the context value to its children
export function BlogContextProvider(props) {
    // State to manage user information
    const [userInfo, setUserInfo] = useState({});

    return (
        // Provide the context value to the children components
        <BlogContext.Provider value={{ userInfo, setUserInfo }}>
            {/* Render the children components */}
            {props.children}
        </BlogContext.Provider>
    );
}
