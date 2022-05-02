declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}

declare module "*.less" {
  const less: { [key: string]: string };
  export default less;
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface experimentalStyled {

  }
  interface alpha {

  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '*.jpg';
declare module '*.png';
declare module '*.ts';



