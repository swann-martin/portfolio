import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Knowledges from "./pages/knowledges/Knowledges";
import NotFound from "./pages/notfound/NotFound";
import Portfolio from "./pages/portfolio/Portfolio";
import "./styles/styles.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "knowledges",
    element: <Knowledges />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
