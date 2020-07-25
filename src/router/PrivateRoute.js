
import React from 'react'; 
import {Redirect,Route} from 'react-router-dom';
import { Cookie } from '../utils/storage'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = Cookie.getItem("token")
    console.log('token: ', token);
    return (
        <Route
        {...rest}
         //props 包含值：history，location，match
        //login 页面可以通过 this.props.location.state.from知道是哪个页面过来的,方便登录后直接跳转
        render={props =>
            Boolean(token) ?
            (
                <Component {...props} />
            )
             : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
    )
}
export {
    PrivateRoute
}