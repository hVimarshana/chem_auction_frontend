import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import NavBar from '../../Components/NavBar'; // Ensure the path is correct
import Footer from '../../Components/Footer';
import { HowToReg, Gavel, Notifications, Verified, Chat, Feedback, ReportProblem } from '@mui/icons-material'; // Icons for features

const AboutUs = () => {
  return (
    <>
      {/* Navbar component */}
      <NavBar />

      {/* About Us Content */}
      <Box sx={{ mt: 10 }}> {/* Adjust the margin top to prevent overlap with Navbar */}
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h3" component="h1" gutterBottom>
                About ChemAuction
              </Typography>
              <Typography variant="body1" paragraph>
                ChemAuction is a cutting-edge web-based platform that streamlines the buying and selling of surplus chemical raw materials. Our platform brings together chemical manufacturers, suppliers, and industrial buyers, offering a seamless and efficient auction experience.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to help industries manage excess inventory, reduce waste, and ensure compliance with industry standards. Whether you're a buyer looking for high-quality chemicals or a supplier seeking new markets, ChemAuction offers an innovative solution for all.
              </Typography>
            </Grid>
          </Grid>

          {/* Features Section */}
          <Box mt={6}>
            <Typography variant="h4" gutterBottom>
              Features We Provide
            </Typography>
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <HowToReg sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    User Registration
                  </Typography>
                  <Typography variant="body2" align="center">
                    Secure and quick registration process for all users.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Gavel sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Make the Bid
                  </Typography>
                  <Typography variant="body2" align="center">
                    Participate in auctions and place bids with ease.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Notifications sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Automated Notification
                  </Typography>
                  <Typography variant="body2" align="center">
                    Stay informed with automated notifications about auctions and bids.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Verified sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Quality Assurance
                  </Typography>
                  <Typography variant="body2" align="center">
                    Ensure the highest quality for each auctioned item.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Chat sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Live Chat Feature
                  </Typography>
                  <Typography variant="body2" align="center">
                    Communicate instantly with buyers and sellers.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Feedback sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Feedback
                  </Typography>
                  <Typography variant="body2" align="center">
                    Provide feedback to enhance the experience for others.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <ReportProblem sx={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h6" gutterBottom>
                    Complaint Management
                  </Typography>
                  <Typography variant="body2" align="center">
                    Manage complaints and ensure a smooth user experience.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />  
      
      
    </>
  );
};

export default AboutUs;
