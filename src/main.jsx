import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./routes/ProfilePage";
import ShopProducts from "./routes/ShopProducts";

import AboutUs from "./routes/AboutUs.jsx";
import ContactUs from "./routes/ContactUs.jsx";

import ProductProvider from "./Context/Productcontext";
import ShopListProvider from "./Context/ShopListcontext.jsx";
import ModalProvider from "./Context/Modalcontext.jsx";
import AuthPage from "./Pages/AuthPage/AuthPage.jsx";
import AuthProvider from "./Context/AuthContext.jsx";
import Root from "./routes/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/e-comme-project-react/",
    element: <Root />,
    errorElement: <h1>404 Not found </h1>,
    children: [
      {index:true, element:<HomePage/>},
      {
        path: "shopPage",
        element: <ShopProducts />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "shopPage/:id",
        element: <ShopProducts />,
      },
      {
        path: "login",
        element: <AuthPage />,
      },
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <ShopListProvider>
        <ModalProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ModalProvider>
      </ShopListProvider>
    </ProductProvider>
  </React.StrictMode>
);
