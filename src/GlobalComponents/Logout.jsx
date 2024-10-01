import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../RoutingsAndLayouts/UserContext";

const Logout = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data and update context
    setUser({
      userRole: "guest",
      isSignedIn: false,
      name: "",
      profilePicture: "",
    });

    // Optionally, clear any authentication tokens from local storage or cookies
    // localStorage.removeItem('authToken');

    // Redirect to the sign-in page or home page
    navigate("/", { replace: true });
  }, [setUser, navigate]);

  return null;
};

export default Logout;
