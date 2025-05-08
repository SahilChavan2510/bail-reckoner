import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Case Dashboard</Typography>
      <Typography variant="body1">All cases will be listed here</Typography>
    </Box>
  );
}
