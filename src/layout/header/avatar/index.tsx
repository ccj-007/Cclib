import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import { deepOrange, deepPurple } from '@mui/material/colors';
export default function avatar() {
  return (
    <div className='u-flex-center flex-row-end'>
      <div>your name ！</div>
      <div className={styles.avatar}>
        <Stack direction='row' spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </div>
      <div className={styles.login}>退出</div>
      <div className={styles.logout}>登录</div>
    </div>
  );
}
