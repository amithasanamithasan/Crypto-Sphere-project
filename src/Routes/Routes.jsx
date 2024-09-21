import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Navbar from "../Component/Pages/Navbar/Navbar";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Navbar></Navbar>,
         
        },
      ]
    },
  ]);
export default router;