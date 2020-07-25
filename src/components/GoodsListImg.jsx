import React, { Component } from 'react'
import '../assets/styles/GoodsListImg.scss'

export default class GoodsListImg extends Component {
  
  goodsItemClick = (id) => {
    this.props.goodsItemClick(id)
  }
  render() {
    const { goodsList } = this.props
    return (
      <div className='list'>
        {goodsList.map((item, index) => (
          <div
            className='list_item'
            key={index}
            onClick={this.goodsItemClick.bind(this, item.id)}
          >
            <div className='img_box'>
              <img alt='' src={item.goods_img}></img>
            </div>
            <div className='list_item_content'>
              <div className='title'>{item.goods_title}</div>
              <div className='desc'>{item.desc}</div>
              <div
              className='list_item_content_bottom'>
                <div className='price'>
                  ¥<span> {item.price}</span>
                </div>
                <div className='sale'>
                  销量<span> {item.sales}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
