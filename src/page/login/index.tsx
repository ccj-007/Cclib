import React from 'react';
import styles from './index.module.css';
import loginBg from '@/static/loginBg.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
export default function login() {
  return (
    <div className={styles.wrap}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='200'
            width='345'
            image={loginBg}
            alt='loading....'
          />
          <Link className={styles.jump} to='/home/first'>
            点击进入
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
}
