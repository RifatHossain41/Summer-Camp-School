import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'manageuser',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      
    ]
  }
]);

