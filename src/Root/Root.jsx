import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;