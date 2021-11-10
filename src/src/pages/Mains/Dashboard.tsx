import * as React from 'react';

import Grid, { GridSize } from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Dashboard = () => {
  const columns: { xs: GridSize, md: GridSize; } = {
    xs: 12,
    md: 6, // 900px
  };

  return (
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
  );
};

export default Dashboard;
