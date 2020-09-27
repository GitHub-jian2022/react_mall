import React, { Component } from 'react'
import { SearchHeader } from '../../components'
import { List, Button, Modal } from 'antd-mobile';
import { Cookie } from '../../utils/storage'

const alert = Modal.alert
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
    logOut = () => {
        alert('退出登录', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => {
                // 清除token
                Cookie.removeItem('token')
                localStorage.clear()
                this.props.history.push('/login')
            } },
        ])
        
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
                <div style={{ marginTop: 20 }}>
                    <Button type="warning" onClick={this.logOut}>退出登录</Button>
                </div>
            </div>
        )
    }
}
