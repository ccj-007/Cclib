import React from 'react';
import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function MainHeader() {
  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: '100%', paddingTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
        <Typography variant="subtitle1" gutterBottom component="div">
          subtitle1. Lorem ipsum dolor
        </Typography>
      </Box>
    </div>
  );
}
