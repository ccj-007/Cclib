import React from 'react';
import HomeIcon from './homeIcon';
import HeaderRight from './headerRight';
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux'
interface MyTheme {
  status: {
    main: string
  }
}
export default function Header() {
  const store: any = useSelector(store => store)
  const color = store.themeReducers.primary.main || '#000'
  const HeaderCSS = css`
  width: 100vw;
  color: #fff;
  height: 7vh;
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
