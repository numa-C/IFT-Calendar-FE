import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MissionMenu = () => {
  const Drawer = styled(MuiDrawer)(
    ({ theme }) => ({
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        whiteSpace: 'nowrap',
        width: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7.2),
        },
      },
    }),
  );

  return (
    <>
      <Drawer variant='permanent'>
        <List
          sx={{
            height: '100vh',
            mt: '48px',
            overflow: 'scroll',
            position: 'fixed',
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          </ListItem> 
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MissionMenu;
