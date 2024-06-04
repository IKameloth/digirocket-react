import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "src/context/auth-context";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
