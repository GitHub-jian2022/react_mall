import React, { Component } from 'react'
import { SearchHeader } from '../../components'
import { List } from 'antd-mobile';

const Item = List.Item;

export default class SetUp extends Component {
    state = {
        list: [
            { thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png', title: '个人信息' },
            { thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png', title: '账户安全' },
            { thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png', title: '通知消息提醒' },
            { thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png', title: '通用' },
            { thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png', title: '隐私' }
        ]
    }
    render() {
        return (
            <div>
                <SearchHeader returnbtn={true} text='设置'></SearchHeader>
                <List>
                    {this.state.list.map((item, index) => (
                        <Item
                            key={index}
                            thumb={item.thumb}
                            arrow="horizontal"
                            extra=''
                            onClick={() => { console.log(item.title) }}
                        >{item.title}</Item>
                    ))}
                </List>
            </div>
        )
    }
}
