import ActionTimeout from "../pages/action-timeout";
import AdminSidebarToggle from "../pages/admin-sidebar-toggle";
import ClickOutside from "../pages/click-outside";
import CustomMemo from "../pages/custom-memo";
import FixedFooterAnimation from "../pages/fixed-footer";
import Home from "../pages/home";
import InfiniteScrolling from "../pages/infinite-scrolling";
import JiraClone from "../pages/jira-clone";
import Multistepform from "../pages/multistep-form";
import Stopwatch from "../pages/stopwatch";
import Debounce from "../pages/debounce";
import Autocomplete from "../pages/autocomplete";

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
  { path: "/infinite-scrolling", element: <InfiniteScrolling /> },
  { path: "/admin-sidebar-toggle", element: <AdminSidebarToggle /> },
  { path: "/custom-memo", element: <CustomMemo /> },
  { path: "/fixed-footer", element: <FixedFooterAnimation /> },
  { path: "/debounce", element: <Debounce /> },
  { path: "/autocomplete", element: <Autocomplete /> },
];
