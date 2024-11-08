import React, { useEffect, useState } from "react";

function CursorMove() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      setMousePosition({ x: clientX, y: clientY });
    });
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <div
        className={`bg-pink-400 h-4 w-4 rounded-full absolute`}
        style={{
          top: mousePosition.y,
          left: mousePosition.x - 20,
        }}
      ></div>
    </div>
  );
}

export default CursorMove;
