export type childrenType = {
  path: string;
  name: string;
  meta: {
    icon: string;
  };
};

export type MenusType = {
  path: string;
  name: string;
  meta: {
    icon: string;
  };
  children?: childrenType[];
};
