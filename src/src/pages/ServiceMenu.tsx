import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

import Calendaer from './ServiceMenus/Calendar';

const ServiceMenu = () => {
  const drawerWidth: number = 280;
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true); // should be fix
  const toggleDrawer = () => { setOpen(!open); };
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  return (
    <Drawer variant='permanent' open={open} sx={{ height: '100vh', overflow: 'hidden' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
      </Toolbar>
      <IconButton
        aria-label='open drawer'
        color='inherit'
        edge='start'
        size='large'
        onClick={toggleDrawer}
        sx={{
          marginLeft: 'calc(100% - 60px)',
          width: '50px'
        }}
      >
        {open
          ? <ChevronLeftIcon />
          : <MenuIcon />
        }
      </IconButton>
      
      <Divider />

      <Box sx={{ flexGrow: 1, overflow: 'scroll' }}>
        <Calendaer />
      </Box>
    </Drawer>
  );
};

export default ServiceMenu;
