import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "src/layout/AuthLayout";
import RouteLayout from "src/layout/RouteLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "",
        element: <AuthLayout>Loginasd</AuthLayout>,
      },
    ],
  },
]);

export default routes;
