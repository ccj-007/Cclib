import * as React from 'react';
import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom'
import { menuRoutes } from '@/router/menuRoutes'
import { MenusType, childrenType } from '@/router/types'
export default function MainHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  let [routeOneTitle, setRouteOneTitle] = React.useState('')
  let [routeTwoTitle, setRouteTwoTitle] = React.useState('')
  const pathname = location.pathname
  console.log(location);

  //获取当前页面对应路由的name
  const getCurRouteName = (menuRoutes: MenusType[], pathname: string) => {
    menuRoutes.forEach((parents: MenusType) => {
      if (pathname.includes(parents.path)) {
        setRouteOneTitle(parents.name)
      }
      parents.children && parents.children.forEach((child: childrenType) => {
        if (child.path === pathname) {
          setRouteTwoTitle(child.name)
        }
      })
    })
  }

  React.useEffect(() => {
    getCurRouteName(menuRoutes, pathname)
  }, [])

  const jumpHome = () => {
    navigate('/home/first')
  }

  const jumpSite = () => {
    navigate(pathname)
  }

  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: '100%', paddingTop: '10px', paddingLeft: '20px', textAlign: 'left' }}>
        <Typography variant="subtitle1" gutterBottom component="div">
          <div className='f12 '>
            <span className='cur' onClick={jumpHome}>首页</span>
            <span> / </span>
            <span className='cur gray' onClick={jumpSite}>{routeOneTitle}</span>
            <span> / </span>
            <span className='cur gray' onClick={jumpSite}>{routeTwoTitle}</span>
          </div>
        </Typography>
      </Box>
    </div>
  );
}
