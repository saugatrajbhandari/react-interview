import { useEffect } from "react";

function useClickOutside(containerRef, callback) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [containerRef, callback]);
  return null;
}

export default useClickOutside;
