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
import CursorMove from "../pages/cursor-move";
import Otp from "../pages/otp";
import Progressbar from "../pages/progress-bar";
import HolyGrailLayout from "../pages/holy-grail-layout";
import TabsPage from "../pages/tabs";
import Toast from "../pages/toast";
import Pagination from "../pages/pagination";
import CustomSwitch from "../pages/custom-switch";
import Spinner from "../pages/spinner";
import TypeHeadAutoSuggestion from "../pages/typehead-autosuggestion";
import Accordian from "../pages/accordian";

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
  { path: "/cursor-move", element: <CursorMove /> },
  { path: "/otp", element: <Otp /> },
  { path: "/progress-bar", element: <Progressbar /> },
  { path: "/holy-grail-layout", element: <HolyGrailLayout /> },
  { path: "/tabs", element: <TabsPage /> },
  { path: "/toast", element: <Toast /> },
  { path: "/pagination", element: <Pagination /> },
  { path: "/custom-switch", element: <CustomSwitch /> },
  { path: "/spinner", element: <Spinner /> },
  { path: "/typehead-autosuggestion", element: <TypeHeadAutoSuggestion /> },
  { path: "/accordian", element: <Accordian /> },
];
