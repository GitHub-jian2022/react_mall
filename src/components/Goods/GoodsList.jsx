import React, { Component } from 'react'
import GoodsListItem from './GoodsListItem'
export default class GoodsList extends Component {

  goodsItemClick = (id) => {
    this.props.goodsItemClick(id)
  }
  render() {
    const { goodsList } = this.props
    return (
      <div className='goodsList'>
        {
          goodsList.map((item, index) => (
          <GoodsListItem
            item={item}
            key={index}
            goodsItemClick={this.props.goodsItemClick} 
          />
        ))}
      </div>
    )
  }
}
