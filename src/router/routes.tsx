import Layout from '@/page/home';
import Login from '@/page/login';
import { Navigate } from 'react-router-dom';
import First from '@/layout/main/first/index'
import Code from '@/layout/main/netSite/code'
import Design from '@/layout/main/netSite/design'
import Amuse from '@/layout/main/netSite/amuse'

export default [{
  path: '/login',
  element: <Login />
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
  }]
}, {
  path: '*',
  element: <Navigate to='/login' />
}]