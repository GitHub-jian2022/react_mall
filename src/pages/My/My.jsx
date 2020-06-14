import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Toast, Badge, Icon } from 'antd-mobile';

import '../../assets/styles/My.scss'

class My extends Component {
    state = {
        isLogin: sessionStorage.getItem("isLogin") || false,
        messageCount: 0,
        navs: [
            {
                title: '收藏', num: 4, path: '/my/collection'
            },
            {
                title: '关注', num: 3
            },
            {
                title: '足迹', num: 1
            },
            {
                title: '红包卡券', num: 2
            },
        ],
    }

    componentDidMount() {
        // console.log(this.state.isLogin)
    }
    renderNavs = () => {
        return (
            <div className='top_nav'>
                {this.state.navs.map((item, index) => (
                    <div className='top_nav-item' key={index}
                        onClick={() => {
                            this.props.history.push(item.path)
                        }}
                    >
                        <span style={{ fontWeight: 'bold', fontSize: 18 }}>{item.num}</span>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        )
    }

    RenderTools = () => {
        return <div className='tools'>
            <div className='tools_item'
                onClick={() => this.props.history.push({
                    pathname: '/my/order',
                    initialPage: 1,
                    text: '待付款'
                })}>
                <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
                >&#xe60e;</i>
                <div>待付款</div>
            </div>
            <div className='tools_item'
            onClick={() => this.props.history.push({
                pathname: '/my/order',
                initialPage: 2,
                text: '待发货'
            })}>
                <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
                >&#xe618;</i>
                <div>待发货</div>
            </div>
            <div className='tools_item'
            onClick={() => this.props.history.push({
                pathname: '/my/order',
                initialPage: 3,
                text: '待收货'
            })}>
                <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
                >&#xe6b8;</i>
                <div>待收货</div>
            </div>
            <div className='tools_item'
            onClick={() => this.props.history.push({
                pathname: '/my/order',
                initialPage: 4,
                text: '待评价'
            })}>
                <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
                >&#xe61a;</i>
                <div>待评价</div>
            </div>
            <div className='tools_item'>
                <i className="iconfont" style={{ color: '#f00', fontSize: 28 }}
                >&#xe61b;</i>
                <div>退款/售后</div>
            </div>
        </div>
    }

    render() {
        const { messageCount } = this.state
        return (
            <Fragment>
                <div className='top'>
                    <div className='top_info'>
                        <div className='top_l'>
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=480783060,2515065005&fm=15&gp=0.jpg" alt="" />
                            <div className='userInfo'>
                                <div className='username'>老王</div>
                                <div className='userNav'>
                                    <div style={{ marginRight: 15 }}>信用购</div>
                                    <div>积分</div>
                                </div>
                            </div>
                        </div>
                        <div className='top-r'>
                            <i className="iconfont" style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
                                onClick={() => this.props.history.push('/search')}
                            >&#xe611;</i>
                            <i className="iconfont" style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}
                                onClick={() => this.props.history.push('/my/setup')}
                            >&#xe602;</i>
                            {
                                messageCount > 0 ?
                                    <Badge text={messageCount} overflowCount={99} >
                                        <i className="iconfont" style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
                                            onClick={() => console.log('message')}
                                        >&#xfe63;</i>
                                    </Badge> : <i className="iconfont" style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
                                        onClick={() => console.log('message')}
                                    >&#xfe63;</i>
                            }

                        </div>
                    </div>
                    {this.renderNavs()}
                </div>
                <div className='MyOrder'>
                    <div className='title' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3>我的订单</h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}
                            onClick={() => this.props.history.push({
                                pathname: '/my/order',
                                initialPage: 0,
                                text: '全部'
                            })}
                        >
                            <span style={{ color: '#888' }}>查看全部</span>
                            <Icon type='right' style={{ color: '#888' }} />
                        </div>
                    </div>
                    {this.RenderTools()}
                </div>
            </Fragment>
        )
    }
}

export default withRouter(My)
