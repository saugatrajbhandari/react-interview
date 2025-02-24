import { Link, Outlet } from "react-router-dom";

import Navbar from "./navbar";
import useMobile from "../hooks/use-mobile";

function Layout() {
  const isMobile = useMobile();

  console.log(isMobile);

  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Layout;
