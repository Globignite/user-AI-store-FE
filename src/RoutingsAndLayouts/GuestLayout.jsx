import { Outlet } from "react-router-dom";
import Navbar from "../GlobalComponents/Navbar";

function GuestLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main style={{ paddingTop: 50 }}>
        <Outlet /> {/* This will render the current route's component */}
      </main>
      {/* <footer>
        <p>My App Footer © 2024</p>
      </footer> */}
    </div>
  );
}

export default GuestLayout;
