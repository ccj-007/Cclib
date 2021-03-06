declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.less' {
  const less: { [key: string]: string };
  export default less;
}

declare module '@reduxjs/toolkit' {
  type combineReducers = {};
}

declare module 'react-i18next' {
  export const useTranslation = (): any => {};
  export const initReactI18next;
}
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      main: string;
    };
  }
  interface ThemeOptions {
    status?: {
      main?: string;
    };
  }
  interface experimentalStyled {}
  interface alpha {}
  interface ThemeProvider {}
  interface createTheme {
    status: {
      main: string;
    };
  }
}
declare module '@mui/styles' {
  interface useTheme {}
}

declare module 'react-swipeable-views' {}
declare module 'i18next' {}

declare module '*.jpg';
declare module '*.png';
declare module '*.ts';
declare module 'react-color';
