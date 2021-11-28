import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid, { GridSize } from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

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
  const columns: { xs: GridSize, md: GridSize; } = {
    xs: 12,
    md: 6,
  };
  const classes = useStyles();

  return (
    <>
      <Toolbar className={ classes.toolBar }>
        <MenuIcon />
      </Toolbar>
      <Grid container spacing={8}>
        <Grid item xs={ columns.xs } md={ columns.md }>
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
