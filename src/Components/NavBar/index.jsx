import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CustomButton from '../Button'; // Ensure correct path
import LoginModal from '../LoginModal'; // Import the login modal
import RegistrationForm from '../RegistrationModel'; // Import the registration modal

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' }
];

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); // State to show/hide login modal
  const [showRegisterModal, setShowRegisterModal] = useState(false); // State to show/hide register modal

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal); // Toggle login modal visibility
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal); // Toggle register modal visibility
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            chemAuction
          </Link>
        </div>
        {/* Desktop/laptop links */}
        <div className="navbar-menu">
          <ul className="navbar-links">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))} 
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CustomButton text="LOGIN" onClick={toggleLoginModal} /> {/* Trigger login modal */}
            <div style={{ width: '10px' }}></div> {/* Adding gap */}
            <CustomButton text="REGISTER" onClick={toggleRegisterModal} /> {/* Trigger register modal */}
          </div>
        </div>
      </nav>

      {/* Render LoginModal when showLoginModal is true */}
      {showLoginModal && <LoginModal toggleModal={toggleLoginModal} />} 

      {/* Render RegistrationModal when showRegisterModal is true */}
      {showRegisterModal && <RegistrationForm toggleModal={toggleRegisterModal} />}
    </header>
  );
};

export default NavBar;