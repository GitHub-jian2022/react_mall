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
class Index extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#ff5b05"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="Home"
                        icon={<i className="iconfont">&#xe61c;</i>
                        }
                        selectedIcon={<i className="iconfont">&#xe601;</i>
                        }
                        selected={this.props.match.url === '/'}
                        onPress={() => {
                            this.props.history.push("/");
                        }}
                    >
                        {this.props.match.url === '/' && this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont">&#xe612;</i>
                        }
                        selectedIcon={<i className="iconfont">&#xe600;</i>}
                        title="分类"
                        key="cate"
                        selected={this.props.match.url === '/cate'}
                        onPress={() => {
                            this.props.history.push("/cate");
                        }}
                    >
                        {this.props.match.url === '/cate' && this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont">&#xe748;
                        </i>
                        }
                        selectedIcon={<i className="iconfont">&#xe678;</i>}
                        title="购物车"
                        key="cart"
                        selected={this.props.match.url === '/cart'}
                        onPress={() => {
                            this.props.history.push("/cart");
                        }}
                    >
                        {this.props.match.url === '/cart' && this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont">&#xe613;</i>}
                        selectedIcon={<i className="iconfont">&#xe66c;</i>}
                        title="我的"
                        key="profile"
                        selected={this.props.match.url === '/my'}
                        onPress={() => {
                            this.props.history.push("/my");
                        }}
                    >
                        {this.props.match.url === '/my' && this.props.children}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default withRouter(Index)