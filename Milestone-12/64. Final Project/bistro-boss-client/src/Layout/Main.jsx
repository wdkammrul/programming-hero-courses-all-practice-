import { Outlet } from "react-router-dom";
import Footer from "../Payges/Shared/Footer/Footer";
import Navbar from "../Payges/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;