import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { PrivateRoute } from './router/PrivateRoute'
import routes from './router'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        {/* 请求根路径时重定向到 /index 主页 */}
        <Redirect exact from='/' to='/index' />
          {
            routes.map((item,index) => {
              const { component: Component, ...rest } = item
              return <Route
              {...rest}
              render={props =>
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                  {
                    !item.auth ? <Component {...props} />
                    : <PrivateRoute  component={Component} />
                  }
                </Suspense>
              }
              key={index} />
            })
          }
          {/* 路径不匹配显示404页面 */}
          <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
