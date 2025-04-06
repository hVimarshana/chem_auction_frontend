import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import chemicalProducts from '../../db/data';
import NavBar from '../../Components/NavBar';
import Chat from '../../Components/Chat';
import Footer from '../../Components/Footer';
import { Container, Grid, Typography, Button, TextField, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import './ProductDetail.css';

const ProductDetail = ({ user, auctionId }) => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const product = chemicalProducts.find(p => p.id === Number(id)); // Find the product by ID

  const [bidAmount, setBidAmount] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleBid = () => {
    alert(`Your bid of $${bidAmount} has been placed for ${product.title}`);
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  if (!product) {
    return <div>Product not found</div>; // Handle case where product doesn't exist
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className="product-detail-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <img src={product.img} alt={product.title} className="product-img" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="product-info">
              <Typography variant="h4" gutterBottom>{product.title}</Typography>
              <Typography variant="body1" paragraph>{product.description || 'No description available'}</Typography>
              <Box className="price">
                <Typography variant="h6" color="textSecondary">
                  <del>{product.prevPrice}</del> <span>{product.newPrice}</span>
                </Typography>
              </Box>
              <Box className="bid-section">
                <TextField
                  type="number"
                  label="Enter your bid"
                  value={bidAmount}
                  onChange={e => setBidAmount(e.target.value)}
                  className="bid-input"
                  variant="outlined"
                  sx={{ marginRight: 2, width: 200 }}
                />
                <Button variant="contained" color="primary" onClick={handleBid} className="place-bid-btn">
                  Place Bid
                </Button>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                sx={{ marginTop: 2 }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Previous Bids Section */}
        {product.bids && product.bids.length > 0 && (
          <Box mt={5} className="bids-section">
            <Typography variant="h5" gutterBottom>Previous Bids</Typography>
            <Paper elevation={3} className="bids-box">
              <List>
                {product.bids.map((bid, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`Bid: $${bid.amount}`} secondary={`By: ${bid.user}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        )}

        {/* Feedback Section */}
        <Box mt={5} className="feedback-section">
          <Typography variant="h5" gutterBottom>Customer Feedback</Typography>
          <Paper elevation={3} className="feedback-box">
            <Typography variant="body1" paragraph>No feedback available yet. Be the first to leave a comment!</Typography>
            {/* Add feedback form/input here if needed */}
          </Paper>
        </Box>

        {/* Live Chat Section */}
        <h2>Auction {auctionId}</h2>
        <Chat user={user} auctionId={auctionId} />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
