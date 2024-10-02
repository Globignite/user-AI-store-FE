import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUser } from "./UserContext";
import PropTypes from 'prop-types';

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { user } = useUser();

  return allowedRoles?.includes(user.userRole) ? (
    <Outlet />
  ) : user.isSignedIn ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;

// Prop validation using prop-types
RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
