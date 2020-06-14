import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, NavBar } from 'antd-mobile'

import { CartList } from '../components/index'
import '../assets/styles/Cart.scss'
import classnames from 'classnames'
import axios from '../utils/request'

// 顶部导航
function TextHeader(props) {
    return (
        <NavBar
            mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
               props.children
            ]}
        >购物车</NavBar>
    )
}

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteAll: false,
            checkedNum: 0,
            allPrice: 0,
            cartNmu: 0,
            data: []
        }
    }

    componentDidMount() {
        this.getCartList()
    }
    //获取购物车列表
    getCartList() {
        (async () => {
            let { data } = await axios.get('/api/alliance/cartList').then(res => res);
            this.setState({
                data: data,
                checkedNum: 0,
                allPrice: 0,
                cartNmu: 0,
            })
        })()
    }
    //全选
    allChange(e) {
        let checked = e.target.checked
        let newData = this.state.data.map((item, i) => {
            return {
                ...item,
                check: checked
            }
        })
        this.setState({
            data: newData
        })
        this.calc(newData)
    }
    //改变库存
    changeStock(id, val) {
        let newData = this.state.data.map((item, i) => {
            if (item.id === id) {
                return {
                    ...item,
                    value: val
                }
            } else {
                return item;
            }
        })
        this.setState({
            data: newData
        })
        this.calc(newData)
    }
    //点击
    checkChange(id, check) {
        let newData = this.state.data.map((item, i) => {
            if (item.id === id) {
                return {
                    ...item,
                    check: check
                }
            } else {
                return item;
            }
        })
        this.setState({
            data: newData
        })
        this.calc(newData)
    }
    //计算总价
    calc(newData) {
        let allPrice = 0;
        let checkedNum = 0;
        let cartNmu = 0;
        newData.forEach((item, i) => {
            if (item.check) {
                cartNmu += 1;
                checkedNum += parseFloat(item.value);
                allPrice += parseFloat(item.value) * parseFloat(item.price)
            }
        })
        this.setState({
            checkedNum,
            allPrice,
            cartNmu
        })
    }
    //购买
    buy() {
        console.log(this.state)
    }
    delete() {
        let deleteData = this.state.data.filter(v => {
            return v.check === true
        })
        console.log(deleteData)
    }
    render() {
        const { data, deleteAll } = this.state
        return (
            <div className="cart-page" style={{ overflow: 'hidden' }}>
                <TextHeader>
                    <span className="edit" onClick={(e) => {
                        e.preventDefault();
                        this.setState({ deleteAll: !this.state.deleteAll })
                    }}>
                    { 
                        deleteAll ? '返回' : '编辑'
                    }
                    </span>
                </TextHeader>
                    <div className="cart-body">
                        {
                            <CartList changeStock={this.changeStock.bind(this)} checkChange={this.checkChange.bind(this)} data={data}></CartList>
                        }
                    </div>
                    {
                        deleteAll ?
                            <div className="cart-footer">
                                <div>
                                    <Checkbox onChange={(e) => {
                                        this.allChange(e)
                                    }} />
                                    <div>全选</div>
                                </div>
                                <div></div>
                                <div className={classnames({
                                    'active': this.state.cartNmu > 0
                                })} onClick={() => {
                                    if (this.state.cartNmu > 0) {
                                        this.delete()
                                    }
                                }}>
                                    删除<span>({this.state.cartNmu})</span>
                                </div>
                            </div>
                            :
                            <div className="cart-footer">
                                <div>
                                    <Checkbox onChange={(e) => {
                                        this.allChange(e)
                                    }} />
                                    <div>全选</div>
                                </div>
                                <div className="all-pirce">
                                    <p>
                                        <span>总计：</span>
                                        <span>￥{this.state.allPrice}</span>
                                    </p>
                                </div>
                                <div className={classnames({
                                    'active': this.state.checkedNum > 0
                                })} onClick={() => {
                                    if (this.state.checkedNum > 0) {
                                        this.buy()
                                    }
                                }}>
                                    去结算<span>({this.state.checkedNum}件)</span>
                                </div>
                            </div>
                    }

            </div>
                )
            }
        }
        
export default connect()(Cart)