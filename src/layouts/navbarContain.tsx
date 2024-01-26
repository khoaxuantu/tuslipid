import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function NavbarContainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
