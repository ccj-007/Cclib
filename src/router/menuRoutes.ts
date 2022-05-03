export const menuRoutes = [
  {
    path: '/home/netSite',
    name: '宝藏网址',
    meta: {
      icon: 'SendIcon'
    },
    children: [{
      path: '/home/netSite/code',
      name: '编程导航',
      meta: {
        icon: 'DraftsIcon'
      },
    }, {
      path: '/home/netSite/design',
      name: '设计指南',
      meta: {
        icon: 'InboxIcon'
      },
    }, {
      path: '/home/netSite/amuse',
      name: '有点意思',
      meta: {
        icon: 'InboxIcon'
      },
    }]
  }, {
    path: '/home/article',
    name: '技术文章',
    meta: {
      icon: 'MenuBookIcon'
    }
  }, {
    path: '/home/suModel',
    name: 'SU模型库',
    meta: {
      icon: 'ApartmentIcon'
    }
  }, {
    path: '/home/plugin',
    name: '桌面小插件',
    meta: {
      icon: 'PivotTableChartIcon'
    }
  }, {
    path: '/home/custom',
    name: '定制头像',
    meta: {
      icon: 'AssignmentIndIcon'
    }
  }
]

