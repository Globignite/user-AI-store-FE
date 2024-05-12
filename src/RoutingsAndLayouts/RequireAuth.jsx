import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles, userRole, isSignedIn }) => {
  const location = useLocation();

  return allowedRoles?.includes(userRole) ? (
    <Outlet />
  ) : isSignedIn ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
