import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the UserContext
const UserContext = createContext(null);

// Provide the UserContext to the rest of the app
export const UserProvider = ({ children }) => {
  // userRole = guest / user / admin
  const [user, setUser] = useState({
    userRole: "guest",
    isSignedIn: false,
    name: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
