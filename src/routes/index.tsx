import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/home/Home";
import AboutUs from "../pages/About/AboutUs";
import MainLayout from './../components/layouts/MainLayout';



export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/aboutUs",
                element:<AboutUs></AboutUs>
            }
        ]
    }
])