import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Calendar from './ServiceMenus/Calendar';

type Props = {
  open: boolean,
  setOpen: any,
};

const ServiceMenu: React.FC<Props> = ({ open, setOpen }) => {
  const drawerWidth: number = 280;
  const toggleDrawer = () => { setOpen(!open); };
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
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
        position: 'relative',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        whiteSpace: 'nowrap',
        width: drawerWidth,
      },
    }),
  );

  return (
    <Drawer open={open} variant='permanent'>
      <Box
        sx={{
          height: '100vh',
          mt: '48px',
          position: 'fixed',
          width: '279px',
        }}
      >
        <IconButton
          aria-label='open-drawer'
          color='inherit'
          edge='start'
          onClick={toggleDrawer}
          size='large'
          sx={{
            ml: 'calc(100% - 60px)',
            width: '50px',
          }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Divider />
        <Calendar />
      </Box>
    </Drawer>
  );
};

export default ServiceMenu;
