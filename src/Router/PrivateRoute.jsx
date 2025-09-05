import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";
import Spinner from "../Shared/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
