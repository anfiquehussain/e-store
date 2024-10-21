import React, { createContext, useState, useEffect, useContext } from "react";
import { Base_url } from "../constant/base";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Retrieve authentication state from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${Base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUser(data);
        localStorage.setItem("token", data.token); // Save token to localStorage

      } else {
        setError(data.message || "Login failed. Please try again.");
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token"); // Remove token from localStorage on logout
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
