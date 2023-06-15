import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";

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
        path: 'myselectedclasses',
        element: <MySelectedClasses></MySelectedClasses>
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
        path: 'myclass',
        element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path: "manageclasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageuser',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      
    ]
  }
]);

