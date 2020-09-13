import React from 'react'
import MyRoutes from './modules/my'

export default [
  {
    path: '/login',
    component: React.lazy( () => import('../pages/Login')),
    exact: true
  },
  {
    path: '/register',
    component: React.lazy( () => import('../pages/Register')),
    exact: true
  },
  {
    path: '/index',
    component: React.lazy( () => import('../pages/Home')),
    exact: true
  },
  {
    path: '/cate',
    component: React.lazy( () => import('../pages/Cate')),
    exact: true
  },
  {
    path: '/cart',
    component: React.lazy( () => import('../pages/Cart')),
    exact: true
  },
  {
    path: '/search',
    component: React.lazy( () => import('../pages/Search')),

  },
  {
    path: '/listpage/:keyword',
    component: React.lazy( () => import('../pages/ListPage')),
  },
  {
    path: '/goodsDetail/:id',
    component: React.lazy( () => import('../pages/GoodsDetail')),
  },
  {
    path: '/createOrder/:id',
    component: React.lazy( () => import('../pages/CreateOrder')),
  },
  ...MyRoutes,
]