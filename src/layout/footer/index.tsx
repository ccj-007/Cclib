import React from 'react';
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux'

export default function Footer() {
  const store: any = useSelector(store => store)
  const color = store.themeReducers.primary.main || '#000'
  const FooterCSS = css`
  color: #fff;
  height: 13vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${color};
`;
  return (
    <div css={FooterCSS}>
      <div className='mt20'>只给你分享一些好玩的东东 ！</div>
      <div className='mt5'>author@chen</div>
    </div>
  );
}
