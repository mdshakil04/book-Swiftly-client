
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ReactTabs from "../pages/Home/Tabs/ReactTabs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
// import TopServices from "../pages/Home/TopServices/TopServices";
import Error from "../pages/Error/Error";
import Services from "../pages/Home/TopServices/Services";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/service',
          element:<Services></Services>
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
          path:'/serviceDetails',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path:'/locations',
          element:<PrivateRoute><ReactTabs></ReactTabs></PrivateRoute>
        }
      ]
    },
  ]);