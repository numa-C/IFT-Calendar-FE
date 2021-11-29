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
      maxHeight: 48,
      minHeight: '36px !important',
      padding: 0
    }
  }
);

const Calendar = () => {
  const [checked, setChecked] = React.useState([1]);
  const classes = useStyles();
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
  const yearAndMonth = '2021年 11月';

  return (
    <>
      <Toolbar className={classes.toolBar} variant='dense'>
        <IconButton
          aria-label='menu'
          color='inherit'
          edge='start'
          size='small'
          sx={{ mx: 1 }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        <Typography
          component='div'
          variant='subtitle1'
          sx={{ flexGrow: 1 }}
        >
          {yearAndMonth}
        </Typography>
        <IconButton
          aria-label='menu'
          color='inherit'
          edge='start'
          size='small'
        >
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton
          aria-label='menu'
          color='inherit'
          edge='start'
          size='small'
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Toolbar>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: '1px',
            height: 260,
            width: '100%',
          },
        }}
      >
        <Paper elevation={0} sx={{ backgroundColor: 'gray' }} />
      </Box>
      <Divider />
      <Button
        fullWidth
        startIcon={<DateRangeIcon />}
        sx={{
          my: 2,
          pl: 2,
          justifyContent: "start"
        }}
        variant="text"
      >
        カレンダーの追加
      </Button>
      <Box sx={{ overflow: 'scroll' }}>
        {/* マイカレンダー */}
        <Button
          color='warning'
          fullWidth
          startIcon={<KeyboardArrowDownIcon />}
          sx={{
            my: 0,
            pl: 2,
            py: 1,
            justifyContent: "start"
          }}
          variant="text"
        >
          マイカレンダー
        </Button>
        <List sx={{ bgcolor: 'background.paper' }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem disablePadding key={value}>
                <ListItemButton
                  dense
                  role={undefined}
                  onClick={handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      disableRipple
                      edge="start"
                      inputProps={{ 'aria-labelledby': labelId }}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {/* その他のカレンダー */}
        <Button
          color='error'
          fullWidth
          startIcon={<KeyboardArrowDownIcon />}
          sx={{
            my: 0,
            pl: 2,
            py: 1,
            justifyContent: "start"
          }}
          variant="text"
        >
          その他のカレンダー
        </Button>
        <List sx={{ bgcolor: 'background.paper' }}>
          {[4, 5, 6, 7].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  dense
                  role={undefined}
                  onClick={handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      disableRipple
                      edge="start"
                      inputProps={{ 'aria-labelledby': labelId }}
                      tabIndex={-1}
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
