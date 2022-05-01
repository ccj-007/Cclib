type childrenType = {
  path: String,
  name: String,
  meta: {
    icon: String,
  }
}

export interface MenusType {
  path: String,
  name: String,
  meta: {
    icon: String,
  },
  children?: childrenType[],
}

