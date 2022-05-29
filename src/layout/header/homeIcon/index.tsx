import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useSelector, useDispatch } from "react-redux";
import { setLayoutActions } from '@/redux/setLayout/actions'
import { useNavigate } from 'react-router-dom'
import { isPC } from '@/utils/mobile.ts'
import MobileLeftSide from './mobileLeftSide'
export default function HomeIcon() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store: any = useSelector((state) => state);
  const [expandSidebar, setExpandSidebar] = React.useState(true)
  const [expandMoileDrawer, setExpandMoileDrawer] = React.useState(false)
  const isPc = isPC()
  const jumpFirst = () => {
    navigate('/home/first')
  }
  const changeLeftSidebar = () => {
    //if it is mobile quit
    if (!isPc) {
      setExpandMoileDrawer(!expandMoileDrawer)
    }
    setExpandSidebar(!expandSidebar)
    //change leftSidebar
    dispatch(setLayoutActions({ leftSidebar: expandSidebar }))
    console.log(store)
  }

  const setMobileExpand = (expand: boolean) => {
    setExpandMoileDrawer(expand)
    console.log("获取伸张数据", expand);
  }
  return <div className='u-flex-center '>
    <div className='u-flex-center ml20 ' style={{ display: isPc ? 'block' : 'none' }} onClick={jumpFirst}>Cclib 资源库</div>
    <div className='ml20 mt5'>
      <ViewListIcon onClick={changeLeftSidebar}></ViewListIcon>
    </div>
    <div style={{ display: !isPc && expandMoileDrawer ? 'block' : 'none' }}>
      <MobileLeftSide expand={expandMoileDrawer} getExpand={setMobileExpand}></MobileLeftSide>
    </div>
  </div >
}
