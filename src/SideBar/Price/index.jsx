import React from 'react';
import Input from "../../Components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="0-50"
          title="$0 - $50"
          name="price"
          className="price-input"
        />

        <Input
          handleChange={handleChange}
          value="50-100"
          title="$50 - $100"
          name="price"
          className="price-input"
        />

        <Input
          handleChange={handleChange}
          value="100-150"
          title="$100 - $150"
          name="price"
          className="price-input"
        />

        <Input
          handleChange={handleChange}
          value="150-"
          title="Over $150"
          name="price"
          className="price-input"
        />
      </div>
    </div>
  );
}

export default Price;
