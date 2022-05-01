import React from 'react';
import HomeIcon from './homeIcon';
import Avatar from './avatar';
import { css, jsx } from '@emotion/react';

const Header = css`
  width: 100vw;
  color: #fff;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  background-color: #000;
`;
export default function header() {
  return (
    <div css={Header}>
      <HomeIcon></HomeIcon>
      <Avatar></Avatar>
    </div>
  );
}
