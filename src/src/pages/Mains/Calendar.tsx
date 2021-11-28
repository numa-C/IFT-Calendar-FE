import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid, { GridSize } from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import TodayIcon from '@mui/icons-material/Today';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 64,
      minHeight: '58px !important',
      padding: 0
    }
  }
);

const Calendar = () => {
  const classes = useStyles();
  const columns: { xs: GridSize, md: GridSize; } = {
    xs: 12,
    md: 6,
  };

  const [calendarStyle, setcalendarStyle] = React.useState(String(0));

  const handleChange = (event: SelectChangeEvent) => {
    setcalendarStyle(event.target.value as string);
  };

  return (
    <>
      <Toolbar className={ classes.toolBar }>
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

      <Grid container spacing={8}>
        <Grid item xs={columns.xs} md={columns.md}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            カレンダー
          </Paper>
        </Grid>

        <Grid item xs={columns.xs} md={columns.md}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            ミッションリスト
          </Paper>
        </Grid>

        <Grid item xs={columns.xs} md={columns.md}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            タスクリスト
          </Paper>
        </Grid>

        <Grid item xs={columns.xs} md={columns.md}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            タスク更新リスト
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
