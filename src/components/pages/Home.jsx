import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Bail Reckoner System
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        AI-powered bail amount prediction system for efficient case management
      </Typography>
      <Button variant="contained" component={Link} to="/new-case" size="large">
        Start New Case
      </Button>
    </Box>
  );
}
