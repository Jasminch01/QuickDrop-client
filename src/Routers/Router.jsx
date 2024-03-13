import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DeshboardLayout from "../Layout/DeshboardLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div></div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <div></div>,
      },
      {
        path: "about",
        element: <div></div>,
      },
      {
        path: "all-parcels",
        element: <div></div>,
      },
    ],
  },
  {
    path: "/deshboard",
    element: <DeshboardLayout></DeshboardLayout>,
    errorElement: <div></div>,
    children: [
      {
        path: "users",
        element: <div></div>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);
export default Router;
