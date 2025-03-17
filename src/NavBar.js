import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.products.totalQuantity);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isOpen ? "active" : ""}>
        <li className="logo"><Link to="/">SnapShop</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="cart">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge">{totalQuantity}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
