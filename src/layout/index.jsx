import { Link, Outlet } from "react-router-dom";

import style from "./layout.module.css";

function Layout() {
  return (
    <div>
      <Link to={"/"} className={style.layout}>
        home
      </Link>

      <Outlet />
    </div>
  );
}

export default Layout;
