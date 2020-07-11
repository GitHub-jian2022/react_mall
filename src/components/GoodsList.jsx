import React, { Component } from 'react'

export default class GoodsList extends Component {

  goodsItemClick = (id) => {
    this.props.goodsItemClick(id)
  }
  render() {
    const { goodsList } = this.props
    return (
      <div>
        {goodsList.map((item, index) => (
          <div
            style={styles.list_item}
            key={index}
            onClick={this.goodsItemClick.bind(this, item.id)}
          >
            <div style={styles.img_box}>
              <img alt='' src={item.goods_img} style={{ width: 100, height: '100%' }}></img>
            </div>
            <div style={styles.list_item_content}>
              <div className='content_wrap_2'>{item.goods_title}</div>
              <div style={{ color: 'red' }}>¥{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  list_item: {
    padding: 15,
    display: 'flex',
    background: '#fff',
    borderBottomWidth: 8,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid'
  },
  img_box: {
    height: 120,
    marginRight: 15
  },
  list_item_content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
}