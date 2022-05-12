import React from 'react';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';

const main = css`
  
`;
export default function Main() {
  const theme = useTheme();
  const mode = theme.palette.mode
  return (
    <Box
      sx={{
        height: '83vh',
        overflowY: 'auto',
        overflowX: 'hidden',

        width: '85vw',
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
