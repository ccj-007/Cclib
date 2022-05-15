import React from 'react';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import { deepOrange, deepPurple } from '@mui/material/colors';
import SearchBar from "../searchBar";
import RightSidebar from '@/layout/rightSidebar'
import { useSelector, useDispatch } from "react-redux";
import { defaultState } from '@/redux/loginInfo/loginInfoReducers'

export default function HeaderRight() {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState(defaultState)
  const { loginInfoReducers } = useSelector((state: any) => state);
  console.log("store", loginInfoReducers);

  //用户信息渲染
  const renderUserInfo = () => {
    if (loginInfoReducers) {
      setUserInfo({ ...userInfo, ...loginInfoReducers })
    }
  }

  React.useEffect(() => {
    renderUserInfo()
  }, [])


  const jumpLogin = () => {
    navigate('/login')
  }

  return (
    <div className='u-flex-center flex-row-end'>
      <SearchBar></SearchBar>
      <div>{userInfo.nickname}</div>
      <div className='mr10'>
        <RightSidebar></RightSidebar>
      </div>
      <div className={styles.avatar}>
        <Stack direction='row' spacing={2}>
          {userInfo.avatar ? <Avatar alt="a" src={userInfo.avatar} /> : <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          }
        </Stack>
      </div>
      <div className={styles.login} onClick={jumpLogin}>退出</div>
      <div className={styles.logout}>登录</div>
    </div>
  );
}
