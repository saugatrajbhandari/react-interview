import { useEffect, useRef } from "react";
import style from "./click-outside.module.css";
// import useClickOutside from "../../hooks/use-click-outside";

function ClickOutside() {
  const callback = () => alert("mouseclick outside");

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  return (
    <div className={style.main}>
      <p className={style.title}>click outside</p>

      <div ref={containerRef} className={style.container}></div>
    </div>
  );
}

export default ClickOutside;
