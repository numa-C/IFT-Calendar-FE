import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBody from './AppBody';
import AppHeader from './AppHeader';

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
