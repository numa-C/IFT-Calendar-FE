import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Dashboard from './Mains/Dashboard';
import Calendar from './Mains/Calendar';

const useStyles = (theme: any) => {
  return makeStyles({
    toolbarMargin: theme.mixins.toolbar
  });
};

const  Main = () => {
  const theme = createTheme();
  const classes = useStyles(theme)();

  return (
    <Box
      className={classes.toolbarMargin}
      component='main'
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <Container className={classes.toolbarMargin} fixed maxWidth='xl' sx={{ mt: 6, mb: 6 }} >
        {/* <Dashboard /> */}
        <Calendar />
      </Container>
    </Box>
  );
}

export default Main;
