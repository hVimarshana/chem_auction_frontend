import React from 'react';
import "./Recommended.css";
import Buttons from '../../Components/Buttons';
import chemicalProducts from '../../db/data';

const Recommended = ({ handleClick }) => {
  // Extract unique companies from the chemicalProducts data
  const companies = [...new Set(chemicalProducts.map(product => product.company))];

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        {companies.map((company, index) => (
          <Buttons
            key={index}
            onClickHandler={handleClick}
            value={company}
            title={company}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
