import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "./GoogleAuthContext";

const Protected = ({ children }) => {
    const { user } = useGoogleAuth();

    if (!user) return <Navigate to="/login" />; // If user is not logged in, redirect them to the login page.

    return children; // Otherwise, show the protected content
};

export default Protected;
