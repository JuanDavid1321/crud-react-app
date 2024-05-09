import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "./GoogleAuthContext";

const ProtectedWithGoogleAuth = ({ children }) => {
    const { googleUser } = useGoogleAuth();

    if (!googleUser) return <Navigate to="/login" />; // If user is not logged in, redirect them to the login page.

    return children; // Otherwise, show the protected content
};

export default ProtectedWithGoogleAuth;
