import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';


const TimerMenu = () => {

  return (
    <>
      <IconButton
        id="time-menu-button"
        // aria-controls="timer-menu" // TODO: Should set in after id prop for timer menu is created.
        // aria-haspopup="true" // // TODO: Should set in after timer menu created.
        color='inherit'
        size='large'
      >
        <AlarmOnIcon />
      </IconButton>
    </>
  );
}

export default TimerMenu;
