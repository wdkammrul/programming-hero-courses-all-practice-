import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    // step-27 Bookings.jsx now step-28 
    const {user, loading} = useContext(AuthContext)
    
    //step-48 Bookings.jsx now step-49 
    const location = useLocation()
    // console.log(location.pathname)


    // step-30 next step-31 Routes.jsx
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    // step-29 
    if(user?.email){
        return children;
    }


    // step-50 next step-51 Login.jsx
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoutes;