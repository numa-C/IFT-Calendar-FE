import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 36,
      minHeight: '24px !important',
      padding: 0
    }
  }
);

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

  const classes = useStyles();

  return (
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

      {/* カレンダーエリア / 開閉可能 */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color='transparent'
          position='static'
          elevation={0}
          >
          <Toolbar
            variant='dense'
            className={classes.toolBar}
          >
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Typography variant='subtitle2' component='div' sx={{ flexGrow: 1 }}>
              2021年 11月
            </Typography>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <ArrowUpwardIcon />
            </IconButton>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <ArrowDownwardIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: '2px',
              width: '100%',
              height: 240,
            },
          }}
        >
          <Paper elevation={0} />
        </Box>
      </Box>

      <Divider />

      {/* <List>
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
      </List> */}
    </Drawer>
  );

};

export default ServiceMenu;
