import React from 'react';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import { Routes, Route } from 'react-router-dom'
import First from './first/index'
import Code from './netSite/code'
import Design from './netSite/design'
import Amuse from './netSite/amuse'
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
          <Routes>
            <Route path='/First' element={<First />} />
            <Route path='/netSite/code' element={<Code />} />
            <Route path='/netSite/design' element={<Design />} />
            <Route path='/netSite/amuse' element={<Amuse />} />
          </Routes>
        </Paper>
      </div>
    </div>
  );
}
