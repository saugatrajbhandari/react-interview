import ActionTimeout from "../pages/action-timeout";
import ClickOutside from "../pages/click-outside";
import Home from "../pages/home";
import JiraClone from "../pages/jira-clone";
import Multistepform from "../pages/multistep-form";
import Stopwatch from "../pages/stopwatch";

export const routes = [
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
  { path: "/jira-clone", element: <JiraClone /> },
];
