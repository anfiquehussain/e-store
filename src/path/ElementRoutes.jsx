import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

function ElementRoutes() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route
                      path="/"
                      element={
                          <PrivateRoute>
                              <Home />
                          </PrivateRoute>
                      }
                  />
                  <Route
                      path="product"
                      element={
                          <PrivateRoute>
                              <ProductDetails />
                          </PrivateRoute>
                      }
                  />
                  <Route path="login" element={<Login />} />
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default ElementRoutes





