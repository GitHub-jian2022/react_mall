import React, { Component } from 'react'
import './GoodsListItem.scss'
export default class GoodsListItem extends Component {

  goodsItemClick = (id) => {
    this.props.goodsItemClick(id)
  }
  render() {
    const { item } = this.props
    return (
      <div
       className='goods_list_item'
        key={item.id}
        onClick={this.goodsItemClick.bind(this, item.id)}
      >
        <div className='goods_img_box'>
          <img alt='' src={item.goods_img}></img>
        </div>
        <div className='goods_list_item_content'>
          <div className='content_wrap_2 title'>{item.goods_title}</div>
          <div style={{ color: 'red' }}>¥{item.price}</div>
        </div>
      </div>
    )
  }
}
