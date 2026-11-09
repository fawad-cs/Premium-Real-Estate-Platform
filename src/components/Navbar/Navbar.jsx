
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  UserRound,
} from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Sell Property", path: "/sell" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { wishlist } = useWishlist();

  return (
    <motion.header
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">
            <Home size={21} />
          </span>
          ESTORA<span className="logo-dot">.</span>
        </Link>

        {/* NAVIGATION */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={
                location.pathname === link.path
                  ? "active-link"
                  : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}

              {link.name === "Wishlist" && (
                <span className="wishlist-count">
                  {wishlist.length}
                </span>
              )}
            </Link>
          ))}

          {/* MOBILE ACCOUNT LINKS */}
          <div className="mobile-account-links">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
            >
              Create Account
            </Link>
          </div>

        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">

          <div className="account-menu">
            <button className="account-btn">
              <UserRound size={18} />
              <span>Account</span>
            </button>

            <div className="account-dropdown">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                Create Account
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="navbar-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
            <ArrowUpRight size={17} />
          </Link>

        </div>

        {/* HAMBURGER */}
        <button
          className="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </motion.header>
  );
}

export default Navbar;
