import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Switch from '@mui/material/Switch';
import useTheme from '@mui/material/styles/useTheme';
import { ColorModeContext } from '@/theme/colorModeContext'

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface MyTheme {
  status: {
    main: String
  }
}

export default function RightSidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    switchList: [
      {
        text: '暗黑模式',
        checked: false,
        name: 'dark'
      },
      {
        text: 'header背景切换',
        checked: false,
        name: 'header_backgroundColor'
      }
    ]
  });
  //change theme
  const theme = useTheme<MyTheme>();
  const colorMode = React.useContext(ColorModeContext);

  const onGlobalThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let switchIndex = state.switchList.findIndex(item => item.name === event.target.name)
    state.switchList[switchIndex].checked = event.target.checked
    colorMode.toggleColorMode()
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {state.switchList.map((item, index) => (
          <ListItem button >
            <ListItemText primary={item.text} />
            <Switch
              name={item.name}
              checked={item.checked}
              onChange={onGlobalThemeChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <SettingsApplicationsIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}