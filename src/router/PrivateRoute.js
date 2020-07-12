
import React from 'react'; 
import {Redirect,Route} from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
         //props 包含值：history，location，match
        //login 页面可以通过 this.props.location.state.from知道是哪个页面过来的,方便登录后直接跳转
        render={props =>
            Boolean(localStorage.getItem("token")) ?
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
);
export {
    PrivateRoute
}