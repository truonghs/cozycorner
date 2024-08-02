import AdminLayout from "@/Layouts/AdminLayout/AdminLayout";
import ClientLayout from "../Layouts/ClientLayout/ClientLayout";
import { Home } from "../pages";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";

const clientRoutes = [
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
];
const adminRoutes = [
  {
    path: "/admin",
    component: Dashboard,
    Layout: AdminLayout,
  },
];
const routes = [...clientRoutes, ...adminRoutes];
export { routes };
