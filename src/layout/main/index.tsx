import React from 'react';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom'
import Paper from '@mui/material/Paper';

const Main = css`
  height: 83vh;
  overflow-y: auto;
  width: 85vw;
  background-color: #fff;
`;
export default function main() {
  return (
    <div css={Main}>
      <div className={styles.warp}>
        <Paper elevation={12}>
          <Outlet></Outlet>
        </Paper>
      </div>
    </div>
  );
}
