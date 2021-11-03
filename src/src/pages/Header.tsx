import * as React from 'react';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
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
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          // onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
          }}
        >
          <MenuIcon />
          {/* {open
                ? <ChevronLeftIcon />
              } */}
        </IconButton>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
