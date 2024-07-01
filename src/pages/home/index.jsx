import { Link } from "react-router-dom";
import style from "./home.module.css";

function Home() {
  return (
    <div>
      <h1 className={style.title}>React Interview</h1>

      <div className={style.container}>
        <Link to="/stopwatch">stopwatch</Link>
        <Link to="/clickoutside" state={{ isInitial: true }}>
          clickoutside
        </Link>

        <Link to="/perform-action">perform action</Link>
        <Link to="/multistepform">mutistep form</Link>
      </div>
    </div>
  );
}

export default Home;
