import React from 'react';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";

const main = css`
  
`;
export default function Main() {
  const theme = useTheme();
  const store: any = useSelector((state) => state);
  const mode = theme.palette.mode
  const changeWidth = store.layoutReducers.leftSidebar ? '85vw' : '100vw'
  return (
    <Box
      sx={{
        height: '83vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        transition: 'all 0.3s ease',
        width: changeWidth,
        backgroundColor: mode === 'light' ? '#fff' : '#000',
      }}
    >  <div className={styles.warp}>
        <Paper elevation={12}>
          <Outlet></Outlet>
        </Paper>
      </div>
    </Box>

  );
}
