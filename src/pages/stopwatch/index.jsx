import { useEffect, useState, useRef } from "react";
import style from "./stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      console.log("is running interval", intervalRef.current);
    } else if (!isRunning && intervalRef.current) {
      console.log("inside", intervalRef.current);
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor(time / 3600);

  const dialog = document.getElementById("stopwatch-dialog");

  const handleOpenDialog = () => {
    dialog.showModal();
  };

  const handleCloseDialog = () => {
    dialog.close();
  };

  return (
    <div className={style.main}>
      <div>
        <p className={style.title}>Stopwatch</p>
        <p onClick={handleOpenDialog} style={{ cursor: "pointer" }}>
          reference
        </p>
        <dialog id="stopwatch-dialog">
          <div className={style.dialogcontainer}>
            <p style={{ cursor: "pointer" }} onClick={handleCloseDialog}>
              close
            </p>

            <img src="/stopwatch.png" alt="stopwatch" />
          </div>
        </dialog>

        <p className={style.stopwatchTimer}>
          {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}{" "}
          : {String(seconds).padStart(2, "0")}
        </p>

        <div className={style.action}>
          <button onClick={handleStart}>start</button>
          <button onClick={handlePause}>pause</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
