import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { StrictMode, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Transfer from "./pages/Transfer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/login.jsx";
import SignOut from "./pages/Signout.jsx";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} //mencegah user login ke login lagi
      />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<App />} />
        <Route path="/transfer" element={<Transfer />} />
      </Route>
      <Route path="/signout" element={<SignOut />} />{" "}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>
);
