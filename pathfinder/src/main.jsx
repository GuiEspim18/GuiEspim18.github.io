import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Global } from './styles/globalStyles.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error404 from "./pages/Errors/Error404.jsx";
import Home from "./pages/Home/Home.jsx";
import Begin from './pages/Begin/Begin.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

const routes = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error404 />, children: [
      { path: "/", element: <Begin /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register/> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
