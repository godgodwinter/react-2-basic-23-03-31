import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingRoot from "@/routes/landing/LandingRoot";
import LandingIndex from "@/routes/landing/LandingIndex";
import ErrorPage from "@/error-page";

const LandingRoutes = [
  {
    path: "/",
    element: <LandingRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingIndex /> },
      {
        path: "cv",
        element: <LandingIndex />,
      },
      {
        path: "projects",
        element: <LandingIndex />,
      },
      {
        path: "skills",
        element: <LandingIndex />,
      },
      {
        path: "features",
        element: <LandingIndex />,
      },
      //     {
      //       path: "contacts/:contactId/edit",
      //       element: <EditContact />, //views
      //       loader: contactLoader,  //get()
      //       action: editAction, //post
      //     },
      //     {
      //       path: "contacts/:contactId/destroy",
      //       action: destroyAction,
      //       errorElement: <div>Oops! There was an error.</div>,
      //     },
    ],
  },
];

export default LandingRoutes;
