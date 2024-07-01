import { useEffect, useRef, useState } from "react";
import style from "./action-timeout.module.css";

function ActionTimeout() {
  const [time, setTime] = useState(0);
  const [performAction, setPerformAction] = useState(false);

  const timerIntervalRef = useRef(null);

  useEffect(() => {
    console.log(time);
    if (time === 11) {
      clearInterval(timerIntervalRef.current);
      setTime(0);
      setPerformAction(true);
    }

    timerIntervalRef.current = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(timerIntervalRef.current);
  }, [time]);

  useEffect(() => {
    if (!performAction) return;

    alert("hello");
  }, [performAction]);

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  return (
    <div className={style.main}>
      <p className={style.title}>Action perform on time out</p>
      <p className={style.subtitle}>{`${String(minutes).padStart(
        2,
        "0"
      )} : ${String(seconds).padStart(2, "0")}`}</p>
    </div>
  );
}

export default ActionTimeout;
