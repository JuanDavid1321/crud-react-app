import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Protected = ({children}) => {
    const {user} = useAuth();

    if(!user) return <Navigate to="/login" />;  // If user is not logged in, redirect them to the login page.
    
    return children; // Otherwise, show the protected content
}
 
export default Protected;