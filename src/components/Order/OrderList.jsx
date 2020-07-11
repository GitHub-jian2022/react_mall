import React, { Component } from 'react'
import OrderItem from './OrderItem'

export default class OrderList extends Component {
  goodsItemClick = (id) => {
    this.props.goodsItemClick(id)
  }
  render() {
    const { order_list } = this.props
    console.log('order_list: ', order_list);
    return (
      <div className="cart-main" style={{ backgroundColor: '#eee' }}>
        {/* 遍历订单商品列表 */}
        <div className="cart-c-body">
          {
            order_list.length > 0 ? order_list.map((item,index) => (
              <OrderItem
                key={index}
                item={item}>
              </OrderItem>
            ))
            : <div>暂无商品</div>
          }
        </div>
      </div>
    )
  }
}
