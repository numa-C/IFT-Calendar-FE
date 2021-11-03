import * as React from 'react';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';


interface AppBarProps extends MuiAppBarProps { open?: boolean };

const AppBar = styled(MuiAppBar, )<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const AllServicesMenu = () => {
  const [open, setState] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    };
    setState(!open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto", marginTop: "64px" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"top"}>
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

        <Drawer
          anchor={"top"}
          open={open}
          onClose={toggleDrawer}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
