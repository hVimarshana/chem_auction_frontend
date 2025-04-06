import React from 'react';
import Category from './Category';
import Price from './Price';
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="sidebar-container">
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </div>
  );
}

export default Sidebar;
