import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistic from "./components/Statistic/Statistic";
import Donation from "./components/Donation/Donation";
import CardDetails from "./components/CardDetails/CardDetails";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistic",
        loader: () => fetch("/donation.json"),
        element: <Statistic></Statistic>,
      },
      {
        path: "/login",

        element: <Login></Login>,
      },
      {
        path: "/sign-up",

        element: <SignUp></SignUp>,
      },
      {
        path: "/donation",
        loader: () => fetch("/donation.json"),
        element: <Donation></Donation>,
      },
      {
        path: "/card/:id",
        loader: () => fetch("/donation.json"),
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
