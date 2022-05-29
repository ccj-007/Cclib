import React from 'react';
import HomeIcon from './homeIcon';
import HeaderRight from './headerRight';
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux'
import { isPC } from '@/utils/mobile.ts'

interface MyTheme {
  status: {
    main: string
  }
}
export default function Header() {
  const store: any = useSelector(store => store)
  const changeH = store.layoutReducers.leftSidebar && isPC() ? '7vh' : '58px'

  const color = store.themeReducers.primary.main || '#000'
  const HeaderCSS = css`
  width: 100vw;
  color: #fff;
  height: ${changeH};
  display: flex;
  justify-content: space-between;
  background-color: ${color};
`;

  return (
    <div css={HeaderCSS}>
      <HomeIcon></HomeIcon>
      <HeaderRight></HeaderRight>
    </div>
  );
}
