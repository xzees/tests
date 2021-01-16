import Payment from "modules/payment/route/index";
import { RouteConfig } from "./RouteConfigType";

export default () =>
  [
    {
      path: "/payment",
      label: "Test Page",
      exact: false,
      component: Payment,
      showInNavigationBar: true
    },
  ] as RouteConfig[];
