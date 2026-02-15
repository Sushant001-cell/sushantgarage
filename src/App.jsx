import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logs from './components/Logs';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', pb: 4 }}>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 2, p: 2 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/expenses" element={<Typography variant="h5" color="text.secondary" align="center" sx={{ mt: 10 }}>Expenses Section - Detailed Spending</Typography>} />
            <Route path="/3d-view" element={<Typography variant="h5" color="text.secondary" align="center" sx={{ mt: 10 }}>3D Bike Viewer - Coming Soon</Typography>} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
