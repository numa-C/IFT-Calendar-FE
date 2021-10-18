// import Head from 'next/head';
// import Image from 'next/image';
// import { NextPage } from 'next';
// import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { userSlice } from '../state/ducks/user';

import { Button } from '@material-ui/core';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch(); 
  const user = useSelector((state: RootState) => state.user);

  const handleConfirm = ():void => {
    console.log(user);
  };

  const handleUpdate = () => {
    dispatch(
      userSlice.actions.updateUser({
        name: 'name',
        age: 28,
        email: 'email',
        token: 'token',
        history: [],
      })
    )
  };

  const handleReset = () => {
    dispatch(userSlice.actions.reset())
  };

  const handleAddHistory = () => {
    dispatch(userSlice.actions.addHistory('push'))
  };

  return (
    <div>
      <h1>storeの動作確認</h1>
      <Button variant="contained" onClick={handleConfirm}>CONFIRM</Button>{ ' ' }

      <Button variant="contained" color="primary" onClick={handleUpdate}>UPDATE</Button>{ ' ' }

      <Button variant="contained" color="secondary" onClick={handleReset}>RESET</Button>{ ' ' }

      <Button variant="contained" color="primary" onClick={handleAddHistory}>ADD_HISTORY</Button>{' '}

      <Button variant="contained" disabled>Disabled</Button>{ ' ' }
    </div>
  )
};

export default HomePage;
