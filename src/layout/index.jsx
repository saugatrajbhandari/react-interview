import { Link, Outlet } from "react-router-dom";

import Navbar from "./navbar";

function Layout() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Layout;
