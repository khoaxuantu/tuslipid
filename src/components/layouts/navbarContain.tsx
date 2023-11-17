import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function NavbarContainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
