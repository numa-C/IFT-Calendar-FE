import * as React from 'react';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Toolbar from '@mui/material/Toolbar';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import LayersIcon from '@mui/icons-material/Layers';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ServiceMenu = () => {
  const drawerWidth: number = 240;
  const [open, setOpen] = React.useState(false);
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
    <React.Fragment>
      <Drawer variant='permanent' open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
        </Toolbar>
        <List>
          <ListItemIcon>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
              }}
            >
              {open
                ? <ChevronLeftIcon />
                : <MenuIcon />
              }
            </IconButton>
          </ListItemIcon>
          <ListSubheader inset>Service Menu</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Orders' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Customers' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Reports' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='Integrations' />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default ServiceMenu;
