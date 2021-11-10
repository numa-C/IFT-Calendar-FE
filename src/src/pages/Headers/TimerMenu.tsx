import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';


const TimerrMenu = () => {

  return (
    <>
      <IconButton
        id="user-menu-button"
        aria-controls="user-menu"
        color='inherit'
        aria-haspopup="true"
      >
        <AlarmOnIcon />
      </IconButton>
    </>
  );
}

export default TimerrMenu;
