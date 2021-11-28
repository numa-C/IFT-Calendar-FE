import * as React from 'react';
import { makeStyles } from '@mui/styles';
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
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DateRangeIcon from '@mui/icons-material/DateRange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 64,
      minHeight: '48px !important',
      padding: 0
    }
  }
);

const Calendar = () => {
  const [checked, setChecked] = React.useState([1]);

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
    <>
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

      <Box>
        <Button
          fullWidth
          startIcon={<DateRangeIcon />}
          sx={{
            my: 1,
            pl: 2,
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
          {[4, 5, 6, 7].map((value) => {
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
    </>
  );
};

export default Calendar;
