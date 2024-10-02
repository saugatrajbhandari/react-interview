import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./layout.module.css";
import { navigation } from "../navigation";

function Navbar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleProjectChange = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };

  console.log(pathname);

  return (
    <div className="p-2 items-center bg-indigo-400/70 flex justify-between">
      <Link to={"/"} className={style.layout}>
        Home
      </Link>

      <div>
        <select value={pathname} onChange={handleProjectChange}>
          <option value="/">Choose Project</option>

          {navigation.map((item) => (
            <option key={item.name} value={item.path}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
