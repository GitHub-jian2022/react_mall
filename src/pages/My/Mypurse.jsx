import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../assets/styles/mypurse.scss'

export default class Mypurse extends Component {
  render() {
    const { data } = this.props.location.query
    console.log('data: ', data);
    
    return (
      <div className="mypurse">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >我的钱包</NavBar>

        <div className="container">
          <img src={require(`../../assets/images/purse.png`)} alt="" />
          <div className="tip">我的零钱</div>
            <div className="price"><span>￥</span>{data.num}</div>
          <div className="btns">
            <div>充值</div>
            <div>提现</div>
          </div>
        </div>
      </div>
    )
  }
}
