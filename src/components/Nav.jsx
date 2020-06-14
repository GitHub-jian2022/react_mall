import React, { Component } from 'react'
import nav_img1 from '../assets/images/nav-1.png'
import nav_img2 from '../assets/images/nav-2.png'
import nav_img3 from '../assets/images/nav-3.png'
import nav_img4 from '../assets/images/nav-4.png'
import { WingBlank } from 'antd-mobile';

import '../assets/styles/Nav.scss'

export default class Nav extends Component {
    state = {
        Navs: [
            {
                img: nav_img1,
                title: '9.9元包邮'
            },
            {
                img: nav_img2,
                title: '限时抢购'
            },
            {
                img: nav_img3,
                title: '拼团'
            },
            {
                img: nav_img4,
                title: '大牌手机'
            }
        ]
    }
    onChangeNav = (index) => {
        console.log('index: ', index);

    }
    render() {
        return (
            <WingBlank>
                <div className='Nav'>
                    {this.state.Navs.map((item, index) => (
                        <div key={index} className='Nav_item' onClick={this.onChangeNav.bind(this,index)}>
                            <div>
                                <img alt='' src={item.img}></img>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                    <div>

                    </div>
                </div>
            </WingBlank>
        )
    }
}
