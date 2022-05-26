import React from 'react';
import { useNavigate } from 'react-router-dom'
import SearchBar from "../searchBar";
import RightSidebar from '@/layout/rightSidebar'
import LogoutIcon from '@mui/icons-material/Logout';
import UserInfoBox from './userInfoBox'

export default function HeaderRight() {
  let navigate = useNavigate();



  const jumpLogin = () => {
    navigate('/login')
  }

  return (
    <div className='u-flex-center flex-row-end'>
      <SearchBar></SearchBar>
      <div>
        <UserInfoBox></UserInfoBox>
      </div>
      <div className='mr10 ml10'>
        <RightSidebar></RightSidebar>
      </div>
      <div className='mr10'>
        <LogoutIcon onClick={jumpLogin}></LogoutIcon>
      </div>
    </div>
  );
}
