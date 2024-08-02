import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CustomButton from '../Button'; // Ensure correct path

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' }
];

const NavBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);
    return () => window.removeEventListener('resize', checkWindowWidth);
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      {/* Navbar */}
      <nav className={`navbar ${isNavOpen && isMobileView ? 'mobile-open' : ''}`}>
        <div className="navbar-brand">
          <Link to="/" className="logo">
            chemAuction
          </Link>
        </div>
        {/* Desktop/laptop links */}
        {!isMobileView && (
          <div className="navbar-menu">
            <ul className="navbar-links">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CustomButton text="SIGN IN" />
              <div style={{ width: '10px' }}></div> {/* Adding gap */}
              <CustomButton text="REGISTER" />
            </div>
          </div>
        )}
        {/* Mobile toggle button */}
        {isMobileView && (
          <button className="menu-btn" onClick={handleNavToggle}>
            <span className="menu-icon"></span>
          </button>
        )}
      </nav>

      {/* Mobile navigation */}
      {isMobileView && (
        <div className={`mobile-nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="mobile-links">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path} onClick={() => setIsNavOpen(false)}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <CustomButton text="SIGN IN" />
            <div style={{ height: '10px' }}></div> {/* Adding gap */}
            <CustomButton text="REGISTER" />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
