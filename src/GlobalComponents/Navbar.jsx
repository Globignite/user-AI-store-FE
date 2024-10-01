import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <nav>
      <div className="logo">
        {/* <img src="/logo.svg" alt="Logo Image" /> */}
        <h2>AI Cart</h2>
      </div>
      <div
        className={`hamburger ${toggleNavbar ? "toggle" : ""}`}
        onClick={handleToggleNavbar}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${toggleNavbar ? "open" : ""}`}>
        <li className={toggleNavbar ? "fade" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={toggleNavbar ? "fade" : ""}>
          <Link to="/solutions">Solutions</Link>
        </li>
        <li className={toggleNavbar ? "fade" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className={toggleNavbar ? "fade" : ""}>
          <button className="join-button">Join</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
