import React from 'react';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import { Routes, Route } from 'react-router-dom'
import NetSite from '../../page/netSite'
const Main = css`
  height: 83vh;
  width: 85vw;
  background-color: #fff;
`;
export default function main() {
  return (
    <div css={Main}>
      <div className={styles.warp}>
        <Routes>
          <Route path='/netSite' element={<NetSite />} >netSite</Route>
        </Routes>
      </div>
    </div>
  );
}
