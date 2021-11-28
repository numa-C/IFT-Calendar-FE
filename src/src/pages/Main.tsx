import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dashboard from './Mains/Dashboard';
import Calendar from './Mains/Calendar';

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
      <Container maxWidth='xl' sx={{ mt: 6, mb: 6 }}>
        {/* <Dashboard /> */}
        <Calendar />
      </Container>
    </Box>
  );
}

export default Main;
