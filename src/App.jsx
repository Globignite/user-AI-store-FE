import { Routes, Route } from "react-router-dom";
import GuestLayout from "./RoutingsAndLayouts/GuestLayout";
import RequireAuth from "./RoutingsAndLayouts/RequireAuth.jsx";
import Home from "./GuestPages/Home/Home.jsx";
import NotFound from "./GlobalComponents/NotFound.jsx";
import SignIn from "./GlobalComponents/SignIn.jsx";
import SignUp from "./GlobalComponents/SignUp.jsx";
import About from "./GuestPages/About";
import UnAuthorized from "./GlobalComponents/UnAuthorized.jsx";
import UserLayout from "./RoutingsAndLayouts/UserLayout.jsx";
import ToolDescription from "./GuestPages/ToolDescription/ToolDescription.jsx";
import SearchResult from "./GuestPages/SearchResult/SearchResult.jsx";
import Logout from "./GlobalComponents/Logout.jsx";
import RatedReviewed from "./UserPages/RatedReviewed.jsx";
import MyHub from "./UserPages/MyHub.jsx";

console.log("netlify 2");

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        {/* guest routes =================================== */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="UnAuthorized" element={<UnAuthorized />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="about" element={<About />} />
        <Route path="tool/:id" element={<ToolDescription />} />
        <Route path="search" element={<SearchResult />} />
      </Route>

      <Route path="/user" element={<UserLayout />}>
        <Route element={<RequireAuth allowedRoles={["publisher", "user"]} />}>
          {/* user pages  =================================== */}
          <Route path="my-hub" element={<MyHub />} />
          <Route path="rated-reviewed" element={<RatedReviewed />} />
        </Route>
      </Route>

      {/* Publisher routes  =================================== */}
      {/* <Route path="/publisher" element={<PublisherLayout />}>
        <Route element={<RequireAuth allowedRoles={["publisher"]} />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Route> */}
    </Routes>
  );
};

export default App;
