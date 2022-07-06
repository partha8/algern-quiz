import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export const RequireAuth = () => {
  const location = useLocation();
  const { id } = useAppSelector((store) => store?.auth);
  return id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
