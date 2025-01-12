import style from "./progress-bar.module.css";

import React, { useEffect, useRef, useState } from "react";

function Progressbar() {
  const totalMs = 10 * 1000;
  const interval = 1 * 1000;

  const totalCycle = totalMs / interval;
  const progressMade = (interval / totalMs) * 100;

  const timerRef = useRef();
  const cycleCompleted = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((prev) => prev + progressMade);

      cycleCompleted.current += 1;

      if (cycleCompleted.current === totalCycle)
        clearInterval(timerRef.current);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, []);

  console.log(progress);

  return (
    <div className={style.wrapper}>
      <div
        className={style.progress}
        style={{ transform: `translateX(${progress}%)` }}
      ></div>
    </div>
  );
}

export default Progressbar;
