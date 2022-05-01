import React from 'react';
import { css, jsx } from '@emotion/react';
const Footer = css`
  color: #fff;
  height: 13vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export default function footer() {
  return (
    <div css={Footer}>
      <div>只给你分享一些好玩的东东 ！</div>
      <div>author@chen</div>
    </div>
  );
}
