import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'

import My from './My'
import SetUp from './SetUp'
import Collection from './Collection'
import Order from './Order'

import { Layout } from '../../components/index'




class MyPage extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/my" render={() => <Layout><My></My></Layout>}></Route>
                <Route exact path='/my/setup' component={SetUp}></Route>
                <Route exact path='/my/collection' component={Collection}></Route>
                <Route exact path='/my/order' component={Order}></Route>
            </Switch>
        )
    }
}

export default connect()(MyPage)