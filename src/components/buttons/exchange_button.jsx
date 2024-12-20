import React from 'react';
import { Button } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync'; 
const ExchangeButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<SyncIcon />}
      sx={{
        backgroundColor: '#9c4dcc', 
        color: '#ffffff', 
        borderRadius: '8px', 
        fontWeight: 'bold',
        textTransform: 'none', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)', 
        '&:hover': {
          backgroundColor: '#7b1fa2', 
        },
        padding: '0.5rem 1.5rem', 
      }}
    >
      Exchange
    </Button>
  );
};

export default ExchangeButton;
