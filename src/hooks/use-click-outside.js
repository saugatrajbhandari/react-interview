import { useEffect, useRef } from "react";

function useClickOutside(callback) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef, callback]);
  return containerRef;
}

export default useClickOutside;
