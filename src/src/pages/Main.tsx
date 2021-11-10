import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid, {GridSize} from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

function Main() {
  const columns: { xs: GridSize, md: GridSize; } = {
    xs: 12,
    md: 6, // 900px
  };

  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='xl' sx={{ mt: 6, mb: 6 }}>
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

      </Container>
    </Box>
  );
}

export default Main;
