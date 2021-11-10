import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Dashboard from './Mains/Dashboard';

const  Main = () => {
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='xl' sx={{ mt: 6, mb: 6 }}>

      <Dashboard />

      </Container>
    </Box>
  );
}

export default Main;
