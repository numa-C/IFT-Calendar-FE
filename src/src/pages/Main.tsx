import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from './Mains/Dashboard';
import Calendar from './Mains/Calendar';

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 48,
      minHeight: '36px !important',
    }
  }
);

const  Main = () => {
  const classes = useStyles();

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
      {/* MainHeader for each services */}
      {/* <Toolbar
        sx={{
          pt: 9
        }}
        className={classes.toolBar}
      >
        <MenuIcon />
      </Toolbar> */}
      <Container maxWidth='xl' sx={{ mt: 6, mb: 6 }}>
        {/* <Dashboard /> */}
        <Calendar />
      </Container>
    </Box>
  );
}

export default Main;
