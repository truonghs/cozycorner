import ClientLayout from "../Layouts/ClientLayout/ClientLayout";
import { Home } from "../pages";

const routes = [
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
];
export { routes };
