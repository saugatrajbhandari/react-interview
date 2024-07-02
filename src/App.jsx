import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./layout";

import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: routes,
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
