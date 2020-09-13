import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../assets/styles/browse-record.scss'

export default class BrowseRecord extends Component {
  state = {
    data: [
      {
        title: '戴尔(DELL)成就5880英特尔酷睿i5商用办公台式机电脑整机(i5-10400F 8G 256G 1T 2G独显 三年上门)23.8英寸',
        img: require(`../../assets/images/goods/1.jpg`),
        price: 4699.00
      },
      {
        title: '戴尔(DELL)成就5880英特尔酷睿i5商用办公台式机电脑整机(i5-10400F 8G 256G 1T 2G独显 三年上门)23.8英寸',
        img: require(`../../assets/images/goods/1.jpg`),
        price: 4699.00
      },
      {
        title: '戴尔(DELL)成就5880英特尔酷睿i5商用办公台式机电脑整机(i5-10400F 8G 256G 1T 2G独显 三年上门)23.8英寸',
        img: require(`../../assets/images/goods/1.jpg`),
        price: 4699.00
      },
    ]
  }
  render() {
    
    return (
      <div className="browse-record-page">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >我的足迹</NavBar>
        <div className="browse-record-main">
            <div className="browse-wrap">
                <div className="browse-time">2020-08-25</div>
                <div className="browse-main">
                   {
                     this.state.data.map((item,index) => (
                      <div className="browse-item" key={index}>
                        <img src={item.img} alt=""/>
                        <div className="browse-right">
                            <div className="title">{item.title}</div>
                            <div className="price"><span>￥</span>{item.price}</div>
                        </div>
                      </div>
                     ))
                   }
                </div>
            </div>
        </div>
      </div>
    )
  }
}
