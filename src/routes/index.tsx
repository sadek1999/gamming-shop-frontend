import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/home/Home";
import AboutUs from "../pages/About/AboutUs";
import MainLayout from "./../components/layouts/MainLayout";

import AllProducts from "../pages/Products/AllProducts";
import ManageProducts from "../pages/Products/manageProducts";
import Card from "../pages/card/card";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/card",
        element:<Card></Card> ,
      },
    ],
  },
]);
