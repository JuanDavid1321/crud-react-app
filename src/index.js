import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import DocumentTypesManagement from './routes/DocumentTypesManagement';
import RolesManagement from './routes/RolesManagement';
import UsersManagement from './routes/UsersManagement';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "documents",
        element: <DocumentTypesManagement/>,
      },
      {
        path: "roles",
        element: <RolesManagement/>,
      },
      {
        path: "users",
        element: <UsersManagement/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

