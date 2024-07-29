import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { Fragment } from "react";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Layout = route.Layout ? route.Layout : Fragment;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}
