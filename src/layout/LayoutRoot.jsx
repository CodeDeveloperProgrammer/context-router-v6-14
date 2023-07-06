import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar />  
      <Outlet />
      <footer>By Ramón</footer>
    </>
  );
};

export default LayoutRoot;
