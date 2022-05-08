export interface childrenType {
  path: string,
  name: string,
  meta: {
    icon: string,
  }
}

export interface MenusType {
  path: string,
  name: string,
  meta: {
    icon: string,
  },
  children?: childrenType[],
}

