import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { menuRoutes } from '../../../router/menuRoutes';
import { MenusType, childrenType } from '../../../router/types';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { FamilyRestroomRounded, LensTwoTone } from '@mui/icons-material';
import { AnyListenerPredicate } from '@reduxjs/toolkit/dist/listenerMiddleware/types';
import Swiper from './swiper'

const iconList: any = {
  "SendIcon": <SendIcon />,
  "DraftsIcon": <DraftsIcon />,
  "InboxIcon": <InboxIcon />,
  "CoPresentIcon": <CoPresentIcon />,
  "MenuBookIcon": <MenuBookIcon />,
  "AssignmentIndIcon": <AssignmentIndIcon />,
  "PivotTableChartIcon": <PivotTableChartIcon />,
  "ApartmentIcon": <ApartmentIcon />,

};

type openType = { open: boolean }
type MenusOpenType = MenusType & openType

const getIconComponent = (menu: MenusType | childrenType) => {
  const icon = menu.meta.icon;
  // @ts-ignore
  return iconList[icon];
};
export default function NestedList() {
  let initOpen: any = Array.from({ length: 5 }).fill(true)

  const [openList, setOpenList] = useState(initOpen)

  const navigate = useNavigate();
  //侧边栏路由跳转
  const jumpModules = (routeURL: any) => {
    navigate(routeURL);
  };
  const changeOpen = (e: any, i: number) => {
    openList[i] = !openList[i]
    setOpenList([...openList])
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <div className={styles.swiperBox}>
          <Swiper></Swiper>
        </div>
      }>
      {menuRoutes.map((menus: MenusType, i: number) => {
        return (
          <div key={i}>
            <ListItemButton onClick={() => changeOpen(e, i)}>
              <ListItemIcon>
                {/* <SendIcon /> */}
                {getIconComponent(menus)}
              </ListItemIcon>
              <ListItemText primary={menus.name} />
              {openList[i] ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>

            <Collapse in={openList[i]} timeout='auto' unmountOnExit>
              {
                menus.children?.map((menu: childrenType) => {
                  return (
                    <Collapse in={openList[i]} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => jumpModules(menu.path)}>
                          <ListItemIcon>
                            {getIconComponent(menu)}
                          </ListItemIcon>
                          <ListItemText primary={menu.name} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  )
                })
              }
            </Collapse>
          </div>
        );
      })}
    </List >
  );
}
function state(state: any, arg1: (MenusOpenTypes: any) => void) {
  throw new Error('Function not implemented.');
}

function item(item: any, arg1: (MenusOpenTypes: any) => void) {
  throw new Error('Function not implemented.');
}

function e(e: any): void {
  throw new Error('Function not implemented.');
}

