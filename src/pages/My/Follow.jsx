import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Follow extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >我的关注</NavBar>
      </div>
    )
  }
}
