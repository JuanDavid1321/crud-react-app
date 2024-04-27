import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import IDTypesManagement from "./routes/IDTypesManagement/IDTypesManagement";
import RolesManagement from "./routes/RolesManagement/RolesManagement";
import UsersManagement from "./routes/UsersManagement/UsersManagement";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./context/Protected";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AuthContextProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <Protected>
                                <Home />
                            </Protected>
                        }
                    />
                    <Route 
                        path="/documents" 
                        element={
                            <Protected>
                                <IDTypesManagement />
                            </Protected>
                        } 
                    />
                    <Route  
                        path="/roles" 
                        element={
                            <Protected>
                                <RolesManagement />
                            </Protected>
                        } 
                    />
                    <Route  
                        path="/users" 
                        element={
                            <Protected>
                                <UsersManagement />
                            </Protected>
                        } 
                    />
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;