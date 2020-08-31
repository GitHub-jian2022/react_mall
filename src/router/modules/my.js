import React from 'react'

export default [
  {
    path: '/my',
    component: React.lazy( () => import('../../pages/My/My')),
    exact: true,
  },
  {
    path: '/my/setup',
    component: React.lazy( () => import('../../pages/My/SetUp')),
    exact: true,
    auth: true
  },
  {
    path: '/my/collection',
    component: React.lazy( () => import('../../pages/My/Collection')),
    exact: true,
    auth: true
  },
  {
    path: '/my/order',
    component: React.lazy( () => import('../../pages/My/Order')),
    exact: true,
    auth: true
  },
]