import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from "./pages/HomePage/Home";
import Root from "./routes/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
