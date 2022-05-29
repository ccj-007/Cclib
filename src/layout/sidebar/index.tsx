import React from 'react';
import NestedList from './nestedList';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import { useSelector } from "react-redux";
import { isPC } from '@/utils/mobile.ts'
export default function Sidebar() {
  const store: any = useSelector((state) => state);
  const theme = useTheme();
  const mode = theme.palette.mode
  const changeWidth = store.layoutReducers.leftSidebar && isPC() ? '15vw' : '0vw'

  return (
    <Box
      style={{}}
      sx={{
        width: changeWidth,
        height: '83vh',
        backgroundColor: mode === 'light' ? '#eee' : '#000',
        overflow: 'hidden',
        overflowY: 'auto',
        transition: 'all .5s ease'
      }}
    > <NestedList></NestedList>
    </Box>
  );
}
