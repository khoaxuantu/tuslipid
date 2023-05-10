import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default MainLayout;