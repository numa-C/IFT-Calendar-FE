import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodayIcon from '@mui/icons-material/Today';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
  open: boolean,
};

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 64,
      minHeight: '58px !important',
      padding: 0,
      top: '48px',
    }
  }
);

const Calendar: React.FC<Props> = ({ open }) => {
  const [calendarStyle, setcalendarStyle] = React.useState(String(0));
  const classes = useStyles();
  const handleChange = (event: SelectChangeEvent) => {
    setcalendarStyle(event.target.value as string);
  };

  return (
    <>
      <Toolbar className={classes.toolBar} sx={{ width: '100%', }}>
        <Stack direction='row' spacing={2}>
          <Button
            size='medium'
            startIcon={<TodayIcon />}
            variant='outlined'
          >
            今日
          </Button>
          <IconButton
            aria-label='calendar-back'
            color='primary'
            size='small'
          >
            <ArrowBackIosIcon fontSize='small' />
          </IconButton>
          <IconButton
            aria-label='calendar-forward'
            color='primary'
            size='small'
          >
            <ArrowForwardIosIcon fontSize='small' />
          </IconButton>
        </Stack>
        <Typography
          color='inherit'
          component='h1'
          noWrap
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            pl: 2
          }}
          variant='h6'
          >
          2021年 11月
        </Typography>
        <Box sx={{ minWidth: 80 }}>
          <FormControl
            fullWidth
            margin='dense'
            size='small'
            variant='outlined'
          >
            <InputLabel
              id='calendar-select-label'
              shrink
              sx={{ fontSize: 12 }}
            >
              カレンダー
            </InputLabel>
            <Select
              id='calendar-select'
              label='calendar'
              labelId='calendar-select-label'
              onChange={handleChange}
              value={calendarStyle}
            >
              <MenuItem value={0}>日</MenuItem>
              <MenuItem value={1}>週</MenuItem>
              <MenuItem value={2}>月</MenuItem>
              <MenuItem value={3}>年</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <IconButton
          aria-label='calendar-mini-menu'
          color='primary'
          size='small'
          sx={{ ml: 1, p: 1.5}}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Toolbar>

      <Box sx={{  position: 'static', bgcolor: '#cfe8fc', height: 'calc(100vh - 120px)', mt: '50px' }}>
        <Box
          sx={{
            bgcolor: 'yellow',
            height: 'calc(100vh - 120px)',
            overflow: 'scroll',
            width: '100%',
          }}
        >
          {/* カレンダー本体を記述 */}
          <Box sx={{ height: '100vh' }}>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
