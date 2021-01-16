import TestPage from "modules/main/pages/TestPage";
import { RouteConfig } from "./RouteConfigType";

export default () =>
  [
    {
      path: "/",
      label: "Test Page",
      exact: true,
      component: TestPage,
      showInNavigationBar: true
    }
  ] as RouteConfig[];
