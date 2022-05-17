import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ViewListIcon from '@mui/icons-material/ViewList';

import { useNavigate } from 'react-router-dom'
export default function HomeIcon() {
  const navigate = useNavigate()

  const jumpFirst = () => {
    navigate('/home/first')

  }
  return <div className='u-flex-center '>
    <div className='u-flex-center ml20 mr10' onClick={jumpFirst}>Cclib 资源库</div>
    <ViewListIcon></ViewListIcon>
  </div>
}
