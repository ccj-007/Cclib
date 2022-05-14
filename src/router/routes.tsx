import Layout from '@/page/home';
import Login from '@/page/login';
import { Navigate } from 'react-router-dom';
import First from '@/layout/main/first/index'
import Code from '@/layout/main/netSite/code'
import Design from '@/layout/main/netSite/design'
import Amuse from '@/layout/main/netSite/amuse'

import Skill from '@/layout/main/article/skill'
import Share from '@/layout/main/article/share'
import Know from '@/layout/main/article/know'

import ModelLibs from '@/layout/main/suModel/modelLibs'
import UploadModel from '@/layout/main/suModel/uploadModel'

export default [{
  path: '/login',
  element: <Login />,
}, {
  path: '/home',
  element: <Layout />,
  meta: {
    data: '2323',
  },
  children: [{
    path: 'first',
    element: <First />,
  }, {
    path: 'netSite/code',
    element: <Code />,
  }, {
    path: 'netSite/design',
    element: <Design />,
  }, {
    path: 'netSite/amuse',
    element: <Amuse />,
  }, {
    path: 'article/skill',
    element: <Skill />,
  }, {
    path: 'article/share',
    element: <Share />,
  }, {
    path: 'article/know',
    element: <Know />,
  }, {
    path: 'suModel/modelLibs',
    element: <ModelLibs />,
  }, {
    path: 'suModel/uploadModel',
    element: <UploadModel />,
  }]
}, {
  path: '*',
  element: <Navigate to='/login' />
}]