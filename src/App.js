import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import IDTypesManagement from "./routes/IDTypesManagement/IDTypesManagement";
import RolesManagement from "./routes/RolesManagement/RolesManagement";
import UsersManagement from "./routes/UsersManagement/UsersManagement";

function App() {
    //const {currentUser} = useContext(AuthContext)

    // const RequireAuth = ({ children }) => {
    //     return currentUser ? children : <Navigate to="/login" />;
    // };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        // <RequireAuth>
                            <Home />
                        // </RequireAuth>
                    }
                />
                <Route path="/documents" element={<IDTypesManagement />} />
                <Route path="/roles" element={<RolesManagement />} />
                <Route path="/users" element={<UsersManagement />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;