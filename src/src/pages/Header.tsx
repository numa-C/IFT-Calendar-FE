import * as React from 'react';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import AllServicesMenu from './Headers/AllServicesMenu';


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
    <AppBar position='absolute'>
      <Toolbar
        sx={{
          pr: '24px'
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

        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Box sx={{ mx: "0.2rem" }} />

        <IconButton color='inherit'>
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
