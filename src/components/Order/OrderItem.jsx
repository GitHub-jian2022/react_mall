import React, { Component } from 'react'
import { Icon, Tag } from 'antd-mobile'
import './OrderItem.scss'

export default class OrderItem extends Component {

  onChange = (selected) => {
    console.log(`tag selected: ${selected}`);
  }
  render() {
    const { item } = this.props
    return (
      <div className='order_item'>
        {/* 店铺名称 */}
        <div className='storeName'>
          <div>
            <img src={item.storeLogo} alt='暂无logo'></img>
            <span>{item.storeName}</span>
            <Icon type='right' color='gray'></Icon>
          </div>
        </div>
        {/* 订单信息 */}
        <div className='order_info'>
        {
          item.orderItems.map((jtem,index) => (
            <div className='order_info_item' key={index}>
              {/* 商品图片 */}
              <img src={jtem.goods_img} alt='暂无图片'></img>
              {/* 商品简介 */}
              <div className='order_info_item_r'>
                <div className='item_r_top'>
                  <div className='name'>{jtem.name}</div>
                  <div className='price'>
                    <div>¥ {jtem.price}</div>
                    <div className='count'>x{jtem.quantity}</div>
                  </div>
                </div>
                <div className="tag-container">
                  <Tag small>{jtem.sku}</Tag>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}