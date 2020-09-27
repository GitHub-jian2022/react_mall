import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom"
/* 
    1.  {this.props.children} 是Item渲染子节点内容
    2. selected 判断Item是否选中
    3. onPress 是Item 选中事件
    4. <i className="iconfont icon-findHouse"></i> 字体图片
    5. import { withRouter } from "react-router-dom" 添加路由信息

*/
class Layout extends Component {
  state = {
    data: [
      {
        title: '首页', key: 'Home', icon: <i className="iconfont">&#xe61c;</i>, url: '/index'
      },
      {
        title: '分类', key: 'cate', icon: <i className="iconfont">&#xe600;</i>, url: '/cate'
      },
      {
        title: '购物车', key: 'cart', icon: <i className="iconfont">&#xe678;</i>,url: '/cart'
      },
      {
        title: '我的', key: 'profile', icon: <i className="iconfont">&#xe66c;</i>,url: '/my'
      },
    ]
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff5b05"
          barTintColor="white"
        >
          {
            this.state.data.map((item, index) =>
              <TabBar.Item
                icon={item.icon}
                selectedIcon={item.icon}
                title={item.title}
                key={index}
                selected={this.props.match.url === item.url}
                onPress={() => {
                  this.props.history.push(item.url);
                }}
              >
                {this.props.match.url === item.url && this.props.children}
              </TabBar.Item>
            )
          }
        </TabBar>
      </div>
    )
  }
}

export default withRouter(Layout)