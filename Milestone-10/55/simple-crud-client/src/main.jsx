import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,

    // step-8 next step-9 server site index.js
    // step-10 api data next step-11 Users.jsx
    loader: () => fetch('http://localhost:5000/users')
  },

  // step-23 next step-24 server site index.js
  {
    path: '/update/:id',
    element: <Update></Update>,

    // step-25 next step-26 Update.jsx
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
