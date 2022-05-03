import React from 'react';
import { css, jsx } from '@emotion/react';
const Footer = css`
  color: #fff;
  height: 13vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #000;
`;
export default function footer() {
  return (
    <div css={Footer}>
      <div className='mt20'>只给你分享一些好玩的东东 ！</div>
      <div className='mt5'>author@chen</div>
    </div>
  );
}
