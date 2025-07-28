// client/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PizzaDetails from "./pages/PizzaDetails";
import CreatePizza from "./pages/CreatePizza";
import UpdatePizza from "./pages/UpdatePizza";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "pizzas/:id", element: <PizzaDetails /> },
      { path: "create", element: <CreatePizza /> },
      { path: "update/:id", element: <UpdatePizza /> },
    ],
  },
]);

export default router;
