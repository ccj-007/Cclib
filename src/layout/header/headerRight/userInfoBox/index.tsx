import * as React from 'react';
import styles from './index.module.css';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useSelector, useDispatch } from "react-redux";
import { defaultState } from '@/redux/loginInfo/loginInfoReducers'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
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
    console.log(userInfo)
  }, [])
  const handleClose = () => {
    setAnchorEl(null);
  };
  function getLocalTime(n: any) {
    return new Date(n).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Stack direction='row' spacing={2}>
        {userInfo.avatar ? <Avatar alt="a" src={userInfo.avatar} onClick={handleClick} /> : <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleClick}>OP</Avatar>
        }
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>用户名</ListItemText>
              <Typography variant="body2" color="text.secondary">
                {userInfo.nickname}
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>用户出生日期</ListItemText>
              <Typography variant="body2" color="text.secondary">
                {getLocalTime(Date.parse(userInfo.create_time))}
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>用户ID</ListItemText>
              <Typography variant="body2" color="text.secondary">
                {userInfo.uid}
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>权限</ListItemText>
              <Typography variant="body2" color="text.secondary">
                默认权限
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    </div>
  );
}