import React from 'react'

export default [
  {
    path: '/my',
    component: React.lazy( () => import('../../pages/My/My')),
    exact: true,
  },
  {
    path: '/my/collection',
    component: React.lazy( () => import('../../pages/My/Collection')),
    auth: true
  },
  {
    path: '/my/follow',
    component: React.lazy( () => import('../../pages/My/Follow')),
    auth: true
  },
  {
    path: '/my/browserecord',
    component: React.lazy( () => import('../../pages/My/BrowseRecord')),
    auth: true
  },
  {
    path: '/my/purse',
    component: React.lazy( () => import('../../pages/My/Mypurse')),
    auth: true
  },
  {
    path: '/my/setup',
    component: React.lazy( () => import('../../pages/My/SetUp')),
    auth: true
  },
  {
    path: '/my/order',
    component: React.lazy( () => import('../../pages/My/Order')),
    auth: true
  },
]