import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import ProductSearchBar from '../../Components/ProductSearchBar';
import Product from '../../Components/Product';
import chemicalProducts from "../../db/data";
import Recommended from '../../Components/Recommended';
import Sidebar from '../../SideBar/Sidebar';
import Card from '../../Components/Card';
import "./ProductPage.css";
import { Grid } from '@mui/material';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ----------- Input Filter -----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(chemicalProducts, selectedCategory, query) {
    let filteredProducts = chemicalProducts;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Applying selected category or price filter
    if (selectedCategory) {
      if (selectedCategory.includes("-")) {
        const [min, max] = selectedCategory.split("-").map(Number);

        filteredProducts = filteredProducts.filter(product => {
          const price = parseFloat(product.newPrice.replace(/[^0-9.-]+/g, "")); // Remove currency symbols
          if (max) {
            return price >= min && price <= max;
          } else {
            return price >= min;
          }
        });
      } else {
        filteredProducts = filteredProducts.filter(product =>
          product.category === selectedCategory ||
          product.color === selectedCategory ||
          product.company === selectedCategory ||
          product.title === selectedCategory
        );
      }
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          id={id} // Pass product ID for linking
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(chemicalProducts, selectedCategory, query);

  return (
    <div>
      <NavBar />
      <Grid container className='searchbar-grid'>
        <ProductSearchBar query={query} handleInputChange={handleInputChange} />
      </Grid>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Sidebar handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={10}>
          <Recommended handleClick={handleClick} />
          <Product result={result} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductPage;