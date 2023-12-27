import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    // step-22 
    // step-26 
    const { user, logOut } = useContext(AuthContext)


    // step-27 
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        {user && <>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>

        </>

        }
    </>

    return (
        <div className="navbar  max-w-7xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">KAMRUL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {/* step-23  next-step-24 =>AuthProvider.jsx */}
                {
                    user ? <>
                        <span>{user.email}</span>

                        {/* step-21  */}
                        {/* step-28 next step-29 */}
                        <a onClick={handleLogOut} className="btn">Sign Out</a>
                    </>
                        : <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;