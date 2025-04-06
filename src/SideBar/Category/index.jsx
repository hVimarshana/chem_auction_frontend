import React from 'react';
import "./Category.css";
import chemicalProducts from '../../db/data';

const Category = ({ handleChange }) => {
  // Extract unique categories from the chemicalProducts data
  const categories = [...new Set(chemicalProducts.map(product => product.category))];

  return (
    <div >
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>
          <span className="label-text">All</span>
        </label>
        {categories.map((category, index) => (
          <label key={index} className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value={category}
              name="category"
            />
            <span className="checkmark"></span>
            <span className="label-text">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Category;
