import * as React from 'react';
import styles from './index.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from "react-redux";


export default function Load() {
  const { loadReducers } = useSelector((state: any) => state)
  console.log("loadReducers组件内实例", loadReducers);
  return (
    loadReducers == true ?
      <div className={styles.mask} >
        <CircularProgress />
      </div > : <div></div>
  );
}