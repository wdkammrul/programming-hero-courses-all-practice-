import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDeatails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';
import Photos from './components/Photos/Photos.jsx';
import PhotoDetails from './components/PhotoDetails/PhotoDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
         path: '/about',
         element:<About></About>
       },
       {
         path: '/contact',
         element: <Contact></Contact>
       },
       {
         path: '/users',

        //  step-1 fetch users data 
         loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
         element: <Users></Users>
       },
       {
         //  step-9 params
        //  প্রতিটা ডাটাকে ঐ ডাটার ডিটেইলস দেখার জন্য এই সিস্টেম । 
         path: '/user/:userId', 
         loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
         element: <UserDetails></UserDetails> 
       },
       {
         path: '/posts',
        //  step-1 
         loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
         element: <Posts></Posts>
       },
       {
        // step-8 
         path: '/post/:postId',
         loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
         element: <PostDetails></PostDetails>
       },
       {
         path: '/comments',
        //  step-1 
         loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
         element: <Comments></Comments>
       },
       {
        // step-8 
         path: '/comment/:commentId',
         loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
         element: <CommentDetails></CommentDetails>
       },
       {
        // step-1 
         path: '/photos',
         loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
         element: <Photos></Photos>
       },
       {
        // step-8 
         path: '/photo/:photoId',
         loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
         element: <PhotoDetails></PhotoDetails>
       }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
