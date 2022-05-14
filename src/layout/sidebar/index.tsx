import React from 'react';
import NestedList from './nestedList';
import { css, jsx } from '@emotion/react';
import styles from './index.module.css';
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

export default function Sidebar() {
  const theme = useTheme();
  const mode = theme.palette.mode
  return (
    <Box
      sx={{
        width: '15vw',
        height: '83vh',
        backgroundColor: mode === 'light' ? '#eee' : '#000',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    > <NestedList></NestedList>
    </Box>
  );
}
