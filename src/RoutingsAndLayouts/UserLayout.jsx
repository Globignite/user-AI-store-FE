import { Outlet } from "react-router-dom";
import Navbar from "../GlobalComponents/Navbar";

function UserLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* sidebar  */}
      <main style={{ padding: 20, marginTop: 50 }}>
        <Outlet /> {/* This will render the current route's component */}
      </main>
      {/* <footer>
        <p>My App Footer © 2024</p>
      </footer> */}
    </div>
  );
}

export default UserLayout;
