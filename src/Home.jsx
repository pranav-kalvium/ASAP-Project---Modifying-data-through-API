import { useState } from "react";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>MyWebsite</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Pranav's Landing Page..</h1>
        <p>Your journey into creativity starts here.</p>
        <button>Get Started !!!...</button>
      </div>
    </div>
  );
}
