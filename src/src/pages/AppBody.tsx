
import * as React from 'react';
import Main from './Main';
import MissionMenu from './MissionMenu';
import ServiceMenu from './ServiceMenu';

const AppBody = () => {
  const [open, setOpen] = React.useState(true); // should be false for default

  return (
    <>
      <MissionMenu />
      <ServiceMenu open={open} setOpen={setOpen} />
      <Main open={open} />
    </>
  );
};

export default AppBody;
