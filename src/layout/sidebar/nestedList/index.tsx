import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
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
const getIconComponent = (menu: MenusType | childrenType) => {
  const icon = menu.meta.icon;
  // @ts-ignore
  return iconList[icon];
};
export default function NestedList() {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  //侧边栏路由跳转
  const jumpModules = (routeURL: any) => {
    navigate(routeURL);
  };
  const changeOpen = () => {
    setOpen(!open);
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          广告位招租
        </ListSubheader>
      }>
      {menuRoutes.map((menus: MenusType, i) => {
        return (
          <div key={i}>
            <ListItemButton onClick={() => changeOpen()}>
              <ListItemIcon>
                {/* <SendIcon /> */}
                {getIconComponent(menus)}
              </ListItemIcon>
              <ListItemText primary={menus.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit>
              {
                menus.children?.map((menu, i) => {
                  return (
                    <Collapse in={open} timeout='auto' unmountOnExit>
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
