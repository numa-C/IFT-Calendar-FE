import * as React from 'react';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

import AllServicesMenu from './Headers/AllServicesMenu';
import UserMenu from './Headers/UserMenu';
import NotificationList from './Headers/NotificationList';


interface AppBarProps extends MuiAppBarProps { open?: boolean };

const AppBar = styled(MuiAppBar, )<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <AllServicesMenu />
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}
        >
          ダッシュボード
        </Typography>

        <NotificationList />
        <Box sx={{ mx: "0.2rem" }} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
