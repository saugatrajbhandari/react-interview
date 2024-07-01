import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Stopwatch from "./pages/stopwatch";
import Layout from "./layout";
import ClickOutside from "./pages/click-outside";
import ActionTimeout from "./pages/action-timeout";
import Multistepform from "./pages/multistep-form";

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

      {
        path: "/perform-action",
        element: <ActionTimeout />,
      },

      {
        path: "/multistepform",
        element: <Multistepform />,
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
