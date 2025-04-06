import { Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomButton from '../Button'; 
import './HeroContainer.css';
import HeroImg from '../../Assets/bghero.png';

const HeroContainer = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === 'light';

  return (
    <div className="hero-container">
      <Grid container className="hero-grid">
        <Grid item xs={12} md={6} className="text-container">
          <Box
            id="hero-text"
            className={`hero ${isLightMode ? 'heroLight' : 'heroDark'}`}
          >
            <div className="overlay"></div>
            <Stack spacing={2} useFlexGap sx={{ width: '100%' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-box"
              >
                <Typography
                  component="h1"
                  variant="h2"
                  className="heading"
                  sx={{ color: 'black' }}
                >
                  Welcome to &nbsp;
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 0.5, yoyo: Infinity }}
                    style={{ color: 'rgb(0, 42, 255)', fontSize: '5rem', fontWeight: 'bold' }} // Adjusted to make it bigger and bold
                  >
                    ChemAuction
                  </motion.span>
                </Typography>
                <Typography variant="body1" sx={{ color: 'black', mt: 2 }}>
                  Your premier web-based auction platform for excess chemical raw materials.
                  Connect with manufacturers and buyers to find cost-effective solutions
                  while promoting sustainability within the chemical industry.
                </Typography>
                <div className="button-container">
                  <CustomButton text="About Us" sx={{ mt: 2, fontSize: '14px' }} />
                </div>
              </motion.div>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="image-container">
          <img src={HeroImg} alt="ChemAuction" className="hero-image" />
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroContainer;
