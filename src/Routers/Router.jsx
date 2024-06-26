import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DeshboardLayout from "../Layout/DeshboardLayout";
import PrivateRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import DeliveryManRoute from "./DeliveryManRoute";
import Users from "../Components/Admin/Users";
import AllParcels from "../Components/Admin/AllParcels";
import DeliveryMans from "../Components/Admin/DeliveryMans";
import MyListings from "../Components/DeliveryMan/MyListings";
import MyReviews from "../Components/DeliveryMan/MyReviews";
import MyParcels from "../Components/Users/MyParcels";
import Profile from "../Components/Profile";
import Stastastick from "../Components/Admin/Stastastick";
import Error from "../Pages/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <div></div>,
      },
      {
        path: "about",
        element: <div></div>,
      },
    ],
  },
  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <DeshboardLayout/>
      </PrivateRoute>
    ),
    errorElement: <div></div>,
    children: [
      {
        index : true,
        element: (
          <PrivateRoute>
              <Stastastick/>
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Users />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-parcels",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllParcels />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-delivery-mans",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DeliveryMans />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "delivery-list",
        element: (
          <PrivateRoute>
            <DeliveryManRoute>
              <MyListings />
            </DeliveryManRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <DeliveryManRoute>
              <MyReviews />
            </DeliveryManRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-parcels",
        element: (
          <PrivateRoute>
            <MyParcels />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
