import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import ErrorPage from "./pages/Error";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "/a-propos/",
        element: <Apropos />,
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
