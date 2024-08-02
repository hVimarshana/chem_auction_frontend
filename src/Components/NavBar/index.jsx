import React, { useState, useEffect } from 'react';
import './NavBar.css';
import CustomButton from '../Button'; // Ensure correct path

const pages = ['Home', 'Products', 'About Us', 'Contact Us'];

const pageLink = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
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
          <a href="#" className="logo">
            chemAuction
          </a>
        </div>
        {/* Desktop/laptop links */}
        {!isMobileView && (
          <div className="navbar-menu">
            <ul className="navbar-links">
              {pages.map((page) => (
                <li key={page}>
                  <a href={`#${page.toLowerCase()}`}>{page}</a>
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
              <li key={page}>
                <a href={`#${page.toLowerCase()}`} onClick={() => setIsNavOpen(false)}>
                  {page}
                </a>
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
