import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const TimerMenu = () => {
  return (
    <>
      <IconButton
        id="time-menu-button"
        aria-controls="timer-menu"
        aria-haspopup="true"
        color='inherit'
        size='large'
      >
        <AlarmOnIcon />
      </IconButton>
    </>
  );
}

export default TimerMenu;
