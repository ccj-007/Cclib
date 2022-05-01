import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { menus } from './menu';
import { MenusType } from './types';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const iconList: any = {
  "SendIcon": <SendIcon />,
  "DraftsIcon": <DraftsIcon />,
  "InboxIcon": <InboxIcon />,
};
const getIconComponent = (menu: MenusType) => {
  const icon = menu.meta.icon;
  // @ts-ignore
  return iconList[icon];
};
export default function NestedList() {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/home/netSite");
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Nested List Items
        </ListSubheader>
      }>
      {menus.map((menu: MenusType, i) => {
        return (
          <div key={i}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {/* <SendIcon /> */}
                {getIconComponent(menu)}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </div>
        );
      })}
      {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary='宝藏网址' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='SU模型库' />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='技术文章' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}
