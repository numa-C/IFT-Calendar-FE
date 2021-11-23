import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DateRangeIcon from '@mui/icons-material/DateRange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [checked, setChecked] = React.useState([1]);
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
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


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
        <Divider />

        <Button
          fullWidth
          startIcon={<DateRangeIcon />}
          sx={{
            my: 1,
            pl:2,
            justifyContent: "start"
          }}
          variant="text"
        >
          カレンダーの追加
        </Button>

        {/* マイカレンダー */}
        <AppBar
          color='transparent'
          position='static'
          elevation={0}
        >
          <Toolbar
            disableGutters
            variant='dense'
            className={classes.toolBar}
          >
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{
                mr: 2,
                ml: 1
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Typography variant='subtitle2' component='div' sx={{ flexGrow: 1 }}>
              マイカレンダー
            </Typography>
          </Toolbar>
        </AppBar>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                disablePadding
                key={value}
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* その他のカレンダー */}
        <AppBar
          color='transparent'
          position='static'
          elevation={0}
        >
          <Toolbar
            disableGutters
            variant='dense'
            className={classes.toolBar}
          >
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{
                mr: 2,
                ml: 1
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Typography variant='subtitle2' component='div' sx={{ flexGrow: 1 }}>
              その他のカレンダー
            </Typography>
          </Toolbar>
        </AppBar>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );

};

export default ServiceMenu;
