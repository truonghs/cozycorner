import AdminLayout from "@/Layouts/AdminLayout/AdminLayout";
import ClientLayout from "../Layouts/ClientLayout/ClientLayout";
import { Home } from "../pages";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import Products from "@/pages/Admin/Products/Products";
import NewProduct from "@/pages/Admin/NewProduct/NewProduct";

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
  {
    path: "/admin/products",
    component: Products,
    Layout: AdminLayout,
  },
  {
    path: "/admin/newproduct",
    component: NewProduct,
    Layout: AdminLayout,
  },
];
const routes = [...clientRoutes, ...adminRoutes];
export { routes };
