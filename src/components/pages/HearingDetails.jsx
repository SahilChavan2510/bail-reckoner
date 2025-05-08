import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function HearingDetails({ data, onUpdate }) {
  const handleChange = (e) => {
    onUpdate({ [e.target.name]: e.target.value });
  };

  return (
    <Box component="form">
      <Typography variant="h6" gutterBottom>Hearing Details</Typography>
      <TextField
        name="prosecutorArguments"
        label="Prosecutor Arguments"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={data.prosecutorArguments || ''}
        onChange={handleChange}
      />
      <TextField
        name="defenseArguments"
        label="Defense Arguments"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={data.defenseArguments || ''}
        onChange={handleChange}
      />
    </Box>
  );
}
