import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
}
