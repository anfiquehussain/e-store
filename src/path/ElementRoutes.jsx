import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RowCard from "../components/RowCard/RowCard";
import PrivateRoute from "../PrivateRoute";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

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
                      path="row"
                      element={
                          <PrivateRoute>
                              <RowCard />
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





