import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import "./ProductSearchBar.css";

const ProductSearchBar = ({ handleInputChange, query }) => {
  return (
    <div className="product-searchbar-wrapper">
      <div className="product-searchbar-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search Chemical."
        />
        <AiOutlineSearch className="search-icon" />
      </div>
    </div>
  );
}

export default ProductSearchBar;
