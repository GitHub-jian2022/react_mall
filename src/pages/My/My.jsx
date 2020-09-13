import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Badge, Icon, Toast } from 'antd-mobile';
import { Layout } from '../../components/index'
import '../../assets/styles/My.scss'
// 默认头像
import defalutAvatar from '../../assets/images/defalutAvatar.jpg'

class My extends Component {
  state = {
    messageCount: 1,
    navs: [
      {
        title: '收藏', num: 4, path: '/my/collection'
      },
      {
        title: '关注', num: 3, path: '/my/follow'
      },
      {
        title: '足迹', num: 3, path: '/my/browserecord'
      },
      {
        title: '余额', num: 666, path: '/my/purse'
      },
    ],
    tools: [
      {
        pathname: '/my/order',
        text: '待付款',
        icon: <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
        >&#xe60e;</i>
      },
      {
        pathname: '/my/order',
        text: '待发货',
        icon: <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
        >&#xe618;</i>
      },
      {
        pathname: '/my/order',
        text: '待收货',
        icon: <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
        >&#xe6b8;</i>
      },
      {
        pathname: '/my/order',
        text: '待评价',
        icon: <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
        >&#xe61a;</i>
      },
      {
        pathname: '/my/aftersale',
        text: '退款/售后',
        icon: <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
        >&#xe61b;</i>
      }
    ],
    user: {}
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    this.setState({ user })
  }
  renderNavs = () => {
    return (
      <div className='top_nav'>
        {this.state.navs.map((item, index) => (
          <div className='top_nav-item' key={index}
            onClick={() => {
              this.props.history.push({
                pathname: item.path,
                query: { data : item }
              })
            }}
          >
            <span>{item.num}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    )
  }

  RenderTools = () => {
    return <div className='tools'>
      {
        this.state.tools.map((item, index) => (
          <div className='tools_item'
            key={index}
            onClick={this.toolsItemClick.bind(this, {
              pathname: item.pathname,
              initialPage: index + 1,
              text: item.text
            })}>
            {item.icon}
            <div>{item.text}</div>
          </div>
        ))
      }
    </div>
  }
  toolsItemClick = (item) => {
    if (item.pathname === '/my/aftersale') {
      Toast.info('此功能暂未开通', 1)
      return
    }
    this.props.history.push({
      pathname: item.pathname,
      initialPage: item.initialPage,
      text: item.text
    })
  }
  render() {
    const { messageCount, user } = this.state
    return (
      <Layout>
        <div className='top'>
          <div className='top_info'>
            <div className='top_l'>
              <img src={user.avatar_url || defalutAvatar} alt="" />
              <div className='userInfo'>
                <div className='username'>{user.username || '请登录'}</div>
                <div className='userNav'>
                  <div>{user.gender || ''}</div>
                </div>
              </div>
            </div>
            <div className='top-r'>
              <i className="iconfont" onClick={() => this.props.history.push('/search')}
              >&#xe611;</i>
              <i className="iconfont set" 
                onClick={() => this.props.history.push('/my/setup')}
              >&#xe602;</i>
              {
                messageCount > 0 ?
                  <Badge text={messageCount} overflowCount={99} >
                    <i className="iconfont" 
                      onClick={() => {
                        Toast.info('此功能暂未开通', 1)
                        console.log('message')
                      }}
                    >&#xfe63;</i>
                  </Badge> : <i className="iconfont"
                    onClick={() => {
                      Toast.info('此功能暂未开通', 1)
                      console.log('message')
                    }}
                  >&#xfe63;</i>
              }

            </div>
          </div>
          {this.renderNavs()}
        </div>
        <div className='MyOrder'>
          <div className='title'>
            <h3>我的订单</h3>
            <div
              onClick={this.toolsItemClick.bind(this, {
                pathname: '/my/order',
                initialPage: 0,
                text: '全部'
              })}
            >
              <span>查看全部</span>
              <Icon type='right' size="14" color="#999" />
            </div>
          </div>
          {this.RenderTools()}
        </div>
      </Layout>
    )
  }
}

export default withRouter(My)
