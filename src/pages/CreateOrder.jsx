import React, { Component } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';
import '../assets/styles/CreateOrder.scss'

export default class CreateOrder extends Component {
  state = {
    user: {},
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    console.log('user: ', user);
    this.setState({ user })
  }
  render() {
    const { user } = this.state
    return (
      <div className="create-order-page">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >确认订单</NavBar>

        {/* 收货地址 */}
        <div className="address">
          <img className="addr-icon" src={require(`../assets/images/address-b.svg`)} alt="" />
          <div className="info">
            <div className="info-l">
              <div className="contact">
                <span className="username">{user.username}</span>
                <span>{user.phone}</span>
              </div>
              <div className="addr">广东省广州市</div>
            </div>
            <div className="info-r"><Icon type={'right'} /></div>
          </div>
        </div>

        <div className="order">
          <div className="title">
            已选商品
          </div>
          <div className="order-item">
            <img src={require(`../assets/images/goods/1.jpg`)} alt=""/>
            <div className="order-info-r">
              <div className="left">
                <div className="title">戴尔(DELL)成就5880英特尔酷睿i5商用办公台式机电脑整机(i5-10400F 8G 256G 1T 2G独显 三年上门)23.8英寸</div>
                <div className="desc">内存容量:16G;硬盘容量:512G固态硬盘</div>
              </div>
              <div className="right">
                <div className="price">10.00</div>
                <div className="count">x1</div>
              </div>
            </div>
          </div>
        </div>

       <div className="calculate">
         <div className="amount">
           <span>商品金额</span>
           <span className="price">¥ 10.00</span>
         </div>
         <div className="freight">
           <span>运费</span>
           <span className="price">¥ 0.00</span>
         </div>
         <div className="total-price">
           总价：<span>¥ 10.00</span>
         </div>

         <Button type="primary">立即支付</Button>
       </div>
      </div>
    )
  }
}
