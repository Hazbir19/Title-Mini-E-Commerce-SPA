import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductDetails from "../Components/ProductDetails";
import Home from "../Components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/products/:id",
        element:<ProductDetails></ProductDetails>
      }
    ]
  },
]);
export default router