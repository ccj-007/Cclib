export type LayoutObj = {
  leftSidebar: boolean;
};
export type LayoutActions = {
  type: string;
  payload: {
    leftSidebar: boolean;
  };
};

export const setLayoutActions = (payload: LayoutObj): LayoutActions => ({
  type: 'change',
  payload: payload,
});
