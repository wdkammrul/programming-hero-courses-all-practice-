import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './components/PostUser.jsx';
import DisplayUser from './components/DisplayUser';
import UpdateData from './components/UpdateData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser/>,
  },

  // step-6 next step-7 backend site
  {
    path: "/users",
    element: <DisplayUser/>,

    // step-8 set url next step-9 DisplayUser.jsx
    loader: () => fetch(`http://localhost:5000/users`)
  },


  // step-20 next step-21 backend
  {
    path: "/users/:id",
    element: <UpdateData/>,

    // step-22 next step-23 UpdateData.jsx
    loader: ({params}) => {
      console.log(params)
      return fetch(`http://localhost:5000/users/${params.id}`)
    }

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
