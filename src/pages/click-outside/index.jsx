import { useEffect, useRef } from "react";
import style from "./click-outside.module.css";

function ClickOutside() {
  const containerRef = useRef(null);

  const callback = () => alert("mouseclick outside");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={style.main}>
      <p className={style.title}>click outside</p>

      <div ref={containerRef} className={style.container}></div>
    </div>
  );
}

export default ClickOutside;
