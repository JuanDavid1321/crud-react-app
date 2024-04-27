import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Create an authentication context
const AuthContext = createContext();

// Create a component that provides the authentication context to its children
export const AuthContextProvider = ({ children }) => {
    // State variables for user information
    const [user, setUser] = useState({});

    // Create a function to sign in with Google
    const googleSignIn = async () => {
        // Create a Google provider
        const provider = new GoogleAuthProvider();
        // Sign in with Google and wait for the response
        const result = await signInWithRedirect(auth, provider);
        // Set the user state with the authentication result
        setUser(result.user);
    };

    // Create a function to sign out
    const logOut = () => {
        // Sign out with Firebase
        signOut(auth);
        // Set the user state with null
        setUser(null);
    };

    // Use useEffect to listen for changes in the authentication state
    useEffect(() => {
        // Create a function to listen for changes in the authentication state
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Set the user state with the current user
            setUser(currentUser);
        });
        // Return a function to unsubscribe when the component is unmounted
        return () => {
            unsubscribe();
        };
    }, []);

    // Provide the authentication context to the children
    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a hook to consume the authentication context
export const useAuth = () => useContext(AuthContext);