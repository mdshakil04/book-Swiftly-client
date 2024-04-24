
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
// import TopServices from "../pages/Home/TopServices/TopServices";
// import Services from "../pages/Home/TopServices/Services";
import ReactTabs from "../pages/Home/Tabs/ReactTabs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path : 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path:'/serviceDetails',
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:'/locations',
          element:<ReactTabs></ReactTabs>
        }
      ]
    },
  ]);