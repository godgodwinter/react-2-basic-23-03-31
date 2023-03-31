import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingRoot from "@/routes/landing/LandingRoot";
import ErrorPage from "@/error-page";


 const LandingRoutes = [
    {
      path: "/",
      element: <LandingRoot />,
      errorElement: <ErrorPage />,
    //   children: [
    //     { index: true, element: <Index /> },
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //       loader: contactLoader,
    //     },
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
    //   ],
    },
  ]

  export default LandingRoutes;