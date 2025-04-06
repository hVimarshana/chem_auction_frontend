import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CustomButton = ({ text, sx, onClick }) => { // Destructure onClick
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={onClick} // Attach onClick to the MUI Button
          sx={{
            backgroundColor: '#1976D2', // Dark blue color
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '12px',
            '&:hover': {
              backgroundColor: '#115293', // Slightly darker blue on hover
            },
            ...sx, // Allow passing custom styles
          }}
        >
          {text}
        </Button>
      </Stack>
    </div>
  );
};

export default CustomButton;
