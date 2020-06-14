import React, { Component } from 'react'
import { SearchHeader, GoodsList } from '../../components'
import { Tabs } from 'antd-mobile';

const tabs = [
    { title: '全部' },
    { title: '待付款' },
    { title: '待发货' },
    { title: '待收货' },
    { title: '待评价' },
];
const Tab1 = () => {
    return (
        <div>
            <GoodsList />
        </div>
    )
}
export default class Order extends Component {
    state = {
       
    }
    componentDidMount() {
        
    }
    render() {
        const {  initialPage, text } = this.props.location
        return (
            <div>
                <SearchHeader returnbtn={true} text={text}></SearchHeader>
                <Tabs tabs={tabs}
                    initialPage={initialPage}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ backgroundColor: '#fff' }}>
                        <Tab1 />
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ backgroundColor: '#fff' }}>

                    </div>
                </Tabs>
            </div>
        )
    }
}
