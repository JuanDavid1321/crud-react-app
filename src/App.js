import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import IDTypesManagement from "./routes/IDTypesManagement/IDTypesManagement";
import RolesManagement from "./routes/RolesManagement/RolesManagement";
import UsersManagement from "./routes/UsersManagement/UsersManagement";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
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
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;