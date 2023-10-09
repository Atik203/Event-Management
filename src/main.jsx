import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root/Root";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Services from "./Pages/Services/Services";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import GalleryDetails from "./Components/Gallery/GalleryDetails";
import Venues from "./Components/Venues/Venues";
import AboutUs from "./Pages/AboutUs/AboutUs";
import WorkDetails from "./Pages/WorkDetails/WorkDetails";
import VenueDetails from "./Pages/VenueDetails/VenueDetails";
import InviteCards from "./Pages/InviteCards/InviteCards";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/gallery-details/:id",
        element: (
          <PrivateRoute>
            <GalleryDetails></GalleryDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/gallery.json"),
      },
      {
        path: "/venue",
        element: (
          <PrivateRoute>
            {" "}
            <Venues></Venues>
          </PrivateRoute>
        ),
        loader: () => fetch("/venue.json"),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/work-details/:id",
        element: (
          <PrivateRoute>
            <WorkDetails></WorkDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/work.json"),
      },
      {
        path: "/venue-details/:id",
        element: <VenueDetails></VenueDetails>,
        loader: () => fetch("/venue.json"),
      },
      {
        path: "/invite-card",
        element: <InviteCards></InviteCards>,
        loader: () => fetch("/card.json"),
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
