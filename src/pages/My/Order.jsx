import React, { Component } from 'react'
import { SearchHeader, OrderList } from '../../components'
import { Tabs } from 'antd-mobile';

import { connect } from "react-redux";
import { getOrderList } from '../../store/action/orderAction'
import store from '../../store'

const tabs = [
  { title: '全部' },
  { title: '待付款' },
  { title: '待发货' },
  { title: '待收货' },
  { title: '待评价' },
];
class Order extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      const state = store.getState()
      const order_list = state.orderReducer.order_list
      // console.log('order_list: ', order_list);
      this.setState({
        order_list
      })
    })
    this.state = {
      order_list: []
    }

  }
  async componentDidMount() {
    //获取订单数据
    await this.props.getOrderList(0)
  }
  onChange = (tab) => {
    this.setState({ text: tab.title })
  }
  render() {
    const { order_list } = this.state
    const { initialPage, text } = this.props.location
    return (
      <div>
        <SearchHeader returnbtn={true} text={text}></SearchHeader>
        <Tabs tabs={tabs}
          initialPage={initialPage}
          onChange={(tab, index) => this.onChange(tab)}
          onTabClick={(tab, index) => { console.log('onTabClick', tab); }}
        >
          {
            tabs.map((item,index) => (
              <OrderList order_list={order_list} key={index} />
            ))
          }
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    order_list: state.orderReducer.order_list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderList: (value) => {
      dispatch(getOrderList(value));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order)