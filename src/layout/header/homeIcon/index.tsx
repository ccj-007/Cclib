import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'
export default function HomeIcon() {
  const navigate = useNavigate()

  const jumpFirst = () => {
    navigate('/home/first')

  }
  return <div className='u-flex-center ml20' onClick={jumpFirst}>Cclib 资源库</div>;
}
