import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Calendar from './Mains/Calendar';
import Dashboard from './Mains/Dashboard';

type Props = {
  open: boolean,
};

const Main: React.FC<Props> = ({ open }) => {

  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        flexGrow: 1,
      }}
    >
      <Container
        fixed
        maxWidth='xl'
        sx={{ mt: 6, mb: 6, height: 'calc(100vh - 48px)', }} >
        {/* <Dashboard /> */}
        <Calendar open={open} />
      </Container>
    </Box>
  );
}

export default Main;
