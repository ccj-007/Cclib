export const menuRoutes = [
  {
    path: '/home/netSite',
    name: 'netSite',
    meta: {
      icon: 'SendIcon',
    },
    children: [
      {
        path: '/home/netSite/code',
        name: 'code',
        meta: {
          icon: 'DraftsIcon',
        },
      },
      {
        path: '/home/netSite/design',
        name: 'design',
        meta: {
          icon: 'InboxIcon',
        },
      },
      {
        path: '/home/netSite/amuse',
        name: 'amuse',
        meta: {
          icon: 'InboxIcon',
        },
      },
    ],
  },
  {
    path: '/home/article',
    name: 'article',
    meta: {
      icon: 'MenuBookIcon',
    },
    children: [
      {
        path: '/home/article/skill',
        name: 'skill',
        meta: {
          icon: 'DraftsIcon',
        },
      },
      {
        path: '/home/article/share',
        name: 'share',
        meta: {
          icon: 'InboxIcon',
        },
      },
      {
        path: '/home/article/know',
        name: 'know',
        meta: {
          icon: 'InboxIcon',
        },
      },
    ],
  },
  {
    path: '/home/suModel',
    name: 'suModel',
    meta: {
      icon: 'ApartmentIcon',
    },
    children: [
      {
        path: '/home/suModel/modelLibs',
        name: 'modelLibs',
        meta: {
          icon: 'DraftsIcon',
        },
      },
      {
        path: '/home/suModel/uploadModel',
        name: 'uploadModel',
        meta: {
          icon: 'InboxIcon',
        },
      },
    ],
  },
  {
    path: '/home/plugin',
    name: 'plugin',
    meta: {
      icon: 'PivotTableChartIcon',
    },
  },
  {
    path: '/home/custom',
    name: 'custom',
    meta: {
      icon: 'AssignmentIndIcon',
    },
  },
];
