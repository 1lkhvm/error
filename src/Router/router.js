import React from "react";

import { createBrowserRouter } from "react-router-dom";
import SignupForm from "../Page/Add/Add";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Add",
    element: <SignupForm />,
  },
]);

export default router;
