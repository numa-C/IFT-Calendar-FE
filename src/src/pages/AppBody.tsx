
import * as React from 'react';
import Main from './Main';
import MissionMenu from './MissionMenu';
import ServiceMenu from './ServiceMenu';

const AppBody = () => {

  return (
    <>
      <MissionMenu />
      <ServiceMenu />
      <Main />
    </>
  );
};

export default AppBody;
