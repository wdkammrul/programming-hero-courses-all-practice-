import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            //servicesCard.jsx step-8 now step-9 next step-10 server site
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,


                // server site step-10 now step-11  next step-12 CheckOut.jsx
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            // step-23 next step-24 Bookings
            {
                path: 'bookings',

                // step-30 PrivateRoutes.jsx now 31 PrivateRoutes add next step-32 Bookings.jsx
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]
    },
]);

export default router