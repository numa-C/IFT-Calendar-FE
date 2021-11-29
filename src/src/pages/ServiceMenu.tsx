import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Calendaer from './ServiceMenus/Calendar';

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 64,
      minHeight: '48px !important',
      padding: 0
    }
  }
);

const ServiceMenu = () => {
  const [open, setOpen] = React.useState(true); // should be false for default
  const classes = useStyles();
  const drawerWidth: number = 280;
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
    <Drawer open={open} variant='permanent' sx={{ height: '100vh', }}>
      <IconButton
        aria-label='open-drawer'
        color='inherit'
        edge='start'
        onClick={toggleDrawer}
        size='large'
        sx={{
          ml: 'calc(100% - 60px)',
          mt: '48px',
          width: '50px',
        }}
      >
        {open
          ? <ChevronLeftIcon />
          : <MenuIcon />
        }
      </IconButton>
      <Divider />
      <Calendaer />
    </Drawer>
  );
};

export default ServiceMenu;
