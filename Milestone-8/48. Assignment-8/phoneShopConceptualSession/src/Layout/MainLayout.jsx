import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;