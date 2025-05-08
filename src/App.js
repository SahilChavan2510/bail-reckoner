import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/ui/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import NewCase from './components/pages/NewCase';
import CaseDetails from './components/pages/CaseDetails';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-case" element={<NewCase />} />
          <Route path="/case/:id" element={<CaseDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
