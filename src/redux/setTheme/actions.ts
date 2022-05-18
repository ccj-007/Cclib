export type ThemeObj = {
  primary: {
    main: string;
  };
  secondary: {
    main: string;
  };
};
export type ThemeActions = {
  type: string;
  payload: ThemeObj;
};

export const setThemeActions = (obj: ThemeObj): ThemeActions => ({
  type: 'modify',
  payload: obj,
});
