import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid, { GridSize } from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodayIcon from '@mui/icons-material/Today';


const useStyles = makeStyles(
  {
    toolBar: {
      maxHeight: 64,
      minHeight: '58px !important',
      padding: 0
    }
  }
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Calendar = () => {
  const classes = useStyles();
  const columns: { xs: GridSize, md: GridSize; } = {
    xs: 12,
    md: 6,
  };

  return (
    <>
      <Toolbar className={ classes.toolBar }>
        <Stack direction="row" spacing={2}>
          <Button
            size="medium"
            startIcon={<TodayIcon />}
            variant="outlined"
          >
            今日
          </Button>
          <IconButton
            aria-label="calendar-back"
            color="primary"
            size="small"
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="calendar-forward"
            color="primary"
            size="small"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Item elevation={0} sx={{ fontWeight: 'bold', fontSize: 18 }}>
          2021年 11月
        </Item>
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
