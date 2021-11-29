import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

const Index = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppHeader />
        <AppBody />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
