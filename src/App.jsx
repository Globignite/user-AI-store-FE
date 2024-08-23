import { Routes, Route } from "react-router-dom";
import GuestLayout from "./RoutingsAndLayouts/GuestLayout";
import RequireAuth from "./RoutingsAndLayouts/RequireAuth.jsx";
import Home from "./GuestPages/Home";
import NotFound from "./GuestPages/NotFound";
import SignIn from "./GuestPages/SignIn";
import SignUp from "./GuestPages/SignUp";
import About from "./GuestPages/About";
import UnAuthorized from "./GuestPages/UnAuthorized.jsx";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard.jsx";
import PublisherLayout from "./RoutingsAndLayouts/PublisherLayout.jsx";
import UserDashboard from "./UserPages/UserDashboard.jsx";
import UserLayout from "./RoutingsAndLayouts/UserLayout.jsx";
import ToolDescription from "./GuestPages/ToolDescription/ToolDescription.jsx";
import SearchResult from "./GuestPages/SearchResult/SearchResult.jsx";

const App = () => {
  // userRole is one of  {guest , user , publisher, admin}
  const userRole = "guest";
  const isSignedIn = false;

  return (
    <Routes>
      {/* guest routes =================================== */}
      <Route path="/" element={<GuestLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="UnAuthorized" element={<UnAuthorized />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="tool/:id" element={<ToolDescription />} />
        <Route path="search-result" element={<SearchResult />} />
      </Route>

      {/* user pages  =================================== */}
      <Route path="/user" element={<UserLayout />}>
        <Route
          element={
            <RequireAuth
              allowedRoles={["publisher", "user"]}
              userRole={userRole}
              isSignedIn={isSignedIn}
            />
          }
        >
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
      </Route>

      {/* Publisher routes  =================================== */}
      <Route path="/publisher" element={<PublisherLayout />}>
        <Route
          element={
            <RequireAuth
              allowedRoles={["publisher"]}
              userRole={userRole}
              isSignedIn={isSignedIn}
            />
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
