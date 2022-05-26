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
import { ColorModeContext } from '@/hooks/useColorModeContext'
import { ColorPicker } from '@/components/colorPicker'
import { useDispatch } from 'react-redux'
import { themeOptions } from '@/options/theme'
import { useTranslation } from "react-i18next";
import Storage from '@/utils/localStoage';


type Anchor = 'top' | 'left' | 'bottom' | 'right';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface MyTheme {
  status: {
    main: String
  }
}

export default function RightSidebar() {
  const { t, i18n } = useTranslation();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    switchList: [
      {
        text: '中英切换',
        checked: i18n.language === 'en' ? true : false,
        name: 'language'
      },
      {
        text: '暗黑模式',
        checked: false,
        name: 'dark'
      },
      {
        text: '经典模式',
        checked: false,
        name: 'default'
      }
    ]
  });
  //change theme
  const theme = useTheme<MyTheme>();
  const colorMode = React.useContext(ColorModeContext);
  const dispatch = useDispatch()
  const onGlobalThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let switchIndex = state.switchList.findIndex(item => item.name === event.target.name)
    let strategy = {
      language: () => {
        let lng = i18n.language == 'en' ? 'zh' : 'en'
        i18n.changeLanguage(lng)
        Storage.set('lng', lng)
      },
      dark: () => {
        colorMode.toggleColorMode()
      },
      default: () => {
        dispatch({ type: 'modify', payload: themeOptions })
      }
    }
    for (let i = 0; i < state.switchList.length; i++) {
      const curSwitch = state.switchList[i]
      if (i === switchIndex) {
        curSwitch.checked = !curSwitch.checked
        strategy[event.target.name]()
      } else {
        // reset
        if (curSwitch.checked) {
          strategy[Object.keys(strategy)[i]]()
        }
        curSwitch.checked = false
      }
    }
    setState({ ...state })


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
      <div style={{ width: "100 %" }} className='u-flex-column mt10'>
        <ColorPicker></ColorPicker>
      </div>
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