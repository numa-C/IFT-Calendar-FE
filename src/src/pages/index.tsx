import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Header';
import Main from './Main';
import MissionMenu from  './MissionMenu';
import ServiceMenu from  './ServiceMenu';

const Index = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <MissionMenu />
        <ServiceMenu />
        <Main />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
