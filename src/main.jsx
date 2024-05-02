import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './All-products/Main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "please/",
    element: <App />,
  },
  {
    path: "please/All-Products/",
    element: <Main />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);