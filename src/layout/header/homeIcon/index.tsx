import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useSelector, useDispatch } from "react-redux";
import { setLayoutActions } from '@/redux/setLayout/actions'
import { useNavigate } from 'react-router-dom'
export default function HomeIcon() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store: any = useSelector((state) => state);
  const [expandSidebar, setExpandSidebar] = React.useState(true)

  const jumpFirst = () => {
    navigate('/home/first')
  }
  const changeLeftSidebar = () => {
    setExpandSidebar(!expandSidebar)
    //change leftSidebar
    dispatch(setLayoutActions({ leftSidebar: expandSidebar }))
    console.log(store)
  }
  return <div className='u-flex-center '>
    <div className='u-flex-center ml20 mr10' onClick={jumpFirst}>Cclib 资源库</div>
    <ViewListIcon onClick={changeLeftSidebar}></ViewListIcon>
  </div>
}
