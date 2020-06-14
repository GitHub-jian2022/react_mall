import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"


import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Search from './pages/Search'
import Cate from './pages/Cate'
import ListPage from './pages/ListPage'
import Cart from './pages/Cart'
import GoodsDetail from './pages/GoodsDetail'

import My from './pages/My/index'

import { Layout } from './components/index'


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/" exact render={(props) => <Layout><Home></Home></Layout>} />
        <Route exact path="/index" render={()=><Redirect to="/"/>}></Route>
        <Route path="/cate" render={(props) => <Layout><Cate></Cate></Layout>} />
        <Route path="/cart" render={(props) => <Layout><Cart></Cart></Layout>} />
        <Route path="/search" component={Search} />
        <Route path="/listpage/:keyword" component={ListPage} />
        <Route path="/goodsDetail/:id" component={GoodsDetail} />
        
        <Route path="/my" render={(props) =><My></My>} />
      </Switch>
    </Router>
  );
}

export default App;
