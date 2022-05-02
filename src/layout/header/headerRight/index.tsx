import React from 'react';
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import { deepOrange, deepPurple } from '@mui/material/colors';
import SearchBar from "../searchBar";

export default function HeaderRight() {
  let navigate = useNavigate();
  const jumpLogin = () => {
    navigate('/login')
  }

  return (
    <div className='u-flex-center flex-row-end'>
      <SearchBar></SearchBar>
      <div>your name ！</div>
      <div className={styles.avatar}>
        <Stack direction='row' spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </div>
      <div className={styles.login} onClick={jumpLogin}>退出</div>
      <div className={styles.logout}>登录</div>
    </div>
  );
}
