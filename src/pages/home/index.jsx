import { Link } from "react-router-dom";
import style from "./home.module.css";
import { navigation } from "../../navigation";

function Home() {
  return (
    <div>
      <h1 className={style.title}>React Machine Coding</h1>

      <div className={style.container}>
        {navigation.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
