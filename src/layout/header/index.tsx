import React from 'react';
import HomeIcon from './homeIcon';
import HeaderRight from './headerRight';
import { css, jsx } from '@emotion/react';
import useTheme from '@mui/material/styles/useTheme';

interface MyTheme {
  status: {
    main: string
  }
}
export default function Header() {
  const theme = useTheme<MyTheme>();
  let bgStyle = theme.status.main

  const HeaderCSS = css`
  width: 100vw;
  color: #fff;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  background-color: ${bgStyle};
`;

  return (
    <div css={HeaderCSS}>
      <HomeIcon></HomeIcon>
      <HeaderRight></HeaderRight>
    </div>
  );
}
