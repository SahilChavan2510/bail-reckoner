import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function FIRDetails({ data, onUpdate }) {
  const handleChange = (e) => {
    onUpdate({ [e.target.name]: e.target.value });
  };

  return (
    <Box component="form">
      <Typography variant="h6" gutterBottom>FIR Information</Typography>
      <TextField
        name="caseNumber"
        label="Case Number"
        fullWidth
        margin="normal"
        value={data.caseNumber || ''}
        onChange={handleChange}
      />
      <TextField
        name="policeStation"
        label="Police Station"
        fullWidth
        margin="normal"
        value={data.policeStation || ''}
        onChange={handleChange}
      />
      <TextField
        name="ipcSections"
        label="IPC Sections"
        fullWidth
        margin="normal"
        value={data.ipcSections || ''}
        onChange={handleChange}
      />
    </Box>
  );
}
