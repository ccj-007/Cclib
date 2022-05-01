import React from 'react';
import NestedList from './nestedList';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
const Sidebar = css`
  width: 15vw;
  height: 83vh;
  background-color: #eee;
  border-right: 1px solid #858585;
`;
export default function sidebar() {
  return (
    <div css={Sidebar}>
      <NestedList></NestedList>
    </div>
  );
}
