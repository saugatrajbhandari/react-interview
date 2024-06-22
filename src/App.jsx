import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Stopwatch from "./pages/stopwatch";
import Layout from "./layout";
import ClickOutside from "./pages/click-outside";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/stopwatch",
        element: <Stopwatch />,
      },

      {
        path: "/clickoutside",
        element: <ClickOutside />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
