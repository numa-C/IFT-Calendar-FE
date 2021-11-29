import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AllServicesMenu from './Headers/AllServicesMenu';
import UserMenu from './Headers/UserMenu';
import NotificationList from './Headers/NotificationList';
import TimerMenu from './Headers/TimerMenu';

interface AppBarProps extends MuiAppBarProps {};

const AppBar = styled(MuiAppBar, )<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 48,
      minHeight: '36px !important',
      padding: '0 10px 0 0',
    }
  }
);

const AppHeader = () => {
  const classes = useStyles();
  const headerTitle = 'カレンダー'; // ダッシュボード

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolBar}>
        <AllServicesMenu />
        <Typography
          color='inherit'
          component='h1'
          noWrap
          sx={{ flexGrow: 1 }}
          variant='h6'
        >
          {headerTitle}
        </Typography>
        <TimerMenu />
        <Box sx={{ mx: '0.7rem' }} />
        <NotificationList />
        <Box sx={{ mx: '0.6rem' }} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
