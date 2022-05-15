import React from 'react';
import './App.css';
import Layout from './page/home';
import Login from './page/login';
import { Route, Routes, Navigate, useRoutes } from 'react-router-dom';
import routes from '@/router/routes'
// import { GlobalStyles } from './style/global';
// import { Global, css } from '@emotion/react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { ColorModeContext } from '@/theme/colorModeContext'
import Alerts from '@/components/alert'
import Load from '@/components/load'


function App() {
  const element = useRoutes(routes)

  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  //@ts-ignore
  const globalTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        // status: {
        //   main: '#000',
        // },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={globalTheme}>
        <Alerts></Alerts>
        <Load></Load>
        <div className='App'>
          {/* <Global styles={GlobalStyles}> */}
          {element}
          {/* </Global> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
